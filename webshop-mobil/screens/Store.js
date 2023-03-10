import { Dimensions, FlatList, Text, TouchableOpacity, View, Image, Animated} from 'react-native';
import React, { useLayoutEffect, useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CarouselItem from '../components/CarouselItem';
import carousel from '../assets/carousel';


const Store = () => {

  const navigation = useNavigation();

    useLayoutEffect(()=> {
        navigation.setOptions({
        headerShown: false,
        })
    }, )

    const scrollx = useRef(new Animated.Value(0)).current;
    const[currentIndex, setCurrentIndex] = useState(0);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
      setCurrentIndex(viewableItems[0].index);
    }).current;




  return (
    <View className="flex-1 bg-[#212121]">
      <View className="flex-row mt-10">
        <View className="items-center justify-center w-[60%]">
          <Text className="text-[#ffa1ff] text-[40px]">FootFrenzy</Text>
        </View>
        <View className="items-center justify-end flex-row w-[40%]" >
          <View className="px-1"><MaterialCommunityIcon name="account-circle" size={30} color="#fff"/></View>
          <View className="px-1"><FeatherIcon name="search" size={30} color="#fff" /></View>
          <View className="px-1"><FeatherIcon name="shopping-bag" size={30} color="#fff" /></View>
        </View>
      </View>

      <FlatList 
      className="shadow-lg shadow[#ff6efa]"
      data={carousel} 
      renderItem={({item}) => <CarouselItem item={item} />}
      horizontal 
      showHorizontalScrollIndicator
      pagingEnabled
      bounces={false}
      keyExtractor={(item) => item.id}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollx }}}],{
        useNativeDriver: false,
      })}
      />

      
    </View>
  )
}

export default Store