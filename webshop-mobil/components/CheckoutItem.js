import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
const ip = require('../assets/ipAddress.js').ipAddress;

const CheckoutItem = ({item}) => {
    
    useLayoutEffect(()=>{
        getProduct();
    }, [])

    const [product, setProduct] = useState({});
    const getProduct = async () => {
        const response = await fetch('http://'+ ip + ':3000/shoes/' + item.productId
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        setProduct(await response.json());
    }
  
    return (
        <View className="w-[40vw] h-[100px] bg-white rounded-[10px] mx-2 border-2 border-solid border-[#ffa1ff] mt-5">
            <Image source={{uri: product.imageUrl1}} className="w-[40vw] h-[100px] rounded-[10px]"/>
        </View>
  )
}

export default CheckoutItem