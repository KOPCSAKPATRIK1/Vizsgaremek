import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const CartItem = ({item}) => {

    useLayoutEffect(() => {
        getProduct();
    }, [product])

    const [product, setProduct] = useState({});
    const getProduct = async () => {
        const response = await fetch('http://192.168.0.184:3000/shoes/' + item.productId
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        let json = await response.json();
        setProduct(json);
    }

    const deleteCartItem = (id) => {
        fetch('http://192.168.0.184:3000/cart/delete/' + id
        ,{
            method: 'DELETE'
        })
    }

  return (
    <View className="w-full my-1 border-2 border-solid border-[#ffa1ff] rounded-[10px]">
        <View className="flex-row">
            <View className="w-[40vw] h-[110px] bg-white border-solid border-r-2 border-[#ffa1ff] rounded-tl-[8px] rounded-bl-[8px]">
                <Image className="w-[40vw] h-full absolute" source={{uri: product.imageUrl1}} />
            </View>
            <View className="w-[60vw] ml-1">
                <View className="flex-row mt-1">
                    <View className="w-[80%]">
                        <Text className="text-white text-[18px] font-bold">{product.name}</Text>
                    </View>
                    <TouchableOpacity onPress={() => deleteCartItem(item.id)}><AntDesign name="delete" size={30} color="#ff6efa"/></TouchableOpacity>
                </View>
                <Text className="text-white">{product.price} Ft</Text>
                <Text className="text-white">Size: {item.sizeId}</Text>
                <Text className="text-white">Qty: {item.quantity}</Text>
            </View>
        </View>
    </View>
  )
}

export default CartItem