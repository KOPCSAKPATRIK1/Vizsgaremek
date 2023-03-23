import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './screens/Register';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import Store from './screens/Store';
import SearchScreen from './screens/SearchScreen';
import Liked from './screens/Liked';
import CartScreen from './screens/CartScreen';
import AccountScreen from './screens/AccountScreen';
import Product from './screens/Product';

export default function App() {

  const Stack = createNativeStackNavigator(); 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Store" component={Store} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Liked" component={Liked} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
