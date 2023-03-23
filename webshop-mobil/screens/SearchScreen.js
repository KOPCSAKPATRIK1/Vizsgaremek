import { View, Text, ScrollView, useWindowDimensions, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchScreen = ({route}) => {
    
    const navigation = useNavigation();
    const [message, setMessage] = useState(route.params.message)
    console.log(message);
    const { width } = useWindowDimensions();
    const [search, setSearch] = useState("");

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
            });

        getData(message);
        console.log(message);
    }, [])

    const getPopularshoes = async () => {
      const response = await fetch('http://192.168.0.184:3000/shoes/popular'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        let json = await response.json();
        //console.log(json);
        return json;
    }

    const getNewShoes = async () => {
        const response = await fetch('http://192.168.0.184:3000/shoes'
          ,{
          headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
          })
        let json = await response.json();
        return(json.sort((a, b) => b.id - a.id));
    }

    const brands = ["DUNK", "AIR FORCE", "JORDAN", "YEEZY"];
    const [data, setData] = useState([])
    const getData = async (message) => {
        const response = await fetch('http://192.168.0.184:3000/shoes'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
      let json = await response.json();
        
      if (message == "All") {
          setData(json);
      } 
      else if(brands.includes(message)){
        let helper = [];
        json.forEach(shoe => {
            if(shoe.name.toLowerCase().includes(message.toLowerCase())){
                helper.push(shoe);
            }
        });
        setData(helper);
      }
      else if(message == "Popular"){
        setData(getPopularshoes());
        console.log(getPopularshoes());
      }else if(message == "Newest"){
        setData(getNewShoes());
        console.log(setData);
      }
        
    }

    const searchByName = async (search) => {
        setSearch(search);
        setMessage("");
        const response = await fetch('http://192.168.0.184:3000/shoes/name/' + search
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        let json = await response.json();
        setData(json);
    }
    
    
    return (
        <View className="flex-1 bg-[#212121]">
            <ScrollView className="mt-10"  style={{width, resizeMode: 'contain'}}>
            <View className="w-full h-[8vh] flex-row justify-around items-center mb-5">
                <TouchableOpacity onPress={()=> navigation.navigate("Search")}><AntDesign name="search1" size={30} color="#ff6efa"/></TouchableOpacity>
                <TextInput 
                    className="border-b border-[#ffa1ff] w-[80vw] text-[#fff] text-[18px] p-2"
                    placeholder="Search..."
                    placeholderTextColor="#fff"
                    value={search}
                    onChangeText={searchByName}
                />
            </View>

            <Text className="text-white text-[20px] mx-3 mb-5">{message}{search}</Text>

            <FlatList 
                className="w-full"
                contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
                data={data}
                renderItem={({item}) => <Products item={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
            />
            <View className="h-20"></View>
            </ScrollView>

            <View className="absolute bottom-0 left-0 border-t-[1px] border-t-[#383838] bg-[#212121]" >
                <Navbar />
            </View>
        </View>
    )
}

export default SearchScreen