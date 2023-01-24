import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppBackground from '../../components/AppBackground';
import Icons from '../../assets/Icons';
import CustomChatList from '../../components/CustomChatList';

const ChatList = () => {
  const ChatListData = [
    {
      img: Icons.profile,
      title: 'Mark Branson',
    },
    {
      img: Icons.profile,
      title: 'Shawn Mendes',
    },
    {
      img: Icons.profile,
      title: 'Ricarla Smith',
    },
    {
      img: Icons.profile,
      title: 'Mia McQueen',
    },
    {
      img: Icons.profile,
      title: 'Mia McQueen',
    },
    {
      img: Icons.profile,
      title: 'Mia McQueen',
    },
    {
      img: Icons.profile,
      title: 'Mia McQueen',
    },
    {
      img: Icons.profile,
      title: 'Mia McQueen',
    },
    {
      img: Icons.profile,
      title: 'Mia McQueen',
    },
  ];
  return (
    <AppBackground back title={'My Messages'} notification={false}>
      <FlatList
        data={ChatListData}
        showsVerticalScrollIndicator={false}
        renderItem={item => (
          <CustomChatList img={item.item.img} title={item.item.title} />
        )}
      />
    </AppBackground>
  );
};

export default ChatList;

const styles = StyleSheet.create({});
