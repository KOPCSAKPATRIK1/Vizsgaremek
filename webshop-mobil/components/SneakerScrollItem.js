import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SneakerScrollItem = ({item}) => {

  const navigation = useNavigation();
  const id = item.id;

  return (
    <TouchableOpacity 
      className="h-[185px] w-[200px] border-solid border-[1px] border-[#ff6efa] rounded-[5px] justify-center mx-1"
      activeOpacity={1}
      onPress={() => navigation.navigate("Product",{id})}  
    >
      <Image source={{uri: item.imageUrl1}} className="h-[100px] m-2"/>
      <View className="items-center justify-center flex-1">
        <Text className="text-white">{item.name}</Text>
        <Text className="text-white">{item.price} Ft</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SneakerScrollItem