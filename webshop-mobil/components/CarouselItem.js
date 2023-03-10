import { View, Text, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const carouselItem = ({item}) => {
    const {width} = useWindowDimensions();

    return (
        <View className="">
            <Image source={item.img} className="" style={{width, resizeMode: 'contain'}}/>
            <View>
                <Text>{item.title}</Text>
                <Text>{item.desc}</Text>
            </View>
        </View>
    )
}

export default carouselItem