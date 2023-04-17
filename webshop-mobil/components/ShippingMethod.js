import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const ShippingMethod = ({item}) => {
  return (
    <View className=" border-b-2 border-[#ffa1ff] border-solid mb-3">
      <View className="flex-row w-[90vw] items-center">
        <Text className="text-white text-[16px] font-bold my-1">{item.price} Ft</Text>
        <Text className="text-white text-[16px] mx-7 my-1">{item.name}</Text>
        <View className=" absolute left-[80%] top-[10%] border-solid border-[1px] border-[#ffa1ff] h-4 w-4 rounded-full bg-white"></View>
      </View>
      <Text className="text-white text-[16px] my-1 ">Delivery in {item.delivery} days</Text>
      <View className="flex-row items-center">
        <AntDesign name="infocirlceo" size={15} color="#fff"/>
        <Text className="text-white text-[16px] mx-2 my-1">No delivery on public holidays.</Text>
      </View>
    </View>
  )
}

export default ShippingMethod