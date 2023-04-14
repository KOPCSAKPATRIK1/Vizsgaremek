import { View, Text, ActivityIndicator, Image } from 'react-native'
import React from 'react'
const gif = require('../assets/loading.gif')

const Loading = () => {
  return (
    <View className="flex-1 min-h-screen bg-[#212121] items-center justify-center">
       <Image source={gif} />
    </View>
  )
}

export default Loading