import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import Images from '../assets/Images';
import {Colors, Shadows} from '../config';
import Logo from './Logo';

export default ({children}) => {
  return (
    <View style={{flex: 1, marginTop: '10%', backgroundColor: Colors.white}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.white,
            borderRadius: 120,
            marginTop: '10%',
            ...Shadows.shadow5,
            height: 240,
            width: 240,
          }}>
          <Logo size={170} />
        </View>
        <View style={{flex: 2}}>{children}</View>
      </ScrollView>
    </View>
  );
};
