import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {

    const navigation = useNavigation();


    useLayoutEffect(()=> {
        navigation.setOptions({
        headerShown: false,
        })
    }, )

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!usernameOrEmail) {
      setError('Please enter your email or username');
      return;
    }

    try {
      const response = await fetch('http://192.168.0.184:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: usernameOrEmail, password }),
      });

      if (response.ok) {
        const { accessToken, user } = await response.json();

        // Store authentication token and user object in async storage
        await AsyncStorage.setItem('accessToken', accessToken);
        await AsyncStorage.setItem('user', JSON.stringify(user));
        // Navigate to home screen
        navigation.navigate('Store');
      } else {
        const { message } = await response.json();
        setError(message);
      }
    } catch (error) {
      console.error(error);
      setError('Network error, please try again later');
    }
  };

  return (
    <View className="bg-[#212121] flex-1">
        <View className="mt-[15vh] justify-center items-center">
            <Text className="text-[60px] font-bold text-[#ffa1ff]">FootFrenzy</Text> 
        </View>
        <View className="mt-[14vh] justify-center items-center space-y-10">
            <TextInput
            className="border-b border-[#ffa1ff] w-[80vw] text-[#fff] text-[18px] p-2"
            placeholder="Email..."
            placeholderTextColor="#fff"
            value={usernameOrEmail}
            onChangeText={setUsernameOrEmail}
            />
            <TextInput 
            className="border-b border-[#ffa1ff] w-[80vw] text-[#fff] text-[18px] p-2"
            placeholder="Password..."
            placeholderTextColor="#fff"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}

            />
        </View>
        <TouchableOpacity
        className="items-center justify-center mt-[10vh]"
        onPress={() => handleLogin()}>
            <View className="bg-[#ffa1ff] w-[70vw] h-[6vh] rounded-[20px] items-center justify-center">
                <Text className="text-[20px] text-white tracking-wider">SIGN IN</Text>
            </View>
        </TouchableOpacity>
        {error && <Text>{error}</Text>}
        <TouchableOpacity className="mt-[5vh] w-[100%] px-[10vw]">
            <Text className="text-white underline">Forgot password</Text>
        </TouchableOpacity>
        <View className="absolute w-[200%] h-[100vh] top-[80vh] left-[-50vw] z-[-10] bg-[#ffa1ff] mt-[2vh]  rounded-full">
            <TouchableOpacity 
            className="mt-[10vh] justify-center items-center"
            onPress={()=> navigation.navigate("Register")}>
                <Text className="text-white underline">Dont have an account? Register here</Text>
            </TouchableOpacity>
            </View>
        </View>
  )
}

export default SignIn