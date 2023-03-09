import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {

    const navigation = useNavigation();

    useLayoutEffect(()=> {
        navigation.setOptions({
        headerShown: false,
        })
    }, )

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
            />
            <TextInput 
            className="border-b border-[#ffa1ff] w-[80vw] text-[#fff] text-[18px] p-2"
            placeholder="Password..."
            placeholderTextColor="#fff"
            secureTextEntry={true}
            />
        </View>
        <TouchableOpacity
        className="items-center justify-center mt-[10vh]"
        onPress={() => navigation.navigate("Store")}>
            <View className="bg-[#ffa1ff] w-[70vw] h-[6vh] rounded-[20px] items-center justify-center">
                <Text className="text-[20px] text-white tracking-wider">SIGN IN</Text>
            </View>
        </TouchableOpacity>
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