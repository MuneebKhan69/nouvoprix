import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppBackground from '../../components/AppBackground';
import Icons from '../../assets/Icons';
import {Colors, NavService, Shadows} from '../../config';

const Notification = () => {
  const notify = [
    {
      img: Icons.profile,
      title: 'Mark Branson',
      notification: 'has been updated the products.',
    },
    {
      img: Icons.profile,
      title: 'Mark Branson',
      notification: 'has been updated the products.',
    },
    {
      img: Icons.profile,
      title: 'Mark Branson',
      notification: 'has been updated the products.',
    },
    {
      img: Icons.profile,
      title: 'Mark Branson',
      notification: 'has been updated the products.',
    },
    {
      img: Icons.profile,
      title: 'Mark Branson',
      notification: 'has been updated the products.',
    },
    {
      img: Icons.profile,
      title: 'Mark Branson',
      notification: 'has been updated the products.',
    },
    {
      img: Icons.profile,
      title: 'Mark Branson',
      notification: 'has been updated the products.',
    },
    {
      img: Icons.profile,
      title: 'Mark Branson',
      notification: 'has been updated the products.',
    },
    {
      img: Icons.profile,
      title: 'Mark Branson',
      notification: 'has been updated the products.',
    },
  ];
  return (
    <AppBackground back title={'Notifications'} notification={false}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={notify}
        renderItem={item => (
          <TouchableOpacity
            onPress={() => NavService.navigate('Chat')}
            style={{
              height: Dimensions.get('window').height * 0.09,
              width: '100%',
              borderRadius: 30,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 8,
              backgroundColor: Colors.white,
              ...Shadows.shadow3,
              marginBottom: 14,
            }}>
            <View
              style={{
                flex: 2,
                // backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center',
                height: Dimensions.get('window').height * 0.08,
                width: Dimensions.get('window').width * 0.15,
                borderRadius: 30,
              }}>
              <Image
                source={item.item.img}
                resizeMode={'contain'}
                style={{
                  height: Dimensions.get('window').height * 0.06,
                  width: Dimensions.get('window').width * 0.14,
                  //   borderRadius: 30,
                }}
              />
            </View>
            <View style={{flex: 8}}>
              <Text
                style={{color: Colors.black, fontWeight: '600', fontSize: 16}}>
                {item.item.title}
                {'  '}
                <Text
                  style={{
                    color: Colors.grey,
                    fontSize: 14,
                    fontWeight: '400',
                    paddingLeft: 2,
                  }}>
                  {item.item.notification}
                </Text>
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </AppBackground>
  );
};

export default Notification;

const styles = StyleSheet.create({});
