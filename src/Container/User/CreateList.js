import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AppBackground from '../../components/AppBackground';
import CustomTextInputView from '../../components/CustomTextInputView';
import ActionSheetComponent from '../../components/ActionSheetComponent';
import {Category, Location, Offer, Used} from '../../assets/Data/testData';
import {Shadows, Colors, NavService} from '../../config';
import ActionSheet from 'react-native-actions-sheet';
import Icons from '../../assets/Icons';
import ImageCropPicker from 'react-native-image-crop-picker';
import CustomButton from '../../components/CustomButton';

const CreateList = () => {
  const [imageUri1, setImageuri1] = useState('');
  const [Owner, setOwner] = useState(null);
  const [imageType, setImageType] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [offer, setOffer] = useState('');
  const [used, setUsed] = useState('');
  const actionSheetRef1 = React.useRef(null);
  const actionSheetCategoryRef = React.useRef(null);
  const actionSheetLocationRef = React.useRef(null);
  const actionSheetOfferRef = React.useRef(null);
  const actionSheetUsedRef = React.useRef(null);

  const imageAds1 = (method = 'gallery') => {
    if (method === 'camera') {
      ImageCropPicker.openCamera({
        mediaType: 'photo',
      }).then(image => {
        setImageuri1(image.path);
        setImageType(image.mime);
        actionSheetRef1.current.hide();
      });
    } else {
      ImageCropPicker.openPicker({
        mediaType: 'photo',
        cropping: true,
      }).then(image => {
        console.log('image', image?.path);
        setImageuri1(image.path);
        setImageType(image.mime);
        actionSheetRef1.current.hide();
      });
    }
  };
  return (
    <AppBackground back title={'Create Listing'} notification={false}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <ActionSheetComponent
          ref={actionSheetCategoryRef}
          title="Select a Category"
          dataset={Category}
          onPress={item => {
            setCategory(item);
          }}
        />
        <ActionSheetComponent
          ref={actionSheetLocationRef}
          title="Select a Location"
          dataset={Location}
          onPress={item => {
            setLocation(item);
          }}
        />
        <ActionSheetComponent
          ref={actionSheetOfferRef}
          title="Select a Offer"
          dataset={Offer}
          onPress={item => {
            setOffer(item);
          }}
        />
        <ActionSheetComponent
          ref={actionSheetUsedRef}
          title="Select Used"
          dataset={Used}
          onPress={item => {
            setUsed(item);
          }}
        />
        <CustomTextInputView containerStyle={{color: Colors.grey}} placeholder={'Product Title'} />
        <CustomTextInputView containerStyle={{color: Colors.grey}} placeholder={'Price'} type={'number-pad'} />
        <CustomTextInputView
          placeholder={'Select Category'}
          down={true}
          value={category}
          editable={false}
          openActionSheet={() => actionSheetCategoryRef.current.show()}
          containerStyle={{color: Colors.grey}}
        />
        <View
          style={{
            width: '98%',
            height: Dimensions.get('window').height * 0.18,
            alignSelf: 'center',
            borderRadius: 10,
            ...Shadows.shadow5,
            backgroundColor: Colors.white,
            paddingHorizontal: 10,
            padding: 8,
            marginBottom: 14,
          }}>
          <TextInput
            style={{
              paddingLeft: Platform.OS === 'ios' ? 10 : 0,
              paddingTop: Platform.OS === 'ios' ? 10 : 0,
              fontSize: 15,
              fontWeight: '400',
              color: Colors.grey
            }}
            // style={{padding:20}}
            multiline={true}
            // editable
            // numberOfLines={7}
            // maxLength={40}
            placeholder="Decription"
            placeholderTextColor={'#8B8888'}
          />
          <TouchableOpacity
            onPress={() => imageSelector()}
            style={{
              alignSelf: 'flex-end',
              height: 200,
              top: '58%',
              right: 14,
              marginTop: Platform.OS === 'ios' ? 18 : 0,
            }}
            activeOpacity={0.9}>
            {/* <Image
            style={{width: 28, height: 28}}
            source={Images.Pictures.picture}
          /> */}
          </TouchableOpacity>
        </View>
        <CustomTextInputView
          placeholder={'Location'}
          location={true}
          value={location}
          editable={false}
          openActionSheet={() => actionSheetLocationRef.current.show()}
          containerStyle={{color: Colors.grey}}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <CustomTextInputView
            placeholder={'Offer'}
            containerStyle={{
              width: '45%',
              color: Colors.grey
            }}
            down={true}
            value={offer}
            editable={false}
            openActionSheet={() => actionSheetOfferRef.current.show()}
          />
          <CustomTextInputView
            containerStyle={{
              width: '45%',
              color: Colors.grey
            }}
            placeholder={'Used'}
            down={true}
            value={used}
            editable={false}
            openActionSheet={() => actionSheetUsedRef.current.show()}
          />
        </View>
        <ActionSheet
          ref={actionSheetRef1}
          containerStyle={{backgroundColor: 'transparent'}}>
          <View style={{padding: 10}}>
            <View
              style={{
                backgroundColor: 'rgba(241,241,241,0.8)',
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <View
                style={{
                  borderBottomWidth: 1.5,
                  borderBottomColor: '#ccc',
                  paddingVertical: 10,
                }}>
                <Text style={{color: Colors.grey, textAlign: 'center'}}>
                  Choose an option to pick an Image
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  actionSheetRef1.current.hide();
                  imageAds1('camera');
                }}
                style={{
                  paddingVertical: 12,
                  alignItems: 'center',
                  borderBottomWidth: 1.5,
                  borderBottomColor: '#ccc',
                }}>
                <Text style={{color: 'rgb(0,88,200)', fontSize: 18}}>
                  Take Photo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  imageAds1('gallery');
                }}
                style={{paddingVertical: 12, alignItems: 'center'}}>
                <Text style={{color: 'rgb(0,88,200)', fontSize: 18}}>
                  Choose from Library
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => actionSheetRef1.current.hide()}
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                paddingVertical: 12,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'rgb(0,88,200)',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </ActionSheet>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {imageUri1 && (
            <View style={{position: 'relative'}}>
              <Image
                style={{
                  height: Dimensions.get('window').height * 0.09,
                  width: Dimensions.get('window').height * 0.09,
                  borderRadius: 10,
                  resizeMode: 'contain',
                }}
                source={{uri: imageUri1}}
              />
              <TouchableOpacity
                onPress={() => {
                  setImageuri1(null);
                }}
                style={{
                  position: 'absolute',
                  top: -5,
                  right: 5,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'red',
                  }}>
                  x
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity
            onPress={() => actionSheetRef1.current.show()}
            style={{
              height: Dimensions.get('window').height * 0.09,
              width: Dimensions.get('window').height * 0.09,
              borderRadius: 10,
              backgroundColor: Colors.primary,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <Image
              style={{tintColor: Colors.white, height: 40, width: 40}}
              source={Icons.plus}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 14,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setOwner(!Owner)}
            style={{
              height: 28,
              width: 28,
              backgroundColor: Colors.white,
              borderRadius: 14,
              alignItems: 'center',
              justifyContent: 'center',
              ...Shadows.shadow3,
            }}>
            {Owner && (
              <View
                style={{
                  height: 16,
                  width: 16,
                  backgroundColor: Colors.primary,
                  borderRadius: 8,
                }}></View>
            )}
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 14,
              color: Colors.grey,
              fontWeight: '400',
            }}>
            Are you the first owner?
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <CustomButton
            onPress={() => NavService.navigate('home')}
            title="Create Listing"
            buttonStyle={{
              marginTop: 14,
            }}
          />
        </View>
      </ScrollView>
    </AppBackground>
  );
};

export default CreateList;

const styles = StyleSheet.create({});
