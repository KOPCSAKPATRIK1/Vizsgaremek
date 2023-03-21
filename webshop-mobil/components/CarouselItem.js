import { View, Text, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const carouselItem = ({item}) => {
    const {width} = useWindowDimensions();

    return (
        <View className="h-[150px] w-[150px] items-center justify-center mx-1 border-black border-solid border-2 rounded-[5px]">
            <Image source={{uri: item.img}} className=" h-[146px] w-full rounded-[5px] absolute left-0 top-0" />
            <Text className="text-white text-[28px] font-bold tracking-widest" style={{textShadowColor: 'rgba(0, 0, 0, 0.75)',textShadowOffset: {width: -1, height: 1},textShadowRadius: 10}}>{item.title}</Text>
        </View>
    )
}

export default carouselItem