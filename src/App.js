
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import AppDrawer from './components/AppDrawer';
import TabBarBuyer from './components/TabBarBuyer';
import TabBarSeller from './components/TabBarSeller';
import AddProperty from './screens/AddProperty';
import ChangeEmail from './screens/ChangeEmail';
import ChangePassword from './screens/ChangePassword';
import Chat from './screens/Chat';
import EditProfile from './screens/EditProfile';
import Favorites from './screens/Favorites';
import Filters from './screens/Filters';
import ForgotPassword from './screens/ForgotPassword';
import HomeBuyer from './screens/HomeBuyer';
import HomeSeller from './screens/HomeSeller';
import Login from './screens/Login';
import Messages from './screens/Messages';
import NewPassword from './screens/NewPassword';
import Notifications from './screens/Notifications';
import PropertyDetailsBuyer from './screens/PropertyDetailsBuyer';
import PropertyDetailsSeller from './screens/PropertyDetailsSeller';
import Search from './screens/Search';
import Settings from './screens/Settings';
import SignUp from './screens/SignUp';
import SignUpAddId from './screens/SignUpAddId';
import SignUpType from './screens/SignUpType';
import SoldProperties from './screens/SoldProperties';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const isLoading = useSelector((state) => state.loader.value)
  const dispatch = useDispatch()

  return (
    <NavigationContainer>
      {AuthStack()}
    </NavigationContainer>
  );
};

function SellerDrawerStack() {
  return (
    <Drawer.Navigator drawerContent={(props) => <AppDrawer props={props.navigation} />}
      screenOptions={{ drawerPosition: 'right', drawerType: 'front' }}>
      <Drawer.Screen options={{ headerShown: false }} name="SellerStack" component={SellerStack} />
    </Drawer.Navigator>
  )
}

function BuyerDrawerStack() {
  return (
    <Drawer.Navigator drawerContent={(props) => <AppDrawer props={props.navigation} />}
      screenOptions={{ drawerPosition: 'right', drawerType: 'front' }}>
      <Drawer.Screen options={{ headerShown: false }} name="BuyerStack" component={BuyerStack} />
    </Drawer.Navigator>
  )
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUpType" component={SignUpType} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpAddId" component={SignUpAddId} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="BuyerDrawerStack" component={BuyerDrawerStack} />
      <Stack.Screen name="SellerDrawerStack" component={SellerDrawerStack} />
    </Stack.Navigator>
  )
}

function BuyerStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={BuyerBottomTabs} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Filters" component={Filters} />
      </Stack.Group>
      <Stack.Screen name="PropertyDetailsBuyer" component={PropertyDetailsBuyer} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

function SellerStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={SellerBottomTabs} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="PropertyDetailsSeller" component={PropertyDetailsSeller} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="SoldProperties" component={SoldProperties} />
    </Stack.Navigator>
  )
}

function SellerBottomTabs() {
  return (
    <Tab.Navigator
      backBehavior='initialRoute'
      initialRouteName={"HomeSeller"}
      screenOptions={{ headerShown: false }}
      tabBar={props => <TabBarSeller {...props} />}>
      <Tab.Screen name="HomeSeller" component={HomeSeller} />
      <Tab.Screen name="AddProperty" component={AddProperty} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Settings" component={Settings}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.openDrawer();
          }
        })} />
    </Tab.Navigator>
  )
}

function BuyerBottomTabs() {
  return (
    <Tab.Navigator
      backBehavior='initialRoute'
      initialRouteName={"HomeBuyer"}
      screenOptions={{ headerShown: false }}
      tabBar={props => <TabBarBuyer {...props} />}
    >
      <Tab.Screen name="HomeBuyer" component={HomeBuyer} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Settings" component={Settings}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.openDrawer();
          }
        })} />
    </Tab.Navigator>
  )
}
