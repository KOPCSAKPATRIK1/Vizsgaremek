import { View, Text, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Navbar from '../components/Navbar';


const AccountScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
            });
    }, [])

  return (
    <View className="flex-1 bg-[#212121]">
            <ScrollView>

                <View className="h-20"></View>
            </ScrollView>

            <View className="absolute bottom-0 left-0 border-t-[1px] border-t-[#383838] bg-[#212121]" >
                <Navbar />
            </View>
        </View>
  )
}

export default AccountScreen