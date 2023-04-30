import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Navbar from '../components/Navbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Products from '../components/Products';
const ip = require('../assets/ipAddress.js').ipAddress;
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Liked = () => {

    const navigation = useNavigation();
    const [user, setUser] = useState({})
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
        getUser();
        getLikedItemIds()
        
    }, [])

    const getUser = async () => {
        setUser(JSON.parse(await AsyncStorage.getItem('user')));
    }

    const getLikedItemIds = async () => {
        const user = JSON.parse(await AsyncStorage.getItem('user'))
        const response = await fetch('http://' + ip + ':3000/like/user/' + user.id
            ,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        let json = await response.json();
        json.forEach(item => {
            getLikedItems(item.productId);
        });
    }

    const getLikedItems = async (productId) => {
        const response = await fetch('http://' + ip + ':3000/shoes/' + productId
            ,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        let json = await response.json();
        console.log(json);
        setData(prevData => [...prevData, json]);
    }
    
    
    return (
        <View className="flex-1 bg-[#212121]">
                <ScrollView className="mt-10">    
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
                        <Text className="text-[30px] text-white">Nincs likeolt cipőd</Text>
                        <TouchableOpacity className="border-solid border-2 border-[#ffa1ff] rounded-[10px] mt-10 flex-row items-center p-2" onPress={() => navigation.navigate("Store")}>
                            <Text className="text-[#ffa1ff] text-[20px] mr-2">Keresgélés</Text>
                            <MaterialCommunityIcon name="arrow-collapse-right" size={40} color="#ff6efa"/>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <FlatList 
                        className="w-full"
                        contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
                        data={data}
                        renderItem={({item}) => <Products item={item} />}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                    />
                )}
                    <View className="h-20"></View>
                </ScrollView>
    
                <View className="absolute bottom-0 left-0 border-t-[1px] border-t-[#383838] bg-[#212121]" >
                    <Navbar />
                </View>
            </View>
    )
    
}

export default Liked