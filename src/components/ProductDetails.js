import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {Colors, NavService, Shadows} from '../config';
import CustomButton from './CustomButton';
import Icons from '../assets/Icons';

const ProductDetails = ({img, price, title, location, date, type}) => {
  return (
    <View
      style={{
        // height: Dimensions.get("window").height * 0.12,
        marginBottom: 14,
        flexDirection: 'row',
        height: 120
      }}>
      <View
        style={{
          flex: 3,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          ...Shadows.shadow3,
          borderRadius: 10,
        }}>
        <Image
          source={img}
          style={{
            resizeMode: 'contain',
            height: 65,
            width: 100,
          }}
        />
      </View>
      <View
        style={{
          flex: 7,
          backgroundColor: Colors.white,
          marginLeft: 10,
          ...Shadows.shadow3,
          borderRadius: 10,
          padding: 4,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            flex:3,
          }}>
          <Text style={{fontSize: 16, color: Colors.black, fontWeight: '500'}}>
            {title}
          </Text>
          <Text style={{fontSize: 12, color: Colors.grey}}>{date}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            alignItems: 'center',
            flex:2,
          }}>
          <Text style={{color: Colors.grey}}>{type}</Text>
          <Text
            style={{fontSize: 20, fontWeight: '700', color: Colors.primary}}>
            ${price}
          </Text>
        </View>

        <View
          style={{flexDirection: 'row', paddingLeft: 10, alignItems: 'center',flex:2}}>
          <Image source={Icons.location} style={{height: 10, width: 10}} />
          <Text style={{paddingLeft: 4, color: Colors.grey}}>{location}</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: '100%',
            paddingLeft: 8,
            marginTop: 6.2,
            flex:3,
          }}>
          <CustomButton
            onPress={() => NavService.navigate('ProductFeatures')}
            title="Featured"
            buttonStyle={{width: '40%', height: '85%'}}
            textStyle={{color: Colors.white, fontSize: 12}}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
