import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SneakerScrollHeadear = ({text, message}) => {

    const navigation = useNavigation();

  return (
    <View className="flex flex-row items-center my-3">
        <Text className="text-white text-[22px] mx-3">{text}</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate("Search",{message})}
        className="flex-1 justify-center items-end mx-3">
            <Text className="text-[#ff6efa] text-[20px] justify-end">See all</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SneakerScrollHeadear