import { FlatList, Text, TouchableOpacity, View, Image, Animated, ScrollView,} from 'react-native';
import React, { useLayoutEffect, useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import CarouselItem from '../components/CarouselItem';
import carousel from '../assets/carousel';
import Navbar from '../components/Navbar';
import ReleaseCarouselItem from '../components/ReleaseCarouselItem';
import SneakerScrollItem from '../components/SneakerScrollItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SneakerScroll from '../components/SneakerScroll';
import SneakerScrollHeadear from '../components/SneakerScrollHeadear';
const poster = require('../assets/poster.webp');
const ip = require('../assets/ipAddress.js').ipAddress;


const Store = () => {

  const navigation = useNavigation();
  const [user, setUser] = useState({});

    useLayoutEffect(()=> {
        navigation.setOptions({
        headerShown: false,
        });
        getReleases();
        getPopularshoes();
        getNewShoes();
        getShoes();
        AsyncStorage.getItem('user').then((res) => setUser(res));
        //AsyncStorage.getItem('user').then((res) => console.log(res))
        console.log(user);
        
    }, [])

    const scrollx = useRef(new Animated.Value(0)).current;
    const[currentIndex, setCurrentIndex] = useState(0);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
      setCurrentIndex(viewableItems[0].index);
    }).current;


    const [releaseData, setReleaseData] = useState([]);
    const getReleases = async () => {
      const response = await fetch('http://' + ip + ':3000/releases'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        let json = await response.json();
        setReleaseData(json);
    }

    const [popularShoes, setPopularShoes] = useState([]);
    const getPopularshoes = async () => {
      const response = await fetch('http://' + ip + ':3000/shoes/popular'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        let json = await response.json();
        setPopularShoes(json);
    }

    const [newShoes, setNewShoes] = useState([]);
    const getNewShoes = async () => {
      const response = await fetch('http://' + ip + ':3000/shoes'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
      let json = await response.json();
      setNewShoes(json.sort((a, b) => b.id - a.id));
    }

    const [shoes, setShoes] = useState([]);
    const getShoes = async () => {
      const response = await fetch('http://' + ip + ':3000/shoes'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
      let json = await response.json();
      setShoes(json);
    }




  return (
    <View className="flex-1 bg-[#212121]">
      
      <ScrollView className="flex">
        <FlatList 
        data={releaseData.slice(0,5)} 
        renderItem={({item}) => <ReleaseCarouselItem item={item} />}
        horizontal 
        showHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollx }}}],{
          useNativeDriver: false,
        })}
        />

        
        <SneakerScrollHeadear text={"Popular Sneakers"} message={"Popular"} />
        <SneakerScroll data={popularShoes} />
        
        <Text className="text-white text-[22px] m-3">Search by Brands</Text>
        <ScrollView horizontal className="h-[150px] w-full">
          {carousel.map((item) => (
            <CarouselItem key={item.id} item={item} />
          ))}
        </ScrollView>

        <SneakerScrollHeadear text={"Newest Sneakers"} message={"Newest"}/>
        <SneakerScroll data={newShoes} />

        <View className="border-solid border-2 border-t-[#ff6efa] border-b-[#ff6efa] my-5">
          <Image source={poster} className="w-full h-[275px]" />
        </View>

        <SneakerScrollHeadear text={"All Sneakers"} message={"All"} />
        <SneakerScroll data={shoes} />


        <View className="h-20"></View>
      </ScrollView>
      
        <View className="absolute bottom-0 left-0 border-t-[1px] border-t-[#383838] bg-[#212121]" >
          <Navbar />
        </View>
      



      
    </View>
  )
}

export default Store