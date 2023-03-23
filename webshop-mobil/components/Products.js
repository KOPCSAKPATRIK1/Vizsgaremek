import { View, Text, Image } from 'react-native'
import React from 'react'

const Products = ({item}) => {
  return (
    <View className="w-[46vw] h-[50vw] m-[1vw] items-center justify-center border-solid border-2 border-[#ff6efa] rounded-[5px]" >
        <Image className="w-[46vw] h-[30vw]" source={{uri: item.imageUrl1}} />
      <Text className="text-white">{item.name}</Text>
      <Text className="text-white">{item.price} Ft</Text>
    </View>
  )
}

export default Products