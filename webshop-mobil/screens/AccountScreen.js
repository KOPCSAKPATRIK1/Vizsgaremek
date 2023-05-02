import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Navbar from '../components/Navbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const AccountScreen = () => {

    const navigation = useNavigation();
    const [user, setUser] = useState({});

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
        getUserData();
    }, [])

    const getUserData = async () => {
        const res = await AsyncStorage.getItem('user');
        setUser(JSON.parse(res));
    }

    const logOut = () => {
        AsyncStorage.clear();
        navigation.navigate("Store");
    }

    if (user) {
        return (
            <View className="flex-1 bg-[#212121] items-center justify-center">
                <Text className="text-white text-[28px] m-4">Szia {user.username}</Text>
                <TouchableOpacity
                    onPress={() => logOut()}
                    className="border-solid border-2 border-[#ffa1ff] rounded-[10px] mt-10 flex-row items-center p-2">
                    <Text className="text-[#ffa1ff] text-[20px] mr-2">Kijelentkezés</Text>
                    <MaterialCommunityIcon name="account-arrow-left-outline" size={40} color="#ff6efa" />
                </TouchableOpacity>

                <View className="absolute bottom-0 left-0 border-t-[1px] border-t-[#383838] bg-[#212121]" >
                    <Navbar />
                </View>
            </View>
        )
    }
    else {
        return (
            <View className="flex-1 bg-[#212121] items-center justify-center">
                <View className="h-[80vh] w-full items-center justify-center">
                    <Text className="text-[30px] text-white">Nem vagy bejelentkezve</Text>
                    <TouchableOpacity className="border-solid border-2 border-[#ffa1ff] rounded-[10px] mt-10 flex-row items-center p-2" onPress={() => navigation.navigate("Home")}>
                        <Text className="text-[#ffa1ff] text-[20px] mr-2">Bejelentkezés</Text>
                        <MaterialCommunityIcon name="account-arrow-right-outline" size={40} color="#ff6efa" />
                    </TouchableOpacity>
                </View>

                <View className="absolute bottom-0 left-0 border-t-[1px] border-t-[#383838] bg-[#212121]" >
                    <Navbar />
                </View>
            </View>
        )
    }

}

export default AccountScreen