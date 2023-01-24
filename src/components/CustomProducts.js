import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {Colors, NavService, Shadows} from '../config';
import CustomButton from './CustomButton';
import Icons from '../assets/Icons';

const CustomProduct = ({
  img,
  price,
  title,
  location,
  date,
  type,
  EditePress,
}) => {
  return (
    <View
      style={{
        // height: Dimensions.get('window').height * 0.14,
        height: 120,
        marginHorizontal:14,
        marginBottom: 14,
        flexDirection: 'row',
        alignSelf: 'center',
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
            height: Dimensions.get('window').height * 0.2,
            width: Dimensions.get('window').width * 0.2,
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
            flex:2
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
            marginTop:4,
            flex:3,
          }}>
          <Text>{type}</Text>
          <Text
            style={{fontSize: 20, fontWeight: '700', color: Colors.primary}}>
            ${price}
          </Text>
        </View>

        <View
          style={{flex:2,flexDirection: 'row', paddingLeft: 10, alignItems: 'center'}}>
          <Image source={Icons.location} style={{height: 10, width: 10}} />
          <Text style={{paddingLeft: 4}}>{location}</Text>
        </View>

        <View
          style={{
            // width: '100%',
            // height: '35%',
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: 'red',
            // marginTop: 8,
            flex:4
          }}>
          <CustomButton
            onPress={EditePress}
            title="Edit"
            buttonStyle={{
              width: '30%',
              height: '78%',
              backgroundColor: Colors.white,
              marginLeft: 10,
            }}
            textStyle={{color: Colors.black, fontSize: 14, fontWeight: '600'}}
          />
          <CustomButton
            onPress={() => NavService.navigate('ProductFeatures')}
            title="Featured"
            buttonStyle={{width: '38%', height: '78%', marginLeft: 12}}
            textStyle={{color: Colors.white, fontSize: 14, fontWeight: '600'}}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomProduct;

const styles = StyleSheet.create({});
