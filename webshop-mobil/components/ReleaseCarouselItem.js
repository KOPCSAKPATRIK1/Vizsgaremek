import { View, Text, useWindowDimensions, Image } from 'react-native'
import React from 'react'

const ReleaseCarouselItem = ({ item }) => {

  const { width } = useWindowDimensions();

  return (
    <View style={{ width, resizeMode: 'contain' }} className="bg-white h-[300px] justify-center items-center">
      <Image source={{ uri: item.imageUrl1 }} className="w-full h-[300px] absolute left-0 top-0" />
      <Text className="text-[34px] font-bold text-[#ffa1ff] m-2" style={{ textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 10 }}>Hamarosan boltunkban</Text>
      <Text className="text-[22px] font-bold text-white m-2" style={{ textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 10 }}>{item.name}</Text>
      <Text className="text-[18px] font-bold text-white m-2" style={{ textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 10 }}>{item.releaseDate}</Text>
    </View>
  )
}

export default ReleaseCarouselItem