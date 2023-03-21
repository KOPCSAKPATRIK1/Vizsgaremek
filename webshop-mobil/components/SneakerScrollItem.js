import { View, Text, Image } from 'react-native'
import React from 'react'

const SneakerScrollItem = ({item}) => {
  return (
    <View className="h-[185px] w-[200px] border-solid border-[1px] border-[#ff6efa] rounded-[5px] justify-center mx-1">
      <Image source={{uri: item.imageUrl1}} className="h-[100px] m-2"/>
      <View className="items-center justify-center flex-1">
        <Text className="text-white">{item.name}</Text>
        <Text className="text-white">{item.price} Ft</Text>
      </View>
    </View>
  )
}

export default SneakerScrollItem