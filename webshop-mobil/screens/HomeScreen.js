import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(()=> {
        navigation.setOptions({
        headerShown: false,
        })
    }, )

  return (
      <View className="bg-[#212121] flex-1">
        <View className="mt-[25vh] justify-center items-center">
            <Text className="text-[60px] font-bold text-[#ffa1ff]">FootFrenzy</Text> 
        </View>
        <TouchableOpacity 
        className="items-center justify-center mt-[35vh]"
        onPress={() => navigation.navigate("SignIn")}>
            <View className="bg-[#ffa1ff] w-[70vw] h-[6vh] rounded-[20px] items-center justify-center">
                <Text className="text-[20px] text-white tracking-wider">SIGN IN</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
        className="items-center justify-center mt-[7vh]"
        onPress={()=> navigation.navigate("Register")}>
            <View className="bg-white w-[70vw] h-[6vh] rounded-[20px] items-center justify-center">
                <Text className="text-[20px] text-black tracking-wider">Register</Text>
            </View>
        </TouchableOpacity>
        <View className="absolute w-[200%] h-[200%] top-[75vh] left-[-50vw] z-[-10] bg-[#ffa1ff] mt-[2vh]  rounded-full">
            <TouchableOpacity 
            className="mt-[15vh] justify-center items-center"
            onPress={()=> navigation.navigate("Store")}>
                <Text className="text-white underline">Countinue as guest</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default HomeScreen