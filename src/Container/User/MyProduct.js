import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppBackground from '../../components/AppBackground';
import SwipeableRow from '../../components/SwipeableRow';
// import {SwipeRow} from 'react-native-swipe-list-view';
// import SwipeView from 'react-native-swipeview';
// import {SwipeListView} from 'react-native-swipe-list-view';
import CustomProduct from '../../components/CustomProducts';
import Icons from '../../assets/Icons';
import Images from '../../assets/Images';
import CustomButton from '../../components/CustomButton';
import {Colors, NavService, Shadows} from '../../config';

const MyProduct = () => {
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
      price: 90.1,
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
      price: 90.7,
      img: Images.chair,
      date: '09/26/2022',
      type: 'Offer | Used',
    },
  ];
  return (
    <AppBackground
      marginHorizontal
      product={true}
      title={'My Products'}
      notification>
      <FlatList
        data={ProductData}
        showsVerticalScrollIndicator={false}
        renderItem={item => (
          <SwipeableRow
            renderVisibleComponent={() => (
              <CustomProduct
                EditePress={() => {
                  NavService.navigate('EditList');
                }}
                title={'Dining Chair'}
                location={'Phonex'}
                price={'12'}
                img={Images.chair}
                date={'09/04/2022'}
                type={'Offer | Used'}
              />
            )}
          />
        )}
      />
      <TouchableOpacity
        onPress={() => {
          NavService.navigate('CreateList');
        }}
        style={{
          backgroundColor: 'white',
          height: Dimensions.get('window').height * 0.07,
          width: Dimensions.get('window').width * 0.14,
          //   width: 60,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          ...Shadows.shadow5,
          position: 'absolute',
          bottom: 20,
          right: 22,
        }}>
        <Image
          style={{
            height: Dimensions.get('window').height * 0.04,
            width: Dimensions.get('window').width * 0.07,
            // width: 32,
            resizeMode: 'contain',
          }}
          source={Icons.plus}
        />
      </TouchableOpacity>
    </AppBackground>
  );
};

export default MyProduct;

const styles = StyleSheet.create({});
