import { View, Text, ScrollView, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import ShippingMethod from '../components/ShippingMethod';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Checkout = () => {

    const navigation = useNavigation();
    const [shippingMethods, setShippingMethods] = useState([]);
    const [state, setState] = useState("");
    const [page, setPage] = useState(1);

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "Checkout",
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "#212121"
            },
        });
        getShippingMethods();
    }, [])

    const getShippingMethods = async ()=> {
        const response = await fetch('http://192.168.0.184:3000/shippingmethod'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        let json = await response.json();
        setShippingMethods(json);
    }
    
    if(page === 1) {
        return (
          <View className="flex-1 bg-[#212121]">
            <View className="flex-row justify-around items-center bg-[#262626] h-[8vh]">
                  <View className="flex-row justify-center items-center w-[33%]">
                  <View className="w-7 h-7 bg-white items-center justify-center rounded-full mx-2 "><Text className="text-[16px]">1</Text></View>
                  <Text className="text-[16px] text-white">Shipping</Text>
              </View>
              <View className="flex-row justify-center items-center w-[33%]">
                  <View className="w-7 h-7 bg-white items-center justify-center rounded-full mx-2 "><Text className="text-[16px]">2</Text></View>
                  <Text className="text-[16px] text-white">Payment</Text>
              </View>
              <View className="flex-row justify-center items-center w-[33%]">
                  <View className="w-7 h-7 bg-white items-center justify-center rounded-full mx-2 "><Text className="text-[16px]">3</Text></View>
                  <Text className="text-[16px] text-white">Review</Text>
              </View>
              </View>
              <ScrollView className="p-2" contentContainerStyle={{ alignItems: 'center', flex: 1 }}>
                  <Text className="text-[24px] text-white mb-4 font-bold">Enter your shipping address</Text>
                  <TextInput
                      className="border-b border-[#ffa1ff] w-[90vw] text-[#fff] text-[18px] p-2 my-2"
                      placeholder="Full name..."
                      placeholderTextColor="#fff"
                      value={state}
                      onChangeText={setState}
                  />
                  <TextInput
                      className="border-b border-[#ffa1ff] w-[90vw] text-[#fff] text-[18px] p-2 my-2"
                      placeholder="State..."
                      placeholderTextColor="#fff"
                      value={state}
                      onChangeText={setState}
                  />
                  <TextInput
                      className="border-b border-[#ffa1ff] w-[90vw] text-[#fff] text-[18px] p-2 my-2"
                      placeholder="City..."
                      placeholderTextColor="#fff"
                      value={state}
                      onChangeText={setState}
                  />
                  <TextInput
                      className="border-b border-[#ffa1ff] w-[90vw] text-[#fff] text-[18px] p-2 my-2"
                      placeholder="Postal code..."
                      placeholderTextColor="#fff"
                      value={state}
                      onChangeText={setState}
                  />
                  <TextInput
                      className="border-b border-[#ffa1ff] w-[90vw] text-[#fff] text-[18px] p-2 my-2"
                      placeholder="Street address..."
                      placeholderTextColor="#fff"
                      value={state}
                      onChangeText={setState}
                  />
                  <Text className="text-white text-[22px] mt-4 mb-3">Chose a shipping method</Text>
                  {shippingMethods.map((item) => (
                      <ShippingMethod key={item.id} item={item} />
                  ))}
                  <TouchableOpacity onPress={() => setPage(2)} className="w-[90vw] h-[50px] bg-[#ffa1ff] justify-center items-center mt-4">
                      <Text className="text-white text-[20px]">Confirm and Countinue</Text>
                  </TouchableOpacity>
              </ScrollView>
              
          </View>
        )
    }
    else if(page === 2){
        return(
            <View className="flex-1 bg-[#212121]">
                <View className="flex-row justify-around items-center bg-[#262626] h-[8vh]">
                  <View className="flex-row justify-center items-center w-[33%]">
                  <View className="w-7 h-7 bg-white items-center justify-center rounded-full mx-2 ">
                  <AntDesign name="checkcircle" size={27} color="#ff6efa"/>
                </View>
                  <Text className="text-[16px] text-white">Shipping</Text>
              </View>
              <View className="flex-row justify-center items-center w-[33%]">
                  <View className="w-7 h-7 bg-white items-center justify-center rounded-full mx-2 "><Text className="text-[16px]">2</Text></View>
                  <Text className="text-[16px] text-white">Payment</Text>
              </View>
              <View className="flex-row justify-center items-center w-[33%]">
                  <View className="w-7 h-7 bg-white items-center justify-center rounded-full mx-2 "><Text className="text-[16px]">3</Text></View>
                  <Text className="text-[16px] text-white">Review</Text>
              </View>
              </View>
              <ScrollView className="p-2" contentContainerStyle={{ alignItems: 'center', flex: 1 }}>
                <Text className="text-white text-[22px] font-bold mb-2">Choose payment method</Text>
                <Text className="text-white mb-4">You will not be charged until you review this order on the next page</Text>
              </ScrollView>
            </View>
            
        )
    }
}

export default Checkout