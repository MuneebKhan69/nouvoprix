import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, Shadows} from '../config';
import Icons from '../assets/Icons';

const CustomTextInputView = ({
  placeholder,
  label,
  containerStyle,
  type,
  location,
  down,
  value,
  Onchange,
  editable = true,
  openActionSheet,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View
      style={[
        containerStyle,
        {
          ...Shadows.shadow3,
          // height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 32,
          marginBottom: 16,
          backgroundColor: Colors.white,
        },
      ]}>
      {openActionSheet ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => openActionSheet()}
          style={{
            width: '100%',
            height: 55,
            backgroundColor: Colors.white,
            flexDirection: 'row',
            borderRadius: 30,
            padding: 4,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => openActionSheet()}
            style={{
              flex: label ? 1 : null,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: -50,
            }}>
            {label == 'Password' && (
              <Image
                source={Icons.password}
                style={{height: 22, width: 22, resizeMode: 'contain'}}
              />
            )}
            {label == 'Email' && (
              <Image
                source={Icons.email}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                  marginLeft: 8,
                }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => openActionSheet()}
            style={{
              flex: label == 'Name' ? 10 : 9,
              marginLeft: label == 'Name' ? -8 : 6,
              flexDirection: label == 'Password' ? 'row' : 'column',
            }}>
            {label == 'Email' && (
              <View
                style={{flex: 4, justifyContent: 'center', paddingLeft: 10}}>
                <Text
                  style={{
                    color: Colors.primary,
                    fontWeight: '600',
                  }}>
                  Email
                </Text>
              </View>
            )}
            {label == 'Name' && (
              <View
                style={{
                  flex: 5,
                  justifyContent: 'center',
                  paddingBottom: 2,
                  // marginBottom: 2,
                }}>
                <Text
                  style={{
                    color: Colors.primary,
                    fontWeight: '600',
                    paddingLeft: 0,
                  }}>
                  Name
                </Text>
              </View>
            )}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => openActionSheet()}
              style={{
                flex: label == 'Email' ? 6 : 9,
                justifyContent:
                  label == 'Password' ? 'center' : 'space-between',
                paddingTop: !label ? 10 : 0,
                // backgroundColor: 'red',
                flexDirection: location || down ? 'row' : 'column',
                alignItems: 'center',
                // backgroundColor: 'red',
              }}>
              <TextInput
                value={value}
                onChangeText={Onchange}
                placeholderTextColor={Colors.grey}
                style={{
                  justifyContent: 'center',
                  padding: 5,
                  fontSize: 15,
                  paddingLeft: label == 'Name' ? -4 : 14,
                  fontWeight: '400',
                  color: Colors.black,
                  alignSelf: 'flex-start',
                  width: '100%',
                }}
                placeholder={placeholder}
                secureTextEntry={label == 'Password' ? !visible : false}
                keyboardType={type}
                editable={editable}
              />
              {location && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    // left: Dimensions.get('window').width * 0.52,
                    alignSelf: 'flex-start',
                    marginTop: 10,
                    right: 30,
                    // marginLeft: 30,
                  }}>
                  <Image
                    source={Icons.location}
                    style={{
                      height: Dimensions.get('window').height * 0.026,
                      width: Dimensions.get('window').width * 0.05,
                    }}
                  />
                </TouchableOpacity>
              )}
              {down && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => openActionSheet()}
                  style={{
                    // left: Dimensions.get('window').width * 0.49,
                    // left: '100%',
                    alignSelf: 'flex-start',
                    marginTop: 10,
                    right: 30,
                  }}>
                  <Image
                    source={Icons.downFall}
                    style={{
                      height: Dimensions.get('window').height * 0.012,
                      width: Dimensions.get('window').width * 0.04,
                      // marginRight: 10,
                    }}
                  />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
            {label == 'Password' && (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginRight: 6,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setVisible(!visible);
                  }}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={!visible ? Icons.Unvisible : Icons.visible}
                    style={{
                      height: 22,
                      width: 22,
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            width: '100%',
            height: 55,
            backgroundColor: Colors.white,
            flexDirection: 'row',
            borderRadius: 30,
            padding: 4,
          }}>
          <View
            style={{
              flex: label ? 1 : null,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: -50,
            }}>
            {label == 'Password' && (
              <Image
                source={Icons.password}
                style={{height: 22, width: 22, resizeMode: 'contain'}}
              />
            )}
            {label == 'Email' && (
              <Image
                source={Icons.email}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                  marginLeft: 8,
                }}
              />
            )}
          </View>
          <View
            style={{
              flex: label == 'Name' ? 10 : 9,
              marginLeft: label == 'Name' ? -8 : 6,
              flexDirection: label == 'Password' ? 'row' : 'column',
            }}>
            {label == 'Email' && (
              <View
                style={{flex: 4, justifyContent: 'center', paddingLeft: 10}}>
                <Text
                  style={{
                    color: Colors.primary,
                    fontWeight: '600',
                  }}>
                  Email
                </Text>
              </View>
            )}
            {label == 'Name' && (
              <View
                style={{
                  flex: 5,
                  justifyContent: 'center',
                  paddingBottom: 2,
                  // marginBottom: 2,
                }}>
                <Text
                  style={{
                    color: Colors.primary,
                    fontWeight: '600',
                    paddingLeft: 0,
                  }}>
                  Name
                </Text>
              </View>
            )}
            <View
              style={{
                flex: label == 'Email' ? 6 : 9,
                justifyContent:
                  label == 'Password' ? 'center' : 'space-between',
                paddingTop: !label ? 10 : 0,
                // backgroundColor: 'red',
                flexDirection: location || down ? 'row' : 'column',
                alignItems: 'center',
                // backgroundColor: 'red',
              }}>
              <TextInput
                value={value}
                onChangeText={Onchange}
                placeholderTextColor={Colors.grey}
                style={{
                  justifyContent: 'center',
                  padding: 5,
                  fontSize: 15,
                  paddingLeft: label == 'Name' ? -4 : 14,
                  fontWeight: '400',
                  color: Colors.black,
                  alignSelf: 'flex-start',
                  width: '100%',
                }}
                placeholder={placeholder}
                secureTextEntry={label == 'Password' ? !visible : false}
                keyboardType={type}
                editable={editable}
              />
              {location && (
                <TouchableOpacity
                  style={{
                    // left: Dimensions.get('window').width * 0.52,
                    alignSelf: 'flex-start',
                    marginTop: 5,
                    right: 30,
                    // marginLeft: 30,
                  }}>
                  <Image
                    source={Icons.location}
                    style={{
                      height: Dimensions.get('window').height * 0.026,
                      width: Dimensions.get('window').width * 0.05,
                    }}
                  />
                </TouchableOpacity>
              )}
              {down && (
                <TouchableOpacity
                  style={{
                    // left: Dimensions.get('window').width * 0.49,
                    // left: '100%',
                    alignSelf: 'flex-start',
                    marginTop: 10,
                    right: 30,
                  }}>
                  <Image
                    source={Icons.downFall}
                    style={{
                      height: Dimensions.get('window').height * 0.012,
                      width: Dimensions.get('window').width * 0.04,
                      // marginRight: 10,
                    }}
                  />
                </TouchableOpacity>
              )}
            </View>
            {label == 'Password' && (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginRight: 6,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setVisible(!visible);
                  }}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={!visible ? Icons.Unvisible : Icons.visible}
                    style={{
                      height: 22,
                      width: 22,
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default CustomTextInputView;

const styles = StyleSheet.create({});
