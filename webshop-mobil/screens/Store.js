import { FlatList, Text, TouchableOpacity, View, Image, Animated, ScrollView,} from 'react-native';
import React, { useLayoutEffect, useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import CarouselItem from '../components/CarouselItem';
import carousel from '../assets/carousel';
import Navbar from '../components/Navbar';
import ReleaseCarouselItem from '../components/ReleaseCarouselItem';
import SneakerScrollItem from '../components/SneakerScrollItem';


const Store = () => {

  const navigation = useNavigation();


    useLayoutEffect(()=> {
        navigation.setOptions({
        headerShown: false,
        });
        getReleases();
        getPopularshoes();
        getNewShoes();
    }, [])

    const scrollx = useRef(new Animated.Value(0)).current;
    const[currentIndex, setCurrentIndex] = useState(0);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
      setCurrentIndex(viewableItems[0].index);
    }).current;


    const [releaseData, setReleaseData] = useState([]);
    const getReleases = async () => {
      const response = await fetch('http://192.168.0.184:3000/releases'
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
      const response = await fetch('http://192.168.0.184:3000/shoes/popular'
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
      const response = await fetch('http://192.168.0.184:3000/shoes'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
      let json = await response.json();
      setNewShoes(json.sort((a, b) => b.id - a.id));
      console.log(newShoes);
    }




  return (
    <View className="flex-1 bg-[#212121]">
      
      <ScrollView className="flex">
        <FlatList 
        className="border-solid border-[#ff6efa] border-b-2"
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

        <View className="flex flex-row items-center my-3">
          <Text className="text-white text-[22px] mx-3">Popular Sneakers</Text>
          <TouchableOpacity className="flex-1 justify-center items-end mx-3">
            <Text className="text-[#ff6efa] text-[20px] justify-end">See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal className="h-[185px] w-full">
          {popularShoes.slice(0,15).map((item) => (
            <SneakerScrollItem key={item.id} item={item} />
          ))}
        </ScrollView>
        
        <Text className="text-white text-[22px] m-3">Search by Brands</Text>
        <ScrollView horizontal className="h-[150px] w-full">
          {carousel.map((item) => (
            <CarouselItem key={item.id} item={item} />
          ))}
        </ScrollView>

        <View className="flex flex-row items-center my-3">
          <Text className="text-white text-[22px] mx-3">Newest Sneakers</Text>
          <TouchableOpacity className="flex-1 justify-center items-end mx-3">
            <Text className="text-[#ff6efa] text-[20px] justify-end">See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal className="h-[185px] w-full">
          {newShoes.slice(0,15).map((item) => (
            <SneakerScrollItem key={item.id} item={item} />
          ))}
        </ScrollView>


        
      </ScrollView>
      
        <View className="absolute bottom-0 left-0 border-t-[1px] border-t-[#383838] bg-[#212121]" >
          <Navbar />
        </View>
      



      
    </View>
  )
}

export default Store