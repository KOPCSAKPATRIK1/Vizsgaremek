import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Navbar from '../components/Navbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartItem from '../components/CartItem';
const ip = require('../assets/ipAddress.js').ipAddress;

const CartScreen = () => {
 
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [user, setUser] = useState({});
    const [price, setPrice] = useState(0);

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
        console.log(user);
        getData();
        getTotalPrice();
    }, [])

    const getData = async () => {
        const user = JSON.parse(await AsyncStorage.getItem('user'))
        const response = await fetch('http://' + ip + ':3000/cart/' + user.id
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        setData(await response.json());
    }

    const getTotalPrice = async () => {
        const user = JSON.parse(await AsyncStorage.getItem('user'))
        const response = await fetch('http://' + ip + ':3000/cart/total/' + user.id
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        setPrice(await response.json());
    }

    const deleteCartItem = (id) => {
        fetch('http://'+ ip + ':3000/cart/delete/' + id
        ,{
            method: 'DELETE'
        })
        setData({});
        getData();
        getTotalPrice();
    }

    return (
        <View className="flex-1 bg-[#212121]">
        <ScrollView className="mt-10">
            <FlatList 
                className="w-full"
                //contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
                data={data}
                renderItem={({item}) => <CartItem item={item} deleteCartItem={deleteCartItem} />}
                keyExtractor={(item) => item.id.toString()}
            />
            <View className="h-[25vh]"></View>
        </ScrollView>
            <View className=" absolute left-0 bottom-[60px] w-full bg-[#121212] justify-center items-center">
                <View className="flex-row w-[92vw] border-b-[1px] border-solid border-[#212121] pt-4 pb-2">
                    <View className="w-[70%]">
                        <Text className="text-white text-[16px]"><Text className="font-bold">Total:</Text> (excluding delivery)</Text>
                    </View>
                    <View className="w-[30%] justify-end items-end">
                        <Text className="text-white font-bold text-[16px]">{price} Ft</Text>
                    </View>
                </View>
                <TouchableOpacity className="my-3 w-[92vw] h-[40px] bg-[#ffa1ff] items-center justify-center" onPress={()=> navigation.navigate("Checkout")}>
                    <Text className="text-white text-[20px]">Check out</Text>
                </TouchableOpacity>
            </View>
        <View className="absolute bottom-0 left-0 border-t-[1px] border-t-[#383838] bg-[#212121]" >
            <Navbar />
        </View>
    </View>
  )
}

export default CartScreen