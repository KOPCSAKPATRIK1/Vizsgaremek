import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Navbar from '../components/Navbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Products from '../components/Products';
import Loading from '../components/Loading';

const Liked = () => {

    const navigation = useNavigation();
    const [user, setUser] = useState({})
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
        getUserData();
        getLikedItemIds()
        
    }, [])
    
    useLayoutEffect(()=>{
        console.log(data);
        if (data.length > 0) {
            setIsLoading(false);
        }
    }, [data])

    const getUserData = async () => {
        const res = await AsyncStorage.getItem('user');
        setUser(JSON.parse(res));
    } 

    const getLikedItemIds = async () => {
        const response = await fetch('http://192.168.0.184:3000/like/user/' + user.id
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
        const response = await fetch('http://192.168.0.184:3000/shoes/' + productId
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
    
    if(user){
        return (
            <View className="flex-1 bg-[#212121]">
                    <ScrollView className="mt-10">    
                    {isLoading ? (
                        <Loading />
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
    else{
        return (
            <View className="flex-1 bg-[#212121]">
                    <ScrollView className="mt-10">    
                        <Text className="text-white text-[30px]">You aren't logged in</Text>
                        <View className="h-20"></View>
                    </ScrollView>
        
                    <View className="absolute bottom-0 left-0 border-t-[1px] border-t-[#383838] bg-[#212121]" >
                        <Navbar />
                    </View>
                </View>
        )
    }
}

export default Liked