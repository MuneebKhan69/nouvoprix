import React, {Component, createRef} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ActionSheetComponent from '../../components/ActionSheetComponent';
import CustomButton from '../../components/CustomButton';
import CustomImagePicker from '../../components/CustomImagePicker';
import Icons from '../../assets/Icons';
import ProfileImage from '../../components/ProfileImage';
import cities from '../../assets/Data/cities';
import states from '../../assets/Data/states';
import CustomTextInputView from '../../components/CustomTextInputView';
import AppBackground from '../../components/AppBackground';
import {Colors, NavService} from '../../config';
import Images from '../../assets/Images';

const {width} = Dimensions.get('window');

class EditeProfile extends Component {
  state = {
    name: '',
    phone: '',
    address: '',
    state: '',
    city: '',
    newCities: [],
    selectedImage: null,
    zipcode: '',
  };

  constructor(props) {
    super(props);
    this.actionSheetStateRef = createRef();
    this.actionSheetCityRef = createRef();
  }

  render() {
    const userData = this.props.route?.params?.userData;
    const {
      name,
      phone,
      address,
      state,
      city,
      newCities,
      selectedImage,
      zipcode,
    } = this.state;
    return (
      <AppBackground back title={'Edit Profile'} notification={false}>
        <ActionSheetComponent
          ref={this.actionSheetStateRef}
          title="Select a State"
          dataset={states}
          onPress={item => {
            this.setState({
              state: item,
              newCities: cities[`${item}`],
              city: '',
            });
          }}
        />
        <ActionSheetComponent
          ref={this.actionSheetCityRef}
          title="Select a City"
          dataset={newCities}
          onPress={item => {
            this.setState({city: item});
          }}
        />
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            paddingHorizontal: 40,
            marginTop: 10,
          }}>
          <View style={{marginBottom: 16}}>
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 35 / 2,
                backgroundColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CustomImagePicker
                style={{
                  width: 120,
                  height: 120,
                }}
                onImageChange={(path, mime) => {
                  this.setState({selectedImage: {path, mime}});
                }}>
                <ProfileImage
                  name={userData?.fullName}
                  imageUri={selectedImage ? selectedImage.path : Images.user}
                  innerAsset={true}
                />
                {!selectedImage ? (
                  <View
                    style={{
                      position: 'absolute',
                      bottom: -10,
                      right: 0,
                      backgroundColor: 'white',
                      padding: 10,
                      alignItems: 'center',
                      borderRadius: 25,
                    }}>
                    <Image
                      source={Icons.plus}
                      style={{width: 20, height: 20, resizeMode: 'contain'}}
                    />
                  </View>
                ) : null}
              </CustomImagePicker>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
            }}>
            <CustomTextInputView
              containerStyle={{
                marginBottom: 18,
                marginTop: 18,
                width: width - 60,
              }}
              placeholder={'Jhon smith'}
              label={'Name'}
            />
            <CustomTextInputView
              containerStyle={{marginBottom: 18, width: width - 60}}
              placeholder={'Address'}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width - 60,
              }}>
              <CustomTextInputView
                containerStyle={{
                  width: '44%',
                }}
                placeholder={'State'}
              />
              <CustomTextInputView
                containerStyle={{
                  width: '44%',
                }}
                placeholder={'Zip code'}
                type="number-pad"
              />
            </View>
          </View>
          <CustomButton
            title={'Update Profile'}
            onPress={() => {
              NavService.goBack();
            }}
          />
        </View>
      </AppBackground>
    );
  }
}

export default EditeProfile;
