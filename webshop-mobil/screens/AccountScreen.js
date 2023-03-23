import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Navbar from '../components/Navbar';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AccountScreen = () => {

    const navigation = useNavigation();
    const [user, setUser] = useState({});

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
            });
        AsyncStorage.getItem('user').then((res) => setUser(res));
        console.log(user);
    }, [])


    const logOut = () => {
        AsyncStorage.clear();
        navigation.navigate("Store");
    }

    if(user){
        return (
          <View className="flex-1 bg-[#212121] items-center justify-center">
                    <Text className="text-white text-[28px] m-4">Hi {user.username}</Text>
                    <TouchableOpacity 
                    onPress={() => logOut()}
                    className="m-4 items-center justify-center w-[110px] h-[60px] border-solid border-2 border-[#ff6efa] rounded-[5px]">
                        <Text className="text-[#ff6efa] font-bold text-[22px]">Log out</Text>
                    </TouchableOpacity>
      
                  <View className="absolute bottom-0 left-0 border-t-[1px] border-t-[#383838] bg-[#212121]" >
                      <Navbar />
                  </View>
          </View>
        )
    }
    else{
        return (
            <View className="flex-1 bg-[#212121] items-center justify-center">
                    <Text className="text-white text-[28px] m-4">You aren't logged in.</Text>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate("Home")}
                    className="m-4 items-center justify-center w-[110px] h-[60px] border-solid border-2 border-[#ff6efa] rounded-[5px]">
                        <Text className="text-[#ff6efa] font-bold text-[22px]">Log in</Text>
                    </TouchableOpacity>
        
                    <View className="absolute bottom-0 left-0 border-t-[1px] border-t-[#383838] bg-[#212121]" >
                        <Navbar />
                    </View>
            </View>
          )
    }

}

export default AccountScreen