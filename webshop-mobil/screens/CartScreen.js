import { View, Text, ScrollView, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Navbar from '../components/Navbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartItem from '../components/CartItem';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
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
        getUserData();
        getData();
        getTotalPrice();
    }, [])

    const getUserData = async () => {
        setUser(JSON.parse(await AsyncStorage.getItem('user')));
    }

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

    const deleteCartItem = (id, productId, size, quantity) => {
        fetch('http://'+ ip + ':3000/cart/delete/' + id
        ,{
            method: 'DELETE'
        })
        updateStock(productId, size, quantity);
        setData({});
        getData();
        getTotalPrice();
    }

    const checkout = () => {
        if(data.length == 0){
            ToastAndroid.show('Üres a kosarad.', ToastAndroid.SHORT);
        } else {
            navigation.navigate("Checkout");
        }
    }

    const updateStock = async ( id , size, quantity) => {
        console.log(id);
        const response = await fetch(
            'http://' + ip + ':3000/stock/add/'+ id +'/' + size + '/' + quantity,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
            }
          );
    }

    return (
        <View className="flex-1 bg-[#212121]">
            { !user ? (
                <View className="h-[80vh] w-full items-center justify-center">
                    <Text className="text-[30px] text-white">Nem vagy bejelentkezve</Text>
                    <TouchableOpacity className="border-solid border-2 border-[#ffa1ff] rounded-[10px] mt-10 flex-row items-center p-2" onPress={() => navigation.navigate("Home")}>
                        <Text className="text-[#ffa1ff] text-[20px] mr-2">Bejelentkezés</Text>
                        <MaterialCommunityIcon name="account-arrow-right-outline" size={40} color="#ff6efa"/>
                    </TouchableOpacity>
                </View>
            ) : data.length == 0 ? (
                <View className="h-[80vh] w-full items-center justify-center">
                    <Text className="text-[30px] text-white">Nincs cipő a kosaradban</Text>
                    <TouchableOpacity className="border-solid border-2 border-[#ffa1ff] rounded-[10px] mt-10 flex-row items-center p-2" onPress={() => navigation.navigate("Store")}>
                        <Text className="text-[#ffa1ff] text-[20px] mr-2">Keresgélés</Text>
                        <MaterialCommunityIcon name="arrow-collapse-right" size={40} color="#ff6efa"/>
                    </TouchableOpacity>
                </View>
            ) : (
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
            )}
        
            <View className=" absolute left-0 bottom-[60px] w-full bg-[#121212] justify-center items-center">
                <View className="flex-row w-[92vw] border-b-[1px] border-solid border-[#212121] pt-4 pb-2">
                    <View className="w-[70%]">
                        <Text className="text-white text-[16px]"><Text className="font-bold">Összesen:</Text> (Szállítás nélkül)</Text>
                    </View>
                    <View className="w-[30%] justify-end items-end">
                        <Text className="text-white font-bold text-[16px]">{price} Ft</Text>
                    </View>
                </View>
                <TouchableOpacity className="my-3 w-[92vw] h-[40px] bg-[#ffa1ff] items-center justify-center" onPress={()=> checkout()}>
                    <Text className="text-white text-[20px]">Fizetés</Text>
                </TouchableOpacity>
            </View>
        <View className="absolute bottom-0 left-0 border-t-[1px] border-t-[#383838] bg-[#212121]" >
            <Navbar />
        </View>
    </View>
  )
}

export default CartScreen