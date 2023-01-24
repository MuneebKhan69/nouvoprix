import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppBackground from '../../components/AppBackground';
import FastInput from '../../components/FastInput';
import CustomButton from '../../components/CustomButton';
import Toast from 'react-native-toast-message';
import {ToastError, ToastSuccess} from '../../config/Helpers/Toast';
import {NavService} from '../../config';

const ChangePassword = ({route}) => {
  const {screen} = route.params;
  const [existingPasswrod, setExistingPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function OnChange() {
    if (existingPasswrod) {
      if (newPassword) {
        if (newPassword.length >= 8) {
          if (confirmPassword.length >= 8) {
            if (newPassword.length === confirmPassword.length) {
              if (screen == 'forgot') {
                NavService.navigate('Login');
              } else {
                NavService.goBack();
              }
              Toast.show(ToastSuccess('Password changed successfully'));
            } else {
              Toast.show(
                ToastError('New Password and Confirm Password must be same'),
              );
            }
          } else {
            Toast.show(
              ToastError("Confirm New Password field can't be empty."),
            );
          }
        } else {
          Toast.show(
            ToastError(
              'Password must be of 8 characters long and contain atleast 1 uppercase, 1 lowercase, 1 digit and 1 special character.',
            ),
          );
        }
      } else {
        Toast.show(ToastError("New Password field can't be empty."));
      }
    } else {
      Toast.show(ToastError("Existing Password field can't be empty"));
    }
  }
  return (
    <AppBackground back notification={false} title="Change Password">
      <FastInput
        label={'Existing Password'}
        placeholder={''}
        password
        value={existingPasswrod}
        Onchange={value => setExistingPassword(value)}
      />
      <FastInput
        placeholder={'New Password'}
        password
        value={newPassword}
        Onchange={value => setNewPassword(value)}
      />
      <FastInput
        placeholder={'Confirm New Password'}
        password
        value={confirmPassword}
        Onchange={value => setConfirmPassword(value)}
      />
      <CustomButton
        onPress={OnChange}
        title="Change"
        buttonStyle={{
          top: Dimensions.get('window').height * 0.46,
          alignSelf: 'center',
        }}
      />
    </AppBackground>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
