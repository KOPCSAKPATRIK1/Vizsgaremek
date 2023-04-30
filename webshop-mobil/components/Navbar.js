import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Navbar = () => {

    const {width} = useWindowDimensions();
    const navigation = new useNavigation();
    const message = ""

  return (
    <View className="flex-row justify-between px-6 py-3 h-[60px]" style={{width, resizeMode: 'contain'}}>
        <TouchableOpacity onPress={()=> navigation.navigate("Store")}><AntDesign name="home" size={30} color="#ff6efa"/></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Search", message)}><AntDesign name="search1" size={30} color="#ff6efa"/></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Liked")}><AntDesign name="hearto" size={30} color="#ff6efa"/></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Cart")}><AntDesign name="shoppingcart" size={30} color="#ff6efa"/></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Account")}><MaterialCommunityIcon name="account-outline" size={35} color="#ff6efa"/></TouchableOpacity>
    </View>
  )
}

export default Navbar