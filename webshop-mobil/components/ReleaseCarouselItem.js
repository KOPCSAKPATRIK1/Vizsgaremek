import { View, Text,useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ReleaseCarouselItem = ({item}) => {

    const {width} = useWindowDimensions();
    const navigation = useNavigation();
    const message = "Releases";

  return (
    <View style={{width, resizeMode: 'contain'}} className="bg-white h-[300px] justify-center items-center">
        <Image source={{uri: item.imageUrl1}} className="w-full h-[300px] absolute left-0 top-0" />
        <Text className="text-[22px] font-bold text-white m-2" style={{textShadowColor: 'rgba(0, 0, 0, 0.75)',textShadowOffset: {width: -1, height: 1},textShadowRadius: 10}}>{item.name}</Text>
        <Text className="text-[18px] font-bold text-white m-2" style={{textShadowColor: 'rgba(0, 0, 0, 0.75)',textShadowOffset: {width: -1, height: 1},textShadowRadius: 10}}>{item.releaseDate}</Text>
    </View>
  )
}

export default ReleaseCarouselItem