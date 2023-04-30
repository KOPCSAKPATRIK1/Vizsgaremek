import { View, Text, ScrollView, useWindowDimensions, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ip = require('../assets/ipAddress.js').ipAddress;

const SearchScreen = ({route}) => {
    
    const navigation = useNavigation();
    const [data, setData] = useState([])
    const [message, setMessage] = useState(route.params.message)
    console.log(message);
    const { width } = useWindowDimensions();
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("");

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
            });

        getData(message);
    }, [])

    useLayoutEffect(()=>{
        if(selected === "sort-alpha-desc"){
            setData(prevData => {
                return [...prevData].sort((a, b) => b.name.localeCompare(a.name))
            })
        }
        else if(selected === "sort-alpha-asc"){
            setData(prevData => {
                return [...prevData].sort((a, b) => a.name.localeCompare(b.name))
            })
        }
        else if(selected === "sort-amount-asc"){
            setData(prevData => {
                return [...prevData].sort((a, b) => a.price - b.price)
            })
        }
        else if(selected === "sort-amount-desc"){
            setData(prevData => {
                return [...prevData].sort((a, b) => b.price - a.price)
            })
        }
    }, [selected])

    const getPopularshoes = async () => {
        const response = await fetch('http://' + ip + ':3000/shoes/popular'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        let json = await response.json();
        setData(json);
    }

    const getNewShoes = async () => {
        const response = await fetch('http://' + ip + ':3000/shoes'
          ,{
          headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
          })
        let json = await response.json();
        setData(json.sort((a, b) => b.id - a.id));
    }

    const brands = ["DUNK", "AIR FORCE", "JORDAN", "YEEZY"];
    const getData = async (message) => {
        const response = await fetch('http://' + ip + ':3000/shoes'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
      let json = await response.json();
        
      if (message == "Összes") {
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
      else if(message == "Népszerű"){
        getPopularshoes();
      }else if(message == "Legújabb"){
        getNewShoes();
      }
        
    }

    const searchByName = async (search) => {
        setSearch(search);
        setMessage("");
        const response = await fetch('http://' + ip + ':3000/shoes/name/' + search
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
                <TouchableOpacity><AntDesign name="search1" size={30} color="#ff6efa"/></TouchableOpacity>
                <TextInput 
                    className="border-b border-[#ffa1ff] w-[80vw] text-[#fff] text-[18px] p-2"
                    placeholder="Keresés..."
                    placeholderTextColor="#fff"
                    value={search}
                    onChangeText={searchByName}
                />
            </View>
            <View className="flex-row w-[100%] items-center">
                <View className="w-[50%]">
                    <Text className="text-white text-[20px] mx-4" >{message}{search}</Text>
                </View>   
                <View className="w-[50%] justify-end items-end">
                    <View className="flex-row w-full justify-around">
                        <FontAwesome 
                            name="sort-alpha-asc" 
                            size={25}color={selected === 'sort-alpha-asc' ? '#ff6efa' : 'white'} 
                            onPress={() => setSelected('sort-alpha-asc')}
                        />
                        <FontAwesome 
                            name="sort-alpha-desc" 
                            size={25}color={selected === 'sort-alpha-desc' ? '#ff6efa' : 'white'} 
                            onPress={() => setSelected('sort-alpha-desc')}
                        />
                        <FontAwesome 
                            name="sort-amount-asc" 
                            size={25}color={selected === 'sort-amount-asc' ? '#ff6efa' : 'white'} 
                            onPress={() => setSelected('sort-amount-asc')}
                        />
                        <FontAwesome 
                            name="sort-amount-desc" 
                            size={25}color={selected === 'sort-amount-desc' ? '#ff6efa' : 'white'} 
                            onPress={() => setSelected('sort-amount-desc')}
                        />
                    </View>
                </View>
            </View>

            <FlatList 
                className="w-full mt-3"
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