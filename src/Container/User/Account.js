import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import AppBackground from '../../components/AppBackground';
import {Colors, NavService, Shadows} from '../../config';
import Icons from '../../assets/Icons';
import CustomTextInputView from '../../components/CustomTextInputView';
import ActionSheetComponent from '../../components/ActionSheetComponent';
import languages from '../../assets/Data/languages';

const Account = () => {
  const actionSheetLanguageRef = useRef();
  const [language, setLanguage] = useState(false);
  const [updatedLang, setUpdatedLang] = useState('');

  return (
    <AppBackground product={true} title="Account" notification={false}>
      <View
        style={{
          height: 240,
          backgroundColor: Colors.white,
          marginTop: 10,
          borderRadius: 20,
          ...Shadows.shadow5,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Image source={Icons.star} style={{height: 40, width: 40}} />
            <Text
              style={{
                fontSize: 16,
                color: Colors.grey,
                fontWeight: '500',
              }}>
              4.5
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: Colors.primary,
              height: 100,
              width: 100,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              marginTop: 20,
            }}>
            <Image
              source={Icons.profile}
              style={{
                height: 99,
                width: 99,
              }}
            />
          </View>
          <Text
            style={{
              color: Colors.black,
              fontWeight: '700',
              fontSize: 18,
              marginVertical: 10,
            }}>
            Jhony Sincs
          </Text>

          <Text
            style={{
              color: Colors.grey,
              fontSize: 14,
              marginBottom: 4,
            }}>
            Jhonysincs@gmail.com
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={Icons.location}
              style={{
                height: 12,
                width: 12,
                marginRight: 10,
              }}
            />
            <Text
              style={{
                color: Colors.grey,
                fontSize: 14,
              }}>
              31,Phoenix,AZ
            </Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              NavService.navigate('EditeProfile');
            }}
            style={{
              alignItems: 'center',
              marginTop: 20,
              backgroundColor: Colors.white,
              borderRadius: 30,
              height: 42,
              width: 42,
              justifyContent: 'center',
              ...Shadows.shadow3,
            }}>
            <Image
              source={Icons.write}
              style={{
                height: 25,
                width: 25,
                tintColor: Colors.primary,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            color: Colors.black,
            fontSize: 16,
            fontWeight: '600',
          }}>
          Update Language:
        </Text>
        {!language ? (
          <TouchableOpacity
            onPress={() => setLanguage(!language)}
            style={{
              backgroundColor: Colors.white,
              height: Dimensions.get('window').height * 0.05,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 20,
              paddingHorizontal: 12,
              ...Shadows.shadow5,
            }}>
            <Text
              style={{
                color: Colors.grey,
                marginRight: 10,
              }}>
              {updatedLang ? updatedLang.toString() : 'Haitain Creole'}
            </Text>
            <Image
              style={{
                height: Dimensions.get('window').height * 0.01,
                width: Dimensions.get('window').width * 0.03,
              }}
              source={Icons.downFall}
            />
          </TouchableOpacity>
        ) : (
          <View
            style={{
              backgroundColor: Colors.white,
              height: Dimensions.get('window').height * 0.2,
              // flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 20,
              justifyContent: 'space-between',
              borderRadius: 20,
              paddingHorizontal: 12,
              ...Shadows.shadow5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: Colors.grey,
                  marginRight: 10,
                }}>
                Haitain Creole
              </Text>
              <Image
                style={{
                  height: Dimensions.get('window').height * 0.01,
                  width: Dimensions.get('window').width * 0.03,
                }}
                source={Icons.downFall}
              />
            </View>
            <FlatList
              data={languages}
              showsVerticalScrollIndicator={false}
              style={{
                width: '100%',
                marginTop: 6,
                backgroundColor: 'white',
                borderRadius: 10,
                paddingLeft: 8,
              }}
              renderItem={item => (
                <TouchableOpacity
                  onPress={() => {
                    setUpdatedLang(item.item);
                    if (updatedLang) {
                      setLanguage(!language);
                    }
                  }}
                  style={{
                    marginBottom: 10,
                    marginTop: 6,
                  }}>
                  <Text
                    style={{
                      color: Colors.grey,
                      fontSize: 16,
                    }}>
                    {item.item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>
    </AppBackground>
  );
};

export default Account;

const styles = StyleSheet.create({});
