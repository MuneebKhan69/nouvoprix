import React, { Component } from 'react';
import Navigation from './Navigation';
import {
  View,
  StatusBar,
  LogBox,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Loader } from './src/config';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {store} from './src/Store';


LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(['Remote debugger']);

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Wrapper>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <Provider store={store}>
              <Loader />
              <Navigation />
              <Toast />       
          </Provider>
        </GestureHandlerRootView>
      </Wrapper>
    );
  }
}

export default App;

function Wrapper({ children }) {
  if (Platform.OS === 'ios')
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
      // keyboardVerticalOffset={20}
      >
        {children}
      </KeyboardAvoidingView>
    );
  return <View style={{ flex: 1 }}>{children}</View>;
}
