import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppBackground from '../../components/AppBackground';
import {Colors, Shadows} from '../../config';
import Images from '../../assets/Images';
import ProductDetails from '../../components/ProductDetails';

const Product = () => {
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
    <AppBackground back title={'Product'} notification={false}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: 120,
            height: 48,
            borderRadius: 20,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            ...Shadows.shadow3,
            alignSelf: 'flex-end',
            marginBottom: 20,
          }}>
          <Text style={{color: Colors.grey}}>Newest</Text>
        </View>
        <FlatList
          data={ProductData}
          showsVerticalScrollIndicator
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
      </ScrollView>
    </AppBackground>
  );
};

export default Product;

const styles = StyleSheet.create({});
