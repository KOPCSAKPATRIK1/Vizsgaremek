import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Products = ({ item }) => {
  const navigation = useNavigation();
  const id = item.id;
  return (
    <TouchableOpacity
      className="w-[46vw] h-[50vw] m-[1vw] items-center justify-center border-solid border-2 border-[#ff6efa] rounded-[5px]"
      activeOpacity={1}
      onPress={() => navigation.navigate("Product", { id })}
    >
      <Image className="w-[46vw] h-[30vw]" source={{ uri: item.imageUrl1 }} />
      <Text className="text-white">{item.name}</Text>
      <Text className="text-white">{item.price} Ft</Text>

    </TouchableOpacity>
  )
}

export default Products