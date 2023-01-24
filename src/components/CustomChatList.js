import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors, NavService, Shadows} from '../config';
import Icons from '../assets/Icons';

const CustomChatList = ({img, title}) => {
  return (
    <View
      style={{
        height: Dimensions.get('window').height * 0.08,
        // height: 60,
        backgroundColor: Colors.white,
        borderRadius: 30,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        ...Shadows.shadow3,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-around',
          flex:6,
          // backgroundColor:"blue"
        }}>
        <Image
          source={img}
          style={{
            // height: Dimensions.get('window').height * 0.065,
            // width: Dimensions.get('window').width * 0.14,
            // backgroundColor: 'red',
            borderRadius: 25,
            height: 45,
            width: 45,
          }}
        />
        <Text
          style={{
            color: Colors.black,
            fontSize: 18,
            fontWeight: '700',
            paddingLeft:8
          }}>
          {' '}
          {title}{' '}
        </Text>
      </View>
     <View style={{flex:2, alignItems:"center",justifyContent:"center"}}>
     <TouchableOpacity
        onPress={() => NavService.navigate('Chat', {name: title})}
        style={{
          backgroundColor: Colors.primary,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          height:35,
          width:35,
        }}>
        <Image
          source={Icons.forward}
          resizeMode={'contain'}
          style={{
            height: Dimensions.get('window').height * 0.03,
            width: Dimensions.get('window').width * 0.05,
          }}
        />
      </TouchableOpacity>
     </View>
    </View>
  );
};

export default CustomChatList;

const styles = StyleSheet.create({});
