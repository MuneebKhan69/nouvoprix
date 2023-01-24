import {Colors, NavService} from '../../config';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component, createRef, useState} from 'react';

import ActionSheetComponent from '../../components/ActionSheetComponent';
import CustomBackground from '../../components/CustomBackground';
import CustomButton from '../../components/CustomButton';
import CustomImagePicker from '../../components/CustomImagePicker';
import CustomSelector from '../../components/TextWithActionSheet';
import CustomTextInput from '../../components/CustomTextInput';
import Icons from '../../assets/Icons';
import ProfileImage from '../../components/ProfileImage';
import cities from '../../assets/Data/cities';
import states from '../../assets/Data/states';
import languages from '../../assets/Data/languages';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import CustomTextInputView from '../../components/CustomTextInputView';
import {ToastError, ToastSuccess} from '../../config/Helpers/Toast';
import Toast from 'react-native-toast-message';
import Images from '../../assets/Images';

const {width} = Dimensions.get('window');

class App extends Component {
  state = {
    name: '',
    dateOfBirth: '',
    address: '',
    state: '',
    selectedImage: null,
    zipcode: '',
    language: '',
  };

  constructor(props) {
    super(props);
    this.actionSheetStateRef = createRef();
    this.actionSheetLanguageRef = createRef();
  }

  CompleteProfile = () => {
    const {
      name,
      dateOfBirth,
      address,
      language,
      state,
      zipcode,
      selectedImage,
    } = this.state;

    if (name || address || state || dateOfBirth || zipcode || language) {
      NavService.navigate('UserStack');
      Toast.show(ToastSuccess('Profile created successfully.'));
    } else {
      Toast.show(ToastError("Name field can't be empty"));
    }
  };

  render() {
    const userData = this.props.route?.params?.userData;
    const {
      name,
      language,
      address,
      state,
      dateOfBirth,
      newCities,
      selectedImage,
      zipcode,
    } = this.state;
    return (
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
          marginTop: getStatusBarHeight(),
        }}>
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
          ref={this.actionSheetLanguageRef}
          title="Select a Language"
          dataset={languages}
          onPress={item => {
            this.setState({language: item});
          }}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: Colors.black,
          }}>
          Complete Profile
        </Text>
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            paddingHorizontal: 40,
            marginTop: 40,
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
          <CustomTextInputView
            containerStyle={{marginBottom: 18, marginTop: 18, width: '100%'}}
            placeholder={'Name'}
            label={'Name'}
            value={name}
            Onchange={value => this.setState({name: value})}
          />
          <CustomTextInputView
            containerStyle={{marginBottom: 18, width: '100%'}}
            placeholder={`Select a Language`}
            down={true}
            value={language}
            Onchange={value => this.setState({language: value})}
            editable={false}
            openActionSheet={() => this.actionSheetLanguageRef.current.show()}
          />
          <CustomTextInputView
            containerStyle={{marginBottom: 18, width: '100%'}}
            placeholder={'Address'}
            value={address}
            Onchange={value => this.setState({address: value})}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: width - 60,
            }}>
            <CustomTextInputView
              containerStyle={{
                width: '44%',
              }}
              Onchange={value => this.setState({state: value})}
              placeholder={'State'}
              value={state}
              editable={false}
              openActionSheet={() => this.actionSheetStateRef.current.show()}
            />
            <CustomTextInputView
              containerStyle={{
                width: '44%',
              }}
              placeholder={'Zip code'}
              type="number-pad"
              value={zipcode}
              Onchange={value => this.setState({zipcode: value})}
            />
            {/* <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.actionSheetCityRef.current.show()}
              style={{width: '48%'}}>
              <CustomSelector
                // rightIcon={true}
                placeholder={'City'}
                // icon={Icons.location}
                value={city}
                containerStyle={{width: '85%', borderRadius: 30}}
              />
            </TouchableOpacity> */}
          </View>
          <CustomButton
            title={'CREATE PROFILE'}
            onPress={this.CompleteProfile}
            buttonStyle={{
              marginBottom: 20,
              marginTop: 30,
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     user: state.reducer.user,
//   };
// };

export default App;

{
  /* <View
style={{
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: width - 60,
}}>
<View style={{width: '48%'}}>
  <CustomTextInput
    icon={Icons.location}
    placeholder={'Address'}
    onChangeText={value => this.setState({address: value})}
    value={address}
    containerStyle={{width: (width - 70) / 2}}
  />
</View>
<TouchableOpacity
  activeOpacity={0.8}
  onPress={() => this.actionSheetStateRef.current.show()}
  style={{width: '48%'}}>
  <CustomSelector
    rightIcon={true}
    placeholder={'State'}
    icon={Icons.location}
    value={state}
    containerStyle={{width: '100%'}}
  />
</TouchableOpacity>
</View> */
}

{
  /* <View
style={{
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: width - 60,
}}>
<View style={{width: '48%'}}>
  <CustomTextInput
    icon={Icons.location}
    placeholder={'Address'}
    onChangeText={value => this.setState({address: value})}
    value={address}
    containerStyle={{width: (width - 70) / 2}}
  />
</View>
<TouchableOpacity
  activeOpacity={0.8}
  onPress={() => this.actionSheetStateRef.current.show()}
  style={{width: '48%'}}>
  <CustomSelector
    rightIcon={true}
    placeholder={'State'}
    icon={Icons.location}
    value={state}
    containerStyle={{width: '100%'}}
  />
</TouchableOpacity>
</View> */
}

// CompleteProfile = () => {
//   const {name, phone, address, state, city, zipCode, selectedImage} =
//     this.state;

//   if (
//     !name ||
//     !phone ||
//     !address ||
//     !state ||
//     !city ||
//     !zipCode ||
//     !selectedImage
//   ) {
//     CompleteUserProfile({
//       name,
//       phone,
//       address,
//       state,
//       city,
//       selectedImage,
//       zipcode,
//       callback: response => {
//         if (response.status == 1) {
//           Toast.show({
//             text1: 'Profile Completed Successfully!',
//             type: 'success',
//             visibilityTime: 3000,
//           });
//           NavService.reset(0, [{name: 'UserAppStack'}]);
//         } else {
//           Toast.show({
//             text1: response.message,
//             type: 'error',
//             visibilityTime: 3000,
//           });
//         }
//       },
//     });
//   } else {
//     Toast.show({
//       text1: 'Please enter all info',
//       type: 'error',
//       visibilityTime: 3000,
//     });
//   }
// };
