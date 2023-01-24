import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppBackground from '../../components/AppBackground';
import {Colors, NavService, Shadows} from '../../config';
import CustomButton from '../../components/CustomButton';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';
import Swiper from 'react-native-swiper';
const {width, height} = Dimensions.get('window');
const ProductFeatures = () => {
  ImagesCollections = [
    {
      image: Images.cup,
    },
    {
      images: Images.chair,
    },
    {
      images: Images.tabel,
    },
  ];
  return (
    <AppBackground back title={'Product Detail'} notification={false}>
      <ScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text
            style={{
              fontSize: 19,
              color: Colors.black,
              fontWeight: '700',
            }}>
            Dining Chair
          </Text>
          <Text
            style={{fontSize: 20, fontWeight: '700', color: Colors.primary}}>
            $90
          </Text>
        </View>

        <View
          style={{
            ...Shadows.shadow3,
            height: 200,
            marginTop: 8,
            borderRadius: 10,
            flexDirection: 'row',
          }}>
          <Swiper
            dotColor="transparent"
            activeDotColor="transparent"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            showsButtons>
            <Image source={Images.spone} />
            <Image source={Images.chair} />
            <Image source={Images.chair} />
            <Image source={Images.chair} />
            <Image source={Images.chair} />
            <Image source={Images.chair} />
            <Image source={Images.cup} />
            <Image source={Images.spone} />
          </Swiper>
        </View>

        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.black,
              marginBottom: 8,
              fontWeight: '600',
              textDecorationLine: 'underline',
              textDecorationColor: Colors.black,
            }}>
            Description:
          </Text>
          <Text numberOfLines={4} style={{color: Colors.grey}}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text
            style={{
              flex: 1,
              color: Colors.black,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Type
          </Text>
          <Text
            style={{
              flex: 1,
              color: Colors.black,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Offer
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 4}}>
          <Text
            style={{
              flex: 1,
              color: Colors.black,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Status
          </Text>
          <Text
            style={{
              flex: 1,
              color: Colors.black,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Used
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 4}}>
          <Text
            style={{
              flex: 1,
              color: Colors.black,
              fontSize: 14,
              fontWeight: '500',
            }}>
            First Owner
          </Text>
          <Text
            style={{
              flex: 1,
              color: Colors.black,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Yes
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 4}}>
          <Text
            style={{
              flex: 1,
              color: Colors.black,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Material
          </Text>
          <Text
            style={{
              flex: 1,
              color: Colors.black,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Wood,Leather
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 4}}>
          <Text
            style={{
              flex: 1,
              color: Colors.black,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Color
          </Text>
          <Text
            style={{
              flex: 1,
              color: Colors.black,
              fontSize: 14,
              fontWeight: '500',
            }}>
            White,Grey
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 12,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.black,
              marginBottom: 8,
              fontWeight: '600',
              textDecorationLine: 'underline',
              textDecorationColor: Colors.black,
            }}>
            Location
          </Text>
          <Text>Pickup</Text>
        </View>
        <Image
          source={Images.map}
          style={{
            resizeMode: 'contain',
            height: height * 0.33,
            width: width,
            marginVertical: 10,
          }}
        />
        <View style={{marginTop: 10,alignItems:"center"}}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.black,
              marginVertical: 12,
              fontWeight: '600',
              textDecorationLine: 'underline',
              textDecorationColor: Colors.black,
              alignSelf:"flex-start"
            }}>
            Seller:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => NavService.navigate('Profile')}
              style={{flexDirection: 'row', alignItems: 'center', flex:1}}>
              <Image
                source={Images.avatar}
                style={{height: 50, width: 50, borderRadius: 25}}
              />
              <View style={{marginLeft: 10}}>
                <Text
                  style={{
                    color: Colors.black,
                    fontWeight: '700',
                  }}>
                  Mark Washal
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={Icons.star} style={{width: 16, height: 16}} />
                  <Text style={{marginLeft: 3, fontSize: 12}}>4.7</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => NavService.navigate('Chat', {name: 'Mark Washal'})}
              style={{
                marginLeft: 180,
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: Colors.white,
                ...Shadows.shadow3
              }}>
              <Image
                source={Icons.msg}
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
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomButton
            title={'In-Active'}
            onPress={() => console.log('test')}
            buttonStyle={{
              marginBottom: 20,
              marginTop: 30,
            }}
          />
        </View>
      </ScrollView>
    </AppBackground>
  );
};

export default ProductFeatures;

const styles = StyleSheet.create({});
