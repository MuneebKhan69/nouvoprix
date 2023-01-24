import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SwipeableRow from '../../components/SwipeableRow';
import AppBackground from '../../components/AppBackground';
import {Colors, Shadows} from '../../config';
import ProductDetails from '../../components/ProductDetails';

const MyTrades = () => {
  const [selected, setSelected] = useState('buy');
  const ProductData = [
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
  ];
  const ProductDatas = [
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
    <AppBackground back notification={false} title="My Trades">
      <View
        style={{
          height: Dimensions.get('window').height * 0.1,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => setSelected('buy')}
          style={{
            backgroundColor: selected == 'buy' ? Colors.primary : Colors.white,
            alignItems: 'center',
            justifyContent: 'center',
            height: Dimensions.get('window').height * 0.06,
            width: Dimensions.get('window').width * 0.42,
            borderRadius: 30,
            ...Shadows.shadow3,
          }}>
          <Text
            style={{
              color: selected == 'buy' ? Colors.white : Colors.grey,
              fontSize: 16,
              fontWeight: '600',
            }}>
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected('history')}
          style={{
            backgroundColor:
              selected == 'history' ? Colors.primary : Colors.white,
            alignItems: 'center',
            justifyContent: 'center',
            height: Dimensions.get('window').height * 0.06,
            width: Dimensions.get('window').width * 0.42,
            borderRadius: 30,
            ...Shadows.shadow3,
          }}>
          <Text
            style={{
              color: selected == 'history' ? Colors.white : Colors.grey,
              fontSize: 16,
              fontWeight: '600',
            }}>
            Inactive
          </Text>
        </TouchableOpacity>
      </View>
      {selected == 'buy' ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ProductData}
          renderItem={item => (
            <ProductDetails
              title={item.item.title}
              price={item.item.price}
              img={item.item.img}
              date={item.item.date}
              location={item.item.location}
              type={item.item.type}
            />
          )}
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ProductDatas}
          contentContainerStyle={{
            marginTop: 14,
          }}
          renderItem={item => (
            <SwipeableRow
              renderVisibleComponent={() => (
                <ProductDetails
                  title={item.item.title}
                  price={item.item.price}
                  img={item.item.img}
                  date={item.item.date}
                  location={item.item.location}
                  type={item.item.type}
                />
              )}
            />
          )}
        />
      )}
    </AppBackground>
  );
};

export default MyTrades;

const styles = StyleSheet.create({});
