import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import Icons from '../assets/Icons';
import {Colors} from '../config';
function SwipeableRow({
  item,
  renderVisibleComponent = () => {},
  height,
  onDelete = () => {},
}) {
  const [visible, setVisible] = useState(false);
  return (
    <SwipeRow
      stopLeftSwipe
      disableRightSwipe
      rightOpenValue={-80}
      onSwipeValueChange={e => {
        if (e.value < -70) {
          setVisible(true);
        } else if (e.value > -10) setVisible(false);
      }}>
      {renderHiddenComponent({item, visible, height, onDelete})}
      {renderVisibleComponent(item)}
    </SwipeRow>
  );
}
export default SwipeableRow;
function DeleteButton({onDelete}) {
  return (
    <View
      style={{
        marginVertical: 10,
        height: 60,
        // backgroundColor: 'red',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 50,
      }}>
      <TouchableOpacity
        onPress={onDelete}
        style={{
          padding: 10,
          borderRadius: 30,
          backgroundColor: 'red',
        }}>
        <Image
          source={Icons.trash}
          style={{
            width: 25,
            height: 25,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
function renderHiddenComponent({item, visible, height = 150, onDelete}) {
  if (!visible) return <View></View>;
  return (
    <View
      style={{
        height,
        justifyContent: 'center',
        marginRight: 14,
      }}>
      <DeleteButton item={item} onDelete={onDelete} />
    </View>
  );
}
// white_check_mark;
// eyes;
// raised_hands;
