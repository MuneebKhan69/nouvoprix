import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
  Platform,
  UIManager,
  Keyboard,
  LayoutAnimation,
  FlatList,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import AppBackground from '../../components/AppBackground';
import CustomButton from '../../components/CustomButton';
import Colors from '../../config/colors';
import {Shadows, Devices} from '../../config';
import Icons from '../../assets/Icons';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const {width} = Dimensions.get('window');

const selectedAmount = [1000, 2000, 3000, 4000, 5000];

const Chat = ({route}) => {
  const {name} = route.params;
  const refRBSheet = useRef();
  const [chat, setChat] = useState([]);
  const [MessageIncoming, setMessageIncoming] = useState(false);
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(1000);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: 'Deserunt elit ut adipisicing consequat enim id esse.',
      createdAt: '12:00 PM',
      isMine: true,
    },
    {
      id: 2,
      message: 'Cillum magna fugiat ea velit ea culpa aliqua est.',
      createdAt: '12:00 PM',
      isMine: false,
    },
    {
      id: 3,
      message: 'Enim cillum nulla sunt et.',
      createdAt: '12:00 PM',
      isMine: false,
    },
    {
      id: 4,
      message: 'Eu aliqua velit enim dolore ad mollit ex exercitation.',
      createdAt: '12:00 PM',
      isMine: true,
    },
    {
      id: 5,
      message:
        'Elit id ad exercitation do duis mollit officia eu aute nisi excepteur commodo eu eu.',
      createdAt: '12:00 PM',
      isMine: true,
    },
  ]);

  const ListHeaderComponent = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: Colors.white,
          ...Shadows.shadow5,
          height: 75,
          borderRadius: 40,
          alignItems: 'center',
          paddingHorizontal: '9%',
          marginTop: 10,
        }}>
        <Text
          style={{
            color: Colors.black,
            fontSize: 16,
            fontWeight: '700',
          }}>
          Dining Chair
        </Text>
        <Text
          style={{
            color: Colors.black,
            fontSize: 16,
            fontWeight: '700',
          }}>
          $90
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => refRBSheet.current.open()}>
          <Text
            style={{
              color: Colors.primary,
              fontSize: 16,
              fontWeight: '700',
              textDecorationLine: 'underline',
            }}>
            Make Offer
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  useEffect(() => {
    const keyboardDidShowSubscription = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        LayoutAnimation.linear();
        setKeyboardShown(true);
      },
    );
    const keyboardDidHideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        LayoutAnimation.linear();
        setKeyboardShown(false);
      },
    );
    return () => {
      keyboardDidShowSubscription.remove();
      keyboardDidHideSubscription.remove();
      setKeyboardShown(false);
    };
  }, []);
  return (
    <AppBackground back title={name} notification={false}>
      {ListHeaderComponent()}
      <FlatList
        data={[...messages, ...messages]}
        inverted
        showsVerticalScrollIndicator={false}
        style={{flex: 1, marginBottom: 10}}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 30,
          paddingHorizontal: 3,
          marginHorizontal: 20,
        }}
        renderItem={({item}) => <MessageList item={item} />}
        key={MessageIncoming}
        keyExtractor={(item, index) => item?.id.toString()}
      />
      <View
        style={[
          {
            height: 65,
            width: width * 0.93,
            marginBottom: 10,
            backgroundColor: Colors.white,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            paddingBottom: Devices.isIphoneX ? 15 : 0,
            paddingVertical: 15,
            paddingHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            ...Shadows.shadow5,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
        ]}>
        <TextInput
          onChangeText={value => setInput(value)}
          value={input}
          placeholder="Write your message here"
          placeholderTextColor={Colors.grey}
          style={{
            flex: 1,
            height: '100%',
            color: Colors.black,
            marginBottom: 10,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            let message = [
              {
                id: Math.floor(Math.random() * 100),
                message: input,
                createdAt: '12:00 PM',
                isMine: true,
              },
            ];
            let updatedMessages = [...messages, ...message];
            setMessages(updatedMessages.reverse());
            setMessageIncoming(!MessageIncoming);
            setInput('');
          }}
          style={{
            height: 48,
            width: 48,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.primary,
            borderRadius: 24,
            marginRight: -20,
            marginBottom: 10,
          }}>
          <Image
            source={Icons.send}
            style={{
              height: 28,
              width: 28,
              tintColor: 'white',
            }}
          />
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet}
        height={250}
        openDuration={250}
        closeOnDragDown={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <View style={{paddingHorizontal: 30}}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 5}}>
            {selectedAmount?.map((price, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    backgroundColor:
                      selectedPrice == price
                        ? Colors.primary
                        : Colors.lightGrey,
                    marginHorizontal: 5,
                    marginVertical: 5,
                    borderRadius: 15,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                  }}
                  onPress={() => setSelectedPrice(price)}>
                  <Text>{price}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: '#000', fontSize: 32, marginVertical: 20}}>
              $ {selectedPrice}
            </Text>
            <CustomButton
              title={'SEND'}
              onPress={() => {
                let Offer = [
                  {
                    id: Math.floor(Math.random() * 100),
                    message: `$${selectedPrice}`,
                    createdAt: '12:00 PM',
                    isMine: true,
                  },
                ];
                let OfferPrice = [...messages, ...Offer];
                setMessages(OfferPrice.reverse());
                refRBSheet.current.close();
              }}
              buttonStyle={{
                width: width - 280,
                marginTop: 8,
              }}
            />
          </View>
        </View>
      </RBSheet>
    </AppBackground>
  );
};

export default Chat;

const MessageList = ({item}) => {
  const {message, createdAt, isMine} = item;
  return (
    <View
      style={{alignSelf: isMine ? 'flex-end' : 'flex-start', marginTop: 12}}>
      <View
        style={{
          backgroundColor: isMine ? Colors.primary : Colors.white,
          padding: 16,
          borderRadius: 30,
          marginTop: 16,
          ...Shadows.shadow5,
        }}>
        <Text
          style={{
            color: isMine ? Colors.white : Colors.black,
            fontSize: 15,
            fontWeight: '500',
          }}>
          {message}
          {/* Hello */}
        </Text>
      </View>
      <Text
        style={{
          marginTop: 7,
          alignSelf: 'flex-end',
          color: Colors.grey,
          fontWeight: '400',
          fontSize: 11,
          paddingRight: 4,
        }}>
        {createdAt}
      </Text>
    </View>
  );
};
