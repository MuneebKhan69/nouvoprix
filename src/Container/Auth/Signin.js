import {Colors, NavService} from '../../config';
import React, {Component} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';

import CustomBackground from '../../components/CustomBackground';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTextInputView from '../../components/CustomTextInputView';
import Icons from '../../assets/Icons';
import * as EmailValidator from 'email-validator';
import Toast from 'react-native-toast-message';
import {ToastError, ToastSuccess} from '../../config/Helpers/Toast';

class Signin extends Component {
  state = {
    email: '',
    password: '',
    ConfirmPassword: '',
  };

  OnSubmit = () => {
    const {email, password, ConfirmPassword} = this.state;
    if (email) {
      if (EmailValidator.validate(email)) {
        if (password) {
          if (ConfirmPassword) {
            if (password === ConfirmPassword) {
              if (password.length >= 8) {
                NavService.navigate('OTP', {screen: 'signup'});
                Toast.show(
                  ToastSuccess(
                    'OTP verification code has been sent to your email address',
                  ),
                );
              } else {
                Toast.show(
                  ToastError(
                    'Password must be of 8 characters long and contain atleast 1 uppercase, 1 lowercase, 1 digit and 1 special character.',
                  ),
                );
              }
            } else {
              Toast.show(
                ToastError('Password and Confirm Password must be same.'),
              );
            }
          } else {
            Toast.show(ToastError("Confirmed Password field can't be empty"));
          }
        } else {
          Toast.show(ToastError("Password field can't be empty"));
        }
      } else {
        Toast.show(ToastError('Please enter valid email address'));
      }
    } else {
      Toast.show(ToastError("Email field can't be empty"));
    }
  };

  render() {
    const {email, password, ConfirmPassword} = this.state;
    return (
      <CustomBackground>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              flex: 1,
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: Colors.black,
                marginVertical: '8%',
              }}>
              Sign Up
            </Text>
            <CustomTextInputView
              containerStyle={{
                marginBottom: 20,
                width: '85%',
                color: Colors.black,
              }}
              placeholder={'Email'}
              label={'Email'}
              value={email}
              Onchange={value => this.setState({email: value})}
            />
            <CustomTextInputView
              containerStyle={{
                marginBottom: 20,
                width: '85%',
                color: Colors.black,
              }}
              placeholder={'Password'}
              label={'Password'}
              value={password}
              Onchange={value => this.setState({password: value})}
            />
            <CustomTextInputView
              containerStyle={{
                marginBottom: 20,
                width: '85%',
                color: Colors.black,
              }}
              placeholder={'Confirm Password'}
              label={'Password'}
              value={ConfirmPassword}
              Onchange={value => this.setState({ConfirmPassword: value})}
            />
            <CustomButton
              title="Sign Up"
              onPress={this.OnSubmit}
              buttonStyle={{
                marginTop: 20,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: Colors.grey,
              }}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => NavService.navigate('Login')}>
              <Text
                style={{
                  color: Colors.primary,
                  textDecorationLine: 'underline',
                  textDecorationColor: Colors.primary,
                  // marginTop: 5,
                  fontSize: 16,
                }}>
                Login Now!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default Signin;
