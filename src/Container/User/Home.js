import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppBackground from '../../components/AppBackground';
import CustomTextInputView from '../../components/CustomTextInputView';
import {Colors, NavService, Shadows} from '../../config';
import CustomButton from '../../components/CustomButton';

const Home = () => {
  const [oldProduct, setOldProduct] = useState(false);

  const [newProduct, setNewProduct] = useState(false);

  return (
    <AppBackground title={'Home'} product={true} notification={true}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View
          style={{
            marginTop: 14,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.black,
              fontWeight: '500',
              marginBottom: 13,
            }}>
            What
          </Text>
          <CustomTextInputView placeholder={'What are you looking for?'} />
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.black,
              fontWeight: '500',
              marginBottom: 13,
            }}>
            Where?
          </Text>
          <CustomTextInputView placeholder={'Enter Location'} />
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.black,
              fontWeight: '500',
              marginBottom: 13,
            }}>
            Category?
          </Text>
          <CustomTextInputView placeholder={'Select Category'} />
        </View>
        <Text
          style={{
            fontSize: 16,
            color: Colors.black,
            fontWeight: '500',
            marginTop: 15,
          }}>
          Price:
        </Text>
        <View
          style={{
            marginTop: 12,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <CustomTextInputView
            placeholder={'Minimal Price'}
            containerStyle={{width: '48%'}}
            type={'number-pad'} 
          />
          <CustomTextInputView
            placeholder={'Maximal Price'}
            containerStyle={{width: '48%'}}
            type={'number-pad'} 
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            color: Colors.black,
            fontWeight: '500',
            marginTop: 15,
          }}>
          Type:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 16,
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                setNewProduct(!newProduct);
                setOldProduct(false);
              }}
              style={{
                height: 28,
                width: 28,
                backgroundColor: Colors.white,
                borderRadius: 14,
                alignItems: 'center',
                justifyContent: 'center',
                ...Shadows.shadow3,
              }}>
              {newProduct && (
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
                paddingLeft: 10,
                fontSize: 16,
                fontWeight: '600',
                color: Colors.grey,
              }}>
              New Product
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                setOldProduct(!oldProduct);
                setNewProduct(false);
              }}
              style={{
                height: 28,
                width: 28,
                backgroundColor: Colors.white,
                borderRadius: 14,
                alignItems: 'center',
                justifyContent: 'center',
                ...Shadows.shadow3,
              }}>
              {oldProduct && (
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
                paddingLeft: 10,
                fontSize: 16,
                fontWeight: '600',
                color: Colors.grey,
              }}>
              Used Product
            </Text>
          </View>
        </View>
        <CustomButton
          onPress={() => NavService.navigate('Product')}
          buttonStyle={{
            alignSelf: 'center',
            marginTop: '8%',
            marginBottom: 40,
          }}
          title="View Product"
        />
      </ScrollView>
    </AppBackground>
  );
};

export default Home;
