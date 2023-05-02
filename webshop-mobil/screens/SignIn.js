import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput as Input } from 'react-native-paper';
const ip = require('../assets/ipAddress.js').ipAddress;

const SignIn = () => {

  const navigation = useNavigation();


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  },)

  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [usernameOrEmailBad, setUsernameOrEmailBad] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordBad, setPasswordBad] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setUsernameOrEmailBad(false);
    if (!usernameOrEmail) {
      setError('Adja meg az email címét vagy felhasználónevét');
      setUsernameOrEmailBad(true);
      if (!password) {
        setError("Adja meg a jelszavát")
        setPasswordBad(true);
      }
      return;
    }

    try {
      const response = await fetch('http://' + ip + ':3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: usernameOrEmail, password }),
      });

      if (response.ok) {
        const { accessToken, user } = await response.json();
        await AsyncStorage.setItem('accessToken', accessToken);
        await AsyncStorage.setItem('user', JSON.stringify(user));
        navigation.navigate('Store');
      } else {
        setError("A felhasználónév és a jelszó nem egyezik");
        setUsernameOrEmailBad(true);
      }
    } catch (error) {
      console.error(error);
      setError('Hálózati probléma');
    }
  };

  return (
    <View className="bg-[#212121] flex-1">
      <View className="mt-[15vh] justify-center items-center">
        <Text className="text-[60px] font-bold text-[#ffa1ff]">FootFrenzy</Text>
      </View>
      <View className="mt-[10vh] justify-center items-center space-y-10">
        <Input
          className="bg-[#212121] w-[90vw] text-[18px]"
          label="Felhasználónév vagy Email"
          mode="flat"
          activeUnderlineColor="#ffa1ff"
          underlineColor="#ffa1ff"
          textColor="white"
          placeholder="felhasználó12"
          value={usernameOrEmail}
          onChangeText={setUsernameOrEmail}
          onFocus={() => setUsernameOrEmailBad(false)}
          error={usernameOrEmailBad}
        />
        <Input
          className="bg-[#212121] w-[90vw] text-[18px]"
          label="Jelszó"
          mode="flat"
          activeUnderlineColor="#ffa1ff"
          underlineColor="#ffa1ff"
          textColor="white"
          placeholder="*******"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
          onFocus={() => setPasswordBad(false)}
          error={passwordBad}
        />
      </View>
      <TouchableOpacity
        className="items-center justify-center mt-[10vh]"
        onPress={() => handleLogin()}>
        <View className="bg-[#ffa1ff] w-[70vw] h-[6vh] rounded-[20px] items-center justify-center">
          <Text className="text-[20px] text-white tracking-wider">Bejelentkezés</Text>
        </View>
      </TouchableOpacity>
      <View className="flex justify-center items-center mt-5">
        <Text className="text-red-600 text-[]">{error}</Text>
      </View>
      <View className="absolute w-[200%] h-[100vh] top-[80vh] left-[-50vw] z-[-10] bg-[#ffa1ff] mt-[2vh]  rounded-full">
        <TouchableOpacity
          className="mt-[10vh] justify-center items-center"
          onPress={() => navigation.navigate("Register")}>
          <Text className="text-white underline">Nincs még fiókod? Regisztrálj itt!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignIn