import { View, Text, TouchableOpacity, Button, TextInput} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox';

const Register = () => {

    const navigation = useNavigation();

    useLayoutEffect(()=> {
        navigation.setOptions({
        headerShown: false,
        })
    }, )

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <View className="bg-[#212121] flex-1">
        <View className="mt-[12vh] justify-center items-center">
            <Text className="text-[30px] font-bold text-[#ffa1ff]">Create a New Account</Text> 
        </View>
        <View className="mt-[8vh] justify-center items-center space-y-10">
            <TextInput 
            className="border-b border-[#ffa1ff] w-[80vw] text-[#fff] text-[18px] p-2"
            placeholder="Username..."
            placeholderTextColor="#fff"
            />
            <TextInput 
            className="border-b border-[#ffa1ff] w-[80vw] text-[#fff] text-[18px] p-2"
            placeholder="Email address..."
            placeholderTextColor="#fff"
            />
            <TextInput 
            className="border-b border-[#ffa1ff] w-[80vw] text-[#fff] text-[18px] p-2"
            placeholder="Password..."
            placeholderTextColor="#fff"
            secureTextEntry={true}
            />
            <TextInput 
            className="border-b border-[#ffa1ff] w-[80vw] text-[#fff] text-[18px] p-2"
            placeholder="Password again..."
            placeholderTextColor="#fff"
            secureTextEntry={true}
            />
            <View className="flex-row space-x-2">
                {/*<CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />*/}
                <View className="w-5 h-5 bg-white border-[#ffa1ff] border-[2px]"></View>
                <Text className="text-white">Agree with terms and conditions</Text>
            </View>
            <View>
            <TouchableOpacity 
            className="items-center justify-center mt-[5vh]"
            onPress={() => navigation.navigate("Store")}>
                <View className="bg-[#ffa1ff] w-[70vw] h-[6vh] rounded-[20px] items-center justify-center">
                    <Text className="text-[20px] text-white tracking-wider">Register</Text>
                </View>
            </TouchableOpacity>
            <View className="absolute w-[200%] h-[100vh] top-[15vh] left-[-65vw] z-[-10] bg-[#ffa1ff] mt-[2vh]  rounded-full">
            <TouchableOpacity 
            className="mt-[10vh] justify-center items-center"
            onPress={()=> navigation.navigate("SignIn")}>
                <Text className="text-white underline">Already have an account? Sign in</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    </View>
  )
}

export default Register