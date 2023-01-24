import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import AppBackground from '../../components/AppBackground';
import {NavService, Shadows} from '../../config';
import Colors from '../../config/colors';
import Icons from '../../assets/Icons';
import Images from '../../assets/Images';
import ProductDetails from '../../components/ProductDetails';

const Profile = () => {
  ProductData = [
    {
      title: 'Dining Chair',
      location: 'Phonex',
      price: 90,
      img: Images.chair,
      date: '09/26/2022',
      type: 'Offer | Used',
    },
    {
      title: 'Dining Chair',
      location: 'Phonex',
      price: 90,
      img: Images.chair,
      date: '09/26/2022',
      type: 'Offer | Used',
    },
    {
      title: 'Dining Chair',
      location: 'Phonex',
      price: 90,
      img: Images.chair,
      date: '09/26/2022',
      type: 'Offer | Used',
    },
    {
      title: 'Dining Chair',
      location: 'Phonex',
      price: 90,
      img: Images.chair,
      date: '09/26/2022',
      type: 'Offer | Used',
    },
    {
      title: 'Dining Chair',
      location: 'Phonex',
      price: 90.01,
      img: Images.chair,
      date: '09/26/2022',
      type: 'Offer | Used',
    },
    {
      title: 'Dining Chair',
      location: 'Phonex',
      price: 90.9,
      img: Images.chair,
      date: '09/26/2022',
      type: 'Offer | Used',
    },
    {
      title: 'Dining Chair',
      location: 'Phonex',
      price: 90.07,
      img: Images.chair,
      date: '09/26/2022',
      type: 'Offer | Used',
    },
  ];

  const name = 'Jhony sincs';

  return (
    <AppBackground back title={'Jhony sincs'} notification={false}>
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
            {name}
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
              NavService.navigate('Chat', {name: name});
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
              source={Icons.msg}
              style={{
                height: 28,
                width: 28,
                tintColor: Colors.primary,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          marginLeft: 10,
          marginVertical: 16,
          color: Colors.black,
          fontSize: 18,
          textDecorationLine: 'underline',
          textDecorationColor: Colors.black,
        }}>
        Description:
      </Text>
      <FlatList
        data={ProductData}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <ProductDetails
            title={item.title}
            price={item.price}
            img={item.img}
            date={item.date}
            location={item.location}
            type={item.type}
          />
        )}
      />
    </AppBackground>
  );
};

export default Profile;

const styles = StyleSheet.create({});
