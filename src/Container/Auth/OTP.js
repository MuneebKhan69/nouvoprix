import React, {Component, useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Keyboard,
  Dimensions,
} from 'react-native';
import {Colors, NavService, Shadows} from '../../config';
import CustomBackground from '../../components/CustomBackground';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import Icons from '../../assets/Icons';
import OTPTextInput from '@twotalltotems/react-native-otp-input';
import AppBackground from '../../components/AppBackground';
import Toast from 'react-native-toast-message';
import {ToastError, ToastSuccess} from '../../config/Helpers/Toast';
// import {login} from '../../redux/actions';
// import {connect} from 'react-redux';
// import {resendVerifyCode, verifyCode} from '../../redux/APIs';

const {width} = Dimensions.get('window');

class OTP extends Component {
  state = {
    code: '',
    timerCode: 60,
    resend: false,
    otpInput: null,
    keyboardStatus: undefined,
    OTP: '123456',
  };
  constructor(props) {
    super(props);
    this.timer = null;
  }

  SubmitCode = code => {
    const {OTP} = this.state;
    const {screen} = this.props.route.params;
    if (code === OTP) {
      if (screen == 'signup') {
        NavService.navigate('CompleteProfile');
      } else if (screen == 'forgot') {
        NavService.navigate('ChangePassword', {screen: 'forgot'});
      }
      Toast.show(ToastSuccess('OTP verified'));
    } else {
      Toast.show(ToastError('Invalid OTP verification code.'));
    }
  };

  componentDidMount() {
    this.startInterval();
  }
  startInterval = () => {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      const {timerCode} = this.state;
      if (timerCode < 1) {
        clearInterval(this.timer);
        this.setState({resend: true});
      } else this.setState({timerCode: timerCode - 1});
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {timerCode, resend, code} = this.state;
    const otpContainerWidth = width - 60;
    const otpsingle = (width - 90) / 6;
    return (
      <CustomBackground>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{flexGrow: 1}}
          contentContainerStyle={{
            alignItems: 'center',
            flexGrow: 1,
          }}>
          <View
            style={{
              marginTop: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{color: Colors.black, fontSize: 18, fontWeight: '700'}}>
              Verification
            </Text>
            <Text
              numberOfLines={3}
              style={{
                marginHorizontal: '15%',
                textAlign: 'center',
                marginTop: 16,
                color: Colors.grey,
                fontWeight: '400',
              }}>
              We have sent you a six-digits verification code with instructions.
              Please follow the instructions to verify your account
            </Text>
          </View>
          <OTPTextInput
            style={{width: otpContainerWidth, height: otpsingle}}
            pinCount={6}
            code={code}
            onCodeChanged={c => {
              this.setState({code: c});
            }}
            onCodeFilled={code => this.SubmitCode(code)}
            autoFocusOnLoad
            codeInputFieldStyle={{
              marginTop: 25,
              width: otpsingle,
              height: otpsingle,
              backgroundColor: Colors.white,
              borderRadius: otpsingle,
              color: Colors.grey,
              borderWidth: 0,
              ...Shadows.shadow5,
              fontSize: 18,
              fontWeight: '500',
              color: Colors.black,
            }}

            //   onCodeFilled={code => this.continue(code)}
          />
          {/* <OTPTextInput
            autoFocusOnLoad={false}
            pinCount={6}
            code={code}
            onCodeChanged={code => {
              this.setState({code});
            }}
            tintColor={Colors.grey}
            textInputStyle={{
              borderBottomWidth: 1,
              color: Colors.grey,
            }}
            containerStyle={{
              height: 80,
              marginTop: '10%',
            }}
          /> */}

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginVertical: '10%',
              }}>
              <Image
                style={{
                  height: 50,
                  width: 50,
                }}
                source={Icons.clock}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginTop: 10,
                  color: Colors.black,
                  alignSelf: 'center',
                }}>
                00:{timerCode}
              </Text>
            </View>
          </View>
          <Text
            onPress={
              resend
                ? async () => {
                    // await resendVerifyCode(user_id);
                    this.setState({timerCode: 60, resend: false, code: ''});
                    this.startInterval();
                    Toast.show(
                      ToastSuccess(
                        'We have resend OTP verification code at your email address',
                      ),
                    );
                  }
                : null
            }
            style={{
              color: Colors.black,
              fontWeight: resend ? '600' : '300',
              alignSelf: 'center',
              fontSize: 14,
              top: Dimensions.get('window').height * 0.08,
            }}>
            Didn't Receive Code?{' '}
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: Colors.black,
              }}>
              Resend
            </Text>
          </Text>

          {/* <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginVertical: '10%',
              }}>
              <Image
                style={{
                  height: 50,
                  width: 50,
                }}
                source={Icons.clock}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginTop: 10,
                  color: '#fff',
                  alignSelf: 'center',
                }}>
                00:{timerCode}
              </Text>
            </View>
          </View> */}

          {/* <CustomButton
            title={'CONTINUE'}
            // onPress={async () => await verifyCode(code, user_id)}
            onPress={async () => NavService.navigate('CompleteProfile')}
            label={''}
          />
          <Text
            onPress={
              resend
                ? async () => {
                    // await resendVerifyCode(user_id);
                    this.setState({timerCode: 60, resend: false, code: ''});
                    this.startInterval();
                  }
                : null
            }
            style={{
              // marginTop: 100,
              color: '#fff',
              fontWeight: resend ? '600' : '300',
              alignSelf: 'center',
              fontSize: 14,
              position: 'absolute',
              top: 410,
            }}>
            Didn't Receive Code?{' '}
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
              }}>
              Resend
            </Text>
          </Text> */}
        </ScrollView>
      </CustomBackground>
    );
  }
}

export default OTP;
