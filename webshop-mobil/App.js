import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './screens/Register';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import Store from './screens/Store';

export default function App() {

  const Stack = createNativeStackNavigator(); 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Store" component={Store} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
