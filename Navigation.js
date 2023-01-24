import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PreLogin from './src/Container/Auth/Pre-login';
import Login from './src/Container/Auth/Login';
import NavigationService from './src/config/Helpers/NavService';
import ForgotPassword from './src/Container/Auth/ForgotPassword';
import Signin from './src/Container/Auth/Signin';
import OTP from './src/Container/Auth/OTP';
import CompleteProfile from './src/Container/User/CompleteProfile';
import Home from './src/Container/User/Home';
import TabbarComp from './src/components/TabbarComponent';
import DrawerComp from './src/components/Drawer';
import Product from './src/Container/User/Product';
import ProductFeatures from './src/Container/User/ProductFeatures';
import Profile from './src/Container/User/Profile';
import Chat from './src/Container/User/Chat';
import MyProduct from './src/Container/User/MyProduct';
import CreateList from './src/Container/User/CreateList';
import Account from './src/Container/User/Account';
import EditeProfile from './src/Container/User/EditeProfile';
import ChatList from './src/Container/User/ChatList';
import Notification from './src/Container/User/Notification';
import MyTrades from './src/Container/User/MyTrades';
import {Settings} from 'react-native';
import ChangePassword from './src/Container/User/ChangePassword';
import EditeList from './src/Container/User/EditeList';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="pre-login">
      <Stack.Screen name="pre-login" component={PreLogin} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="home"
      tabBar={props => <TabbarComp {...props} />}>
      <Tab.Screen name="product" component={MyProduct} />
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="user" component={Account} />
    </Tab.Navigator>
  );
};

const ScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'UserAppStack'}>
      <Stack.Screen name="UserAppStack" component={UserAppStack} />
      <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="ProductFeatures" component={ProductFeatures} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="CreateList" component={CreateList} />
      <Stack.Screen name="EditeProfile" component={EditeProfile} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="EditList" component={EditeList} />
    </Stack.Navigator>
  );
};

const UserAppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: '80%',
          backgroundColor: 'transparent',
        },
      }}
      drawerContent={props => <DrawerComp {...props} />}
      initialRouteName={'BottomTab'}>
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      <Drawer.Screen name="MyTrades" component={MyTrades} />
      <Drawer.Screen name="MyMessages" component={ChatList} />
    </Drawer.Navigator>
  );
};

class AppNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const loading = useSelector(state => state.LoaderReducer.loading);
    // let {loading} = this.props;
    return (
      <>
        <NavigationContainer
          ref={ref => NavigationService.setTopLevelNavigator(ref)}>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={'AuthStack'}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="UserStack" component={ScreenStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

// const mapStateToProps = state => ({
//   loading: state?.LoaderReducer?.loading,
// });
// const mapDispatchToProps = dispatch => ({});

export default AppNavigation;
