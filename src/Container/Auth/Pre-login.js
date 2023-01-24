import {
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

// import {Colors} from '../../../config';
import Colors from '../../config/colors';
import CustomBackground from '../../components/CustomBackground';
// import SocialSignin from '../../../components/SocialSignin';
// import Icons from '../../../assets/Icons';

const {width} = Dimensions.get('window');

class App extends Component {
  state = {
    agreementModal: false,
    terms: false,
    policy: false,
    navigator: '',
  };

  render() {
    const {agreementModal, terms, policy, navigator} = this.state;
    const methods = [
      {
        name: 'Email',
        icon: Icons.email,
        onPress: () => navigation.navigate('Login'),
        color: Colors.primary,
      },
      {
        name: 'Facebook',
        icon: Icons.facebook,
        color: Colors.facebook,
        // onPress: SocialSignin.Facebook,
      },
      {
        name: 'Google',
        icon: Icons.google,
        color: Colors.google,
        // onPress: SocialSignin.Google,
      },
      {
        name: 'Apple',
        icon: Icons.apple,
        color: 'Black',
        // onPress: SocialSignin.Apple,
      },
    ];
    const {navigation} = this.props;
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
              Pre-Login
            </Text>
            {methods.map((method, i) => {
              const {color, name, icon, onPress} = method;
              if (Platform.OS !== 'ios' && name === 'Apple') return null;
              return (
                <TouchableOpacity
                  onPress={onPress}
                  key={i}
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: color,
                    borderRadius: 30,
                    width: width - 60,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 7,
                    height: 60,
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={icon}
                    style={{
                      marginRight: 20,
                      width: 20,
                      height: 20,
                      resizeMode: 'contain',
                      tintColor: Colors.white,
                      position: 'absolute',
                      left: width / 8,
                    }}
                  />

                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: Colors.white,
                      position: 'absolute',
                      left: width / 4,
                    }}>
                    Continue with {name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default App;
