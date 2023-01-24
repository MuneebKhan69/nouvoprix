import {Colors, NavService} from '../../config';
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import CustomBackground from '../../components/CustomBackground';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTextInputView from '../../components/CustomTextInputView';
import Icons from '../../assets/Icons';
import * as EmailValidator from 'email-validator';
// import {login} from '../../../redux/APIs';
import Toast from 'react-native-toast-message';
import { schema } from '../../config/Helpers/Validator';
import {ToastError, ToastSuccess} from '../../config/Helpers/Toast';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onSubmit = () => {
    const { email, password } = this.state;
    if (!email && !password) {
      Toast.show({
        text1: 'Please enter all fields',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!email) {
      Toast.show({
        text1: 'Please enter email address',
        type: 'error',
        visibilityTime: 3000,
      });
    }
    else if (!EmailValidator.validate(email)) {
      Toast.show({
        text1: 'Please enter a valid email address',
        type: 'error',
        visibilityTime: 3000,
      });
    }
    else if (!password) {
      Toast.show({
        text1: 'Please enter password',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!schema.validate(password)) {
      Toast.show({
        text1: 'Password not valid (Use atleast one UpperCase Letter, one number and one special character',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      NavService.navigate('UserStack');
      Toast.show(ToastSuccess("Successfully Login"))
    }
  };


  render() {
    const {email, password} = this.state;
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
              Sign In
            </Text>
            <CustomTextInputView
              placeholder={'Email'}
              label={'Email'}
              value={email}
              Onchange={value => this.setState({email: value})}
              containerStyle={{
                marginBottom: 20,
                width: '85%',
                color: Colors.grey
              }}
            />
            <CustomTextInputView
              placeholder={'Password'}
              Onchange={value => this.setState({password: value})}
              label={'Password'}
              value={password}
              containerStyle={{
                // marginBottom: 20,
                width: '85%',
                color: Colors.grey
              }}
            />
            <TouchableOpacity
              onPress={() => NavService.navigate('ForgotPassword')}
              activeOpacity={0.8}
              style={{
                marginLeft: 200,
                marginTop: -20,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: Colors.primary,
                  marginVertical: 20,
                  textDecorationLine: 'underline',
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <CustomButton title="Sign In" onPress={this.onSubmit} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: '20%',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: Colors.grey,
              }}>
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => NavService.navigate('Signin')}>
              <Text
                style={{
                  color: Colors.primary,
                  textDecorationLine: 'underline',
                  textDecorationColor: Colors.primary,
                  fontSize: 16,
                  // marginTop: 5,
                }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default Login;
