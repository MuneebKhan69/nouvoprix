import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  View,
  Dimensions,
  Linking,
} from 'react-native';
import React, {Component} from 'react';
import Toast from 'react-native-toast-message';
import Icons from '../assets/Icons';
import {Colors, NavService, Shadows} from '../config';
import {ToastError, ToastSuccess} from '../config/Helpers/Toast';

const menuItems = [
  {
    icon: Icons.home,
    title: 'Home',
    nav: 'home',
  },
  {
    icon: Icons.stats,
    title: 'My Trades',
    nav: 'MyTrades',
  },
  {
    icon: Icons.msg,
    title: 'My Messages',
    nav: 'ChatList',
  },
  {
    icon: Icons.setting,
    title: 'Settings',
    nav: 'Setting',
    children: [
      {
        icon: Icons.password,
        title: 'Change Password',
        nav: 'ChangePassword',
        routeParam: 'screen',
      },
      // {
      //   icon: Icons.card,
      //   title: 'Payment Settings',
      //   nav: 'MyMessages',
      // },
      {
        icon: Icons.termComdition,
        title: 'Terms & Conditions',
        browser: 'https://www.google.com',
      },
      {
        icon: Icons.PrivacyPolicy,
        title: 'Privacy Policy',
        nav: 'Messages',
        browser: 'https://www.google.com',
      },
    ],
  },
  {
    icon: Icons.power,
    title: 'Logout',
    nav: 'AuthStack',
  },
];

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

class Drawer extends Component {
  state = {
    renderSubMenu: false,
    selected: false,
  };
  _renderItem({title, icon, nav, children}) {
    const {renderSubMenu, selected} = this.state;
    return (
      <>
        {children ? (
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                this.setState({
                  renderSubMenu: !this.state.renderSubMenu,
                  selected: !selected,
                });
                LayoutAnimation.linear();
              }}
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                // marginBottom: 10,
                borderBottomWidth: !selected ? 3.2 : null,
                borderColor: !selected ? '#eeeeee' : null,
                paddingHorizontal: 20,
                justifyContent: 'space-between',
                height: Dimensions.get('window').height * 0.08,
                backgroundColor: selected ? Colors.primary : null,
                borderRadius: 8,
                marginTop: 0,
              }}>
              <Text
                style={{
                  marginLeft: 10,
                  color: selected ? Colors.white : Colors.black,
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                {title}
              </Text>
              <View
                style={{
                  padding: 10,
                  borderRadius: 7,
                  marginBottom: 5,
                }}>
                <Image
                  source={icon}
                  style={{
                    tintColor: selected ? Colors.white : Colors.black,
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                  }}
                />
              </View>
            </TouchableOpacity>
            {renderSubMenu && (
              <>
                {children.map((item, index) => {
                  const {title, icon, nav} = item;
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        if (item?.routeParam) {
                          this.props.navigation.navigate(nav, {
                            screen: item?.routeParam,
                          });
                        } else if (item?.browser) {
                          Linking.openURL(item?.browser);
                        } else {
                          this.props.navigation.navigate(nav);
                        }
                      }}
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 10,
                        borderBottomWidth: 3.2,
                        borderColor: '#eeeeee',
                        paddingHorizontal: 20,
                        justifyContent: 'space-between',
                        height: Dimensions.get('window').height * 0.065,
                      }}>
                      <Text
                        style={{
                          marginLeft: 10,
                          color: Colors.primary,
                          fontSize: 16,
                          fontWeight: '700',
                        }}>
                        {title}
                      </Text>
                      <View
                        style={{
                          padding: 10,
                          borderRadius: 7,
                          marginBottom: 5,
                        }}>
                        <Image
                          source={icon}
                          style={{
                            tintColor: Colors.primary,
                            width: 20,
                            height: 20,
                            resizeMode: 'contain',
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </>
            )}
          </View>
        ) : (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if (title === 'Logout') {
                // this.props.saveUser(null);
                NavService.reset(0, [{name: nav}]);
                Toast.show(ToastSuccess('Logout successfully'));
              } else {
                this.props.navigation.navigate(nav);
              }
            }}
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              // marginBottom: 10,
              borderBottomWidth: 3.2,
              borderColor: '#eeeeee',
              paddingHorizontal: 20,
              justifyContent: 'space-between',
              height: Dimensions.get('window').height * 0.08,
              marginTop: 0,
              // elevation: 0.2,
            }}>
            <Text
              style={{
                marginLeft: 10,
                color: Colors.black,
                fontSize: 16,
                fontWeight: '600',
              }}>
              {title}
            </Text>
            <View
              style={{
                padding: 10,
                borderRadius: 7,
                marginBottom: 5,
              }}>
              <Image
                source={icon}
                style={{
                  tintColor: Colors.black,
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      </>
    );
  }
  render() {
    const {user} = this.props;
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: Colors.white,
          alignItems: 'center',
          // paddingTop: getStatusBarHeight(),
          // borderTopRightRadius: 30,
          // borderBottomRightRadius: 30,
        }}>
        <View
          style={{
            height: Dimensions.get('window').height * 0.18,
            width: '101%',
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            marginBottom: 20,
            ...Shadows.shadow3,
          }}>
          <TouchableOpacity
            onPress={() => NavService.navigate('Profile')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: Dimensions.get('window').height * 0.06,
              width: Dimensions.get('window').width * 0.6,
              marginLeft: 14,
              height: Dimensions.get('window').height * 0.08,
            }}>
            <Image
              source={Icons.profile}
              style={{
                height: Dimensions.get('window').height * 0.064,
                width: Dimensions.get('window').width * 0.12,
                marginLeft: 10,
              }}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{color: Colors.black, fontSize: 16, fontWeight: '700'}}>
                Jhon Smith
              </Text>
              <Text
                style={{color: Colors.grey, fontSize: 14, fontWeight: '400'}}>
                jhon@email.com
              </Text>
            </View>
          </TouchableOpacity>
          {/* <ProfileImage size={140} imageUri={user?.image} name={user?.name} />
          <Text> {user?.name}</Text>
          <Text
            numberOfLines={1}
            style={{
              color: Colors.grey,
              fontSize: 14,
              marginTop: 5,
              fontWeight: '600',
            }}>
            {user?.email}
          </Text> */}
        </View>
        <View style={{flex: 1, marginTop: 10, width: '100%'}}>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={menuItems}
            style={{
              height: '100%',
            }}
            renderItem={({item}) => this._renderItem(item)}
          />
        </View>
      </View>
    );
  }
}

function mapState({reducer: {user}}) {
  return {
    user,
  };
}

function mapDispatch(dispatch) {
  return {
    saveUser: user => {
      dispatch({type: 'SAVE_USER', payload: user});
    },
  };
}

export default Drawer;
