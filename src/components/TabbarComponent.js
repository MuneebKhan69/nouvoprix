import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, Icon, Shadows} from '../config/index';
import Icons from '../assets/Icons';
import Images from '../assets/Images';

export default class TabbarComp extends React.Component {
  render() {
    const {state, navigation} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          height: 65,
          ...Shadows.shadow3,
          width: 380,
          alignSelf: 'center',
          marginBottom: 4,
          borderRadius: 60,
        }}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const onPress = () => {
            navigation.navigate(route.name);
          };
          let imageSrc = Icons.search;
          if (route.name === 'product') imageSrc = Icons.product;
          if (route.name === 'search') imageSrc = Icons.search;
          if (route.name === 'user') imageSrc = Icons.user;

          return (
            <TouchableOpacity
              key={index}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityRole="button"
              activeOpacity={0.8}
              onPress={onPress}
              style={styles.tabs}>
              <Image
                source={imageSrc}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: isFocused ? Colors.primary : Colors.grey,
                  // tintColor: isFocused ? Colors.primary : Colors.white,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 5,
    height: 65,
  },
});
