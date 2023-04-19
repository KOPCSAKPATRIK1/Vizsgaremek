import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import ShippingMethod from '../components/ShippingMethod';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RadioButton, TextInput as Input } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckoutItem from '../components/CheckoutItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const creditCard = require('../assets/creditcard.jpg');
const paypal = require('../assets/paypal.png');
const postPayment = require('../assets/postpayment.jpg');

const Checkout = () => {

    const navigation = useNavigation();
    const[user, setUser] = useState();
    const [data, setData] = useState({});
    const [fullName, setFullName] = useState("Valentin Levente");
    const [fullNameBad, setFullNameBad] = useState(false)
    const [county, setCounty] = useState("Anyád");
    const [countyBad, setCountyBad] = useState(false);
    const [city, setCity] = useState("Anyád");
    const [cityBad, setCityBad] = useState(false);
    const [postalCode, setPostalCode] = useState("1223");
    const [postalCodeBad, setPostalCodeBad] = useState(false);
    const [streetAddress, setStreetAddress] = useState("anyád 12");
    const [streetAddressBad, setStreetAddressBad] = useState(false);
    const [shippingMethod, setShippingMethod] = useState("")
    const [shippingMethodObj, setShippingMethodObj] = useState([]);
    const [fullNameCr, setFullNameCr] = useState("");
    const [fullNameCrBad, setFullNameCrBad] = useState(false);
    const [cardNumber, setCardNumber] = useState("");
    const [cardNumberBad, setCardNumberBad] = useState(false);
    const [expirationDate, setExpirationDate] = useState("");
    const [expirationDateBad, setExpirationDateBad] = useState(false);
    const [securityCode, setSecurityCode] = useState("");
    const [securityCodeBad, setSecurityCodeBad] = useState(false);
    const [paypalEmail, setPaypalEmail] = useState("");
    const [paypalEmailBad, setPaypalEmailBad] = useState(false);
    const [paypalPassword, setPaypalPassword] = useState("");
    const [paypalPasswordBad, setPaypalPasswordBad] = useState(false);
    const [page, setPage] = useState(1);
    const [checked, setChecked] = useState('first');
    const [paymentMethod, setPaymentMethod] = useState({});
    const [total, setTotal] = useState(0);
    const [addressObj, setAddressObj] = useState({});
    const [orderObj, setOrderObj] = useState({});

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "Checkout",
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "#212121"
            },
        });
        getUserData()
        getData();
        getTotal();
    }, [])

    const getUserData = async () => {
        const res = await AsyncStorage.getItem('user');
        setUser(JSON.parse(res));
    }

    const validateFullName = ()=> {
        if(fullName.length < 1 || !fullName.includes(" ")){
            setFullNameBad(true);
        } else{
            setFullNameBad(false)
        }
    }

    const validateCounty = ()=> {
        if(county.length < 1){
            setCountyBad(true);
        } else {
            setCountyBad(false)
        }
    }

    const validateCity = ()=> {
        if(city.length < 1){
            setCityBad(true);
        } else {
            setCityBad(false);
        }
    }

    const validatePostalCode = ()=> {
        if(postalCode.length < 4){
            setPostalCodeBad(true);
        } else {
            setPostalCodeBad(false);
        }
    }
    const validateStreetAddress = ()=> {
        if(! /^(?=.*\d).{2,}$/.test(streetAddress)){
            setStreetAddressBad(true)
        } else {
            setStreetAddressBad(false);
        }
    }

    

    const addressDone = () => {
        validateFullName();
        validateCounty();
        validateCity();
        validatePostalCode();
        validateStreetAddress();
        if(fullNameBad == false && countyBad == false && cityBad == false && postalCodeBad == false && streetAddressBad == false && shippingMethod != ""){
            if(shippingMethod == "normal"){
                getShippingMethods(1);
            }else {
                getShippingMethods(2);
            }
            setPage(2);
        }
    }
    const validateFullNameCr = ()=> {
        if(fullNameCr.length < 1 || !fullNameCr.includes(" ")){
            setFullNameCrBad(true);
            //name(true);
        } else{
            setFullNameCrBad(false);
            //name(false);
        }
      }
  
      const validateCardNumber = ()=> {
        if(cardNumber.length < 16){
          setCardNumberBad(true);
        }else{
          setCardNumberBad(false);
        }
      }
  
      const editCardNumber = (text)=> {
        let formattedInput = text.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ');
        formattedInput = formattedInput.trim();
        setCardNumber(formattedInput);
        //console.log(formattedInput);
        //console.log(cardNumber);
      }
  
      const validateExpirationDate = ()=> {
        if(expirationDate.length < 4){
          setExpirationDateBad(true)
        } else{ 
          setExpirationDateBad(false);
        }
      }
  
      const editExpirationDate = ()=> {
        
      }
  
      const validateSecurityCode = ()=> {
        if(securityCode.length < 3){
          setSecurityCodeBad(true)
        } else {
          setSecurityCodeBad(false);
        }
      }

      const validatePaypalEmail = () => {
        if(! /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(paypalEmail)){
            setPaypalEmailBad(true);
        } else {
            setPaypalEmailBad(false);
        }
      }

      const validatePaypalPassword = () => {
        if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/.test(paypalPassword)){
            setPaypalPasswordBad(true);
        }else {
            setPaypalPasswordBad(false);
        }
      }

      const paymentDone = () => {
        if(checked == "first"){
            validateFullNameCr();
            validateCardNumber();
            validateExpirationDate();
            validateSecurityCode();
            if(!fullNameCrBad && !cardNumberBad && !expirationDateBad && !securityCodeBad){
                getPaymentMethod(2);
                setPage(3);
            }
        }else if(checked == "second"){
            validatePaypalEmail();
            validatePaypalPassword();
            if(!paypalEmailBad && !paypalPasswordBad){
                getPaymentMethod(1);
                setPage(3);
            }
        }
        else{
            getPaymentMethod(3);
            setPage(3);
        }
      }



      const submitOrder = ()=> {
        postAddress();
        postOrder();
        data.forEach((item) => {
            postOrderItem(item);
        })
        deleteCart();
        setPage(4);
      }

      const getPaymentMethod = async (id) => {
        const response = await fetch('http://192.168.0.184:3000/paymentmethod/' + id
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        setPaymentMethod(await response.json());
        console.log(paymentMethod);
      }

    const getData = async () => {
        const response = await fetch('http://192.168.0.184:3000/cart/' + user.id
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        setData(await response.json());
    }

    const getShippingMethods = async (id)=> {
        const response = await fetch('http://192.168.0.184:3000/shippingmethod/' + id
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        setShippingMethodObj(await response.json());
    }

    const getTotal = async () => {
        const response = await fetch('http://192.168.0.184:3000/cart/total/' + user.id
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        setTotal(await response.json());
    }

    const postAddress = async () => {
        await fetch('http://192.168.0.184:3000/address', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            /*mode: 'cors', */
            body: JSON.stringify(
                {
                    "state": county,
                    "city": city,
                    "postalCode": postalCode,
                    "streetAddress": streetAddress 
                }
            )
        })
        .then(response => response.json())
        .then(data => {
          // The data variable contains the returned object
          setAddressObj(data);
        })
    }

    const postOrder = async () => {
        await fetch('http://192.168.0.184:3000/order', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            /*mode: 'cors', */
            body: JSON.stringify(
                {
                    "userId": user.id,
                    "addressId": addressObj.id,
                    "shippingMethod": shippingMethodObj.id,
                    "paymentMethod": paymentMethod.id   
                }
            )
        })
        .then(response => response.json())
        .then(data => {
          // The data variable contains the returned object
          setOrderObj(data);
        })
    }

    const postOrderItem = async (cartItem) => {
        await fetch('http://192.168.0.184:3000/orderitem', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            /*mode: 'cors', */
            body: JSON.stringify(
                {
                    "quantity": cartItem.quantity,
                    "productId": cartItem.productId,
                    "userId": cartItem.userId,
                    "sizeId": cartItem.sizeId,
                    "orderId": orderObj.id
                }
            )
        })
    }

    const deleteCart = ()=> {
        fetch('http://192.168.0.184:3000/cart/delete/user/' + user.id
        ,{
            method: 'DELETE'
        })
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
              <ScrollView className="p-2" contentContainerStyle={{ alignItems: 'center' }}>
                  <Text className="text-[24px] text-white mb-4 font-bold">Enter your shipping address</Text>
                  <Input 
                      className="bg-[#212121] my-3 w-[95%]"
                      label="Full name"
                      mode="flat"
                      activeUnderlineColor="#ffa1ff"
                      underlineColor="#ffa1ff"
                      textColor="white"
                      placeholder="Luke Skywalker"
                      error={fullNameBad}
                      onChangeText={newFullName => setFullName(newFullName)}
                      defaultValue={fullName}
                      onBlur={()=> validateFullName()}
                      
                  />
                  <Input 
                      className="bg-[#212121] my-3 w-[95%]"
                      label="State"
                      mode="flat"
                      activeUnderlineColor="#ffa1ff"
                      underlineColor="#ffa1ff"
                      textColor="white"
                      placeholder="Nográd megye"
                      error={countyBad}
                      onChangeText={newCounty => setCounty(newCounty)}
                      defaultValue={county}
                      onBlur={()=> validateCounty()}
                  />
                  <Input 
                      className="bg-[#212121] my-3 w-[95%]"
                      label="City"
                      mode="flat"
                      activeUnderlineColor="#ffa1ff"
                      underlineColor="#ffa1ff"
                      textColor="white"
                      placeholder="Salgótarján"
                      error={cityBad}
                      onChangeText={newCity => setCity(newCity)}
                      defaultValue={city}
                      onBlur={()=> validateCity()}
                  />
                  <Input 
                      className="bg-[#212121] my-3 w-[95%]"
                      label="Postal code"
                      mode="flat"
                      activeUnderlineColor="#ffa1ff"
                      underlineColor="#ffa1ff"
                      textColor="white"
                      placeholder="1234"
                      error={postalCodeBad}
                      onChangeText={newPostalCode => setPostalCode(newPostalCode)}
                      defaultValue={postalCode}
                      onBlur={()=> validatePostalCode()}
                      maxLength={4}
                      keyboardType="numeric"
                  />
                  <Input 
                      className="bg-[#212121] my-3 w-[95%]"
                      label="Street address"
                      mode="flat"
                      activeUnderlineColor="#ffa1ff"
                      underlineColor="#ffa1ff"
                      textColor="white"
                      placeholder="Arany János utca 21."
                      error={streetAddressBad}
                      onChangeText={newStreet => setStreetAddress(newStreet)}
                      defaultValue={streetAddress}
                      onBlur={()=> validateStreetAddress()}
                  />
                  <Text className="text-white text-[22px] mt-4 mb-3">Chose a shipping method</Text>
                  <TouchableOpacity onPress={()=> setShippingMethod("normal")} activeOpacity={1} className=" border-b-2 border-[#ffa1ff] border-solid mb-3">
                    <View className="flex-row w-[90vw] items-center">
                        <Text className="text-white text-[16px] font-bold my-1">3000 Ft</Text>
                        <Text className="text-white text-[16px] mx-7 my-1">Normál</Text>
                        <RadioButton
                            value="normal"
                            status={ shippingMethod === 'normal' ? 'checked' : 'unchecked' }
                            onPress={() => setShippingMethod('normal')}
                            color="#ffa1ff"
                        />
                    </View>
                    <Text className="text-white text-[16px] my-1 ">Delivery in 5 business days</Text>
                    <View className="flex-row items-center">
                        <AntDesign name="infocirlceo" size={15} color="#fff"/>
                        <Text className="text-white text-[16px] mx-2 my-1">No delivery on public holidays.</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> setShippingMethod("express")} activeOpacity={1} className=" border-b-2 border-[#ffa1ff] border-solid mb-3">
                    <View className="flex-row w-[90vw] items-center">
                        <Text className="text-white text-[16px] font-bold my-1">8000 Ft</Text>
                        <Text className="text-white text-[16px] mx-7 my-1">Express</Text>
                        <RadioButton
                            value="express"
                            status={ shippingMethod === 'express' ? 'checked' : 'unchecked' }
                            onPress={() => setShippingMethod('express')}
                            color="#ffa1ff"
                        />
                    </View>
                    <Text className="text-white text-[16px] my-1 ">Delivery in 1 business days</Text>
                    <View className="flex-row items-center">
                        <AntDesign name="infocirlceo" size={15} color="#fff"/>
                        <Text className="text-white text-[16px] mx-2 my-1">No delivery on public holidays.</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addressDone()} className="w-[90vw] h-[50px] bg-[#ffa1ff] justify-center items-center mt-4 rounded-[5px]">
                      <Text className="text-white text-[20px]">Confirm and Countinue</Text>
                  </TouchableOpacity>
                  <View className="h-[3vh]"></View>
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
                <TouchableOpacity className="flex-row w-[90%] items-center my-1" onPress={() => setChecked('first')} activeOpacity={1}>
                    <View className="w-[15%]">
                        <RadioButton
                            value="first"
                            status={ checked === 'first' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('first')}
                            color="#ffa1ff"
                        />
                    </View>
                    <View className="w-[45%]">
                        <Text className="text-white text-[16px]">Credit card</Text>
                    </View>
                    <View className="w-[40%] justify-end items-end">
                        <Image source={creditCard} className="w-[20vw] h-[5vh]" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row w-[90%] items-center my-1"  onPress={() => setChecked('second')} activeOpacity={1}>
                    <View className="w-[15%]">
                        <RadioButton
                            value="second"
                            status={ checked === 'second' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('second')}
                            color="#ffa1ff"
                        />
                    </View>
                    <View className="w-[45%]">
                        <Text className="text-white text-[16px]">Paypal</Text>
                    </View>
                    <View className="w-[40%] justify-end items-end">
                        <Image source={paypal} className="w-[20vw] h-[5vh]" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row w-[90%] items-center my-1"  onPress={() => setChecked('third')} activeOpacity={1}>
                    <View className="w-[15%]">
                        <RadioButton
                            value="third"
                            status={ checked === 'third' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('third')}
                            color="#ffa1ff"
                        />
                    </View>
                    <View className="w-[45%]">
                        <Text className="text-white text-[16px]">Paying upon arrival</Text>
                    </View>
                    <View className="w-[40%] justify-end items-end">
                        <Image source={postPayment} className="w-[20vw] h-[5vh]" />
                    </View>
                </TouchableOpacity>
                {checked === "first" ? (
                    <View className="w-full mt-5">
                    <Text className="text-white text-[22px]">Credit card</Text>
                    <Input 
                        className="bg-[#212121] my-3"
                        label="Full name"
                        mode="flat"
                        activeUnderlineColor="#ffa1ff"
                        underlineColor="#ffa1ff"
                        textColor="white"
                        placeholder="Name on card"
                        error={fullNameCrBad}
                        onChangeText={newFullName => setFullNameCr(newFullName)}
                        defaultValue={fullNameCr}
                        onBlur={()=> validateFullNameCr()}
                    />
                    <Input 
                        className="bg-[#212121] my-3"
                        label="Card number"
                        mode="flat"
                        activeUnderlineColor="#ffa1ff"
                        underlineColor="#ffa1ff"
                        textColor="white"
                        placeholder="**** **** **** ****"
                        error={cardNumberBad}
                        onChangeText={newCardNumber => setCardNumber(newCardNumber)}
                        value={cardNumber}
                        onBlur={()=> validateCardNumber()}
                        onChange={()=> editCardNumber(cardNumber)}
                        maxLength={16}
                        keyboardType="numeric"
                    />
                  <View className="flex-row w-full">
                    <View className="w-[50%] items-start justify-start">
                        <Input 
                            className="bg-[#212121] my-3 w-[96%]"
                            label="Expiration date"
                            mode="flat"
                            activeUnderlineColor="#ffa1ff"
                            underlineColor="#ffa1ff"
                            textColor="white"
                            placeholder="MM/YY"
                            error={expirationDateBad}
                            onChangeText={newExpDate => setExpirationDate(newExpDate)}
                            value={expirationDate}
                            onBlur={()=> validateExpirationDate()}
                            onChange={()=> editExpirationDate(cardNumber)}
                            maxLength={4}
                            keyboardType="numeric"
                        />
            
                    </View>
                    <View className="w-[50%] items-end justify-end">
                        <Input 
                            className="bg-[#212121] my-3 w-[96%]"
                            label="Security code"
                            mode="flat"
                            activeUnderlineColor="#ffa1ff"
                            underlineColor="#ffa1ff"
                            textColor="white"
                            placeholder="CVC"
                            error={securityCodeBad}
                            onChangeText={newCvc => setSecurityCode(newCvc)}
                            value={securityCode}
                            onBlur={()=> validateSecurityCode()}
                            maxLength={3}
                            keyboardType="numeric"
                        />
                    </View>
                  </View>
                </View>
                ) : checked === "second" ? (
                    <View className="w-full mt-5">
                        <Text className="text-white text-[22px]">Paypal</Text>
                        <Input 
                                className="bg-[#212121] my-3"
                                label="Email"
                                mode="flat"
                                activeUnderlineColor="#ffa1ff"
                                underlineColor="#ffa1ff"
                                textColor="white"
                                placeholder="example@gmail.com"
                                error={paypalEmailBad}
                                onChangeText={newEmail => setPaypalEmail(newEmail)}
                                value={paypalEmail}
                                onBlur={()=> validatePaypalEmail()}
                                keyboardType="email-address"
                        />
                        <Input 
                                className="bg-[#212121] my-3"
                                label="Password"
                                mode="flat"
                                activeUnderlineColor="#ffa1ff"
                                underlineColor="#ffa1ff"
                                textColor="white"
                                placeholder="*****"
                                error={paypalPasswordBad}
                                onChangeText={newPassword => setPaypalPassword(newPassword)}
                                value={paypalPassword}
                                onBlur={()=> validatePaypalPassword()}
                                secureTextEntry={true}
                        />
                    </View>
                ) : (
                    <View className="w-full mt-5">
                        <Text className="text-white text-[22px]">Paying upon arrival</Text>
                    </View>
                )}
                <TouchableOpacity onPress={() => paymentDone()} className="w-[90vw] h-[50px] bg-[#ffa1ff] justify-center items-center mt-8 rounded-[5px]">
                    <Text className="text-white text-[20px]">Confirm and Countinue</Text>
                </TouchableOpacity>
                
              </ScrollView>
            </View>
            
        )
    }else if(page === 3){
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
                  <View className="w-7 h-7 bg-white items-center justify-center rounded-full mx-2 ">
                    <AntDesign name="checkcircle" size={27} color="#ff6efa"/>
                </View>
                  <Text className="text-[16px] text-white">Payment</Text>
              </View>
              <View className="flex-row justify-center items-center w-[33%]">
                  <View className="w-7 h-7 bg-white items-center justify-center rounded-full mx-2 "><Text className="text-[16px]">3</Text></View>
                  <Text className="text-[16px] text-white">Review</Text>
              </View>
              </View>
              <ScrollView className="p-3">
                <View className="flex-1">
                    <View>
                        <Text className="text-white text-[22px]">My Cart</Text>
                        <ScrollView horizontal>
                            {data.map((item) => (
                                    <CheckoutItem item={item}/>
                            ))}
                            <TouchableOpacity onPress={()=> navigation.navigate("Cart")}><Text className="text-[#ffa1ff] text-[19px] underline">Edit</Text></TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View className="w-[100%] mt-6 border-solid border-2 border-[#121212] p-6">
                        <View className="flex-row justify-between">
                            <Text className="text-white text-[19px]">Payment</Text>
                            <TouchableOpacity onPress={()=> setPage(2)}><Text className="text-[#ffa1ff] text-[19px] underline">Edit</Text></TouchableOpacity>
                        </View>
                        {paymentMethod.id === 2 ? (
                            <View className="flex-row justify-between mt-8">
                                <View className="flex-row items-center">  
                                    <Image source={creditCard} className="w-12 h-7"/>
                                    <Text className="text-white text-[16px] ml-2">**** {cardNumber.slice(-4)}</Text>
                                </View>
                                <Text className="text-white text-[16px]">{expirationDate.slice(0,2)}/{expirationDate.slice(-2)}</Text>
                            </View>
                        ): paymentMethod.id === 1 ? (
                            <View className="flex-row justify-between mt-8">
                                <View className="flex-row items-center">  
                                    <Image source={paypal} className="w-12 h-7"/>
                                </View>
                                <Text className="text-white text-[16px]">{paypalEmail}</Text>
                            </View>
                        ):(
                            <View><Text className="text-white text-[16px] mt-6">Utólagos fizetés</Text></View>
                        )}
                    </View>
                    <View className="w-[100%] mt-6 border-solid border-2 border-[#121212] p-6">
                        <View className="flex-row justify-between">
                            <Text className="text-white text-[19px]">Shipping address</Text>
                            <TouchableOpacity onPress={()=> setPage(1)}><Text className="text-[#ffa1ff] text-[19px] underline">Edit</Text></TouchableOpacity>
                        </View>
                        <View className="flex-row justify-between mt-8">
                            <Text className="text-white text-[16px]">Full name</Text>
                            <Text className="text-white text-[16px]">{fullName}</Text>
                        </View>
                        <View className="flex-row justify-between mt-8">
                            <Text className="text-white text-[16px]">Address</Text>
                            <Text className="text-white text-[16px]">{postalCode}, {streetAddress}</Text>
                        </View>
                    </View>
                    <View className="h-[40vh]"></View>
                </View>
              </ScrollView>
              <View className="absolute left-0 bottom-0 w-full bg-[#212121] border-t-2 border-solid border-[#121212] p-6 ">
                <Text className="text-white text-[19px]">Order summary</Text>
                <View className="flex-row justify-between mt-6">
                    <Text className="text-white text-[16px]">Subtotal:</Text>
                    <Text className="text-white text-[16px]">{total} Ft</Text>
                </View>
                <View className="flex-row justify-between mt-6">
                    <Text className="text-white text-[16px]">Delivery:</Text>
                    <Text className="text-white text-[16px]">{shippingMethodObj.price} Ft</Text>
                </View>
                <View className="flex-row justify-between mt-6">
                    <Text className="text-white text-[16px]">Subtotal:</Text>
                    <Text className="text-white text-[16px]">{total + shippingMethodObj.price} Ft</Text>
                </View>
                <View className="w-full items-center">
                    <TouchableOpacity onPress={()=> submitOrder()} className="w-[90vw] h-[50px] bg-[#ffa1ff] mt-6 items-center justify-center rounded-[5px]">
                        <Text className="text-white text-[20px]">Submit order</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
        )
    }else {
        return(
            <View className="flex-1 bg-[#212121] items-center justify-center">
                <View className="flex-row justify-around items-center bg-[#262626] h-[8vh]">
                  <View className="flex-row justify-center items-center w-[33%]">
                  <View className="w-7 h-7 bg-white items-center justify-center rounded-full mx-2 ">
                  <AntDesign name="checkcircle" size={27} color="#ff6efa"/>
                </View>
                  <Text className="text-[16px] text-white">Shipping</Text>
              </View>
              <View className="flex-row justify-center items-center w-[33%]">
                  <View className="w-7 h-7 bg-white items-center justify-center rounded-full mx-2 ">
                    <AntDesign name="checkcircle" size={27} color="#ff6efa"/>
                </View>
                  <Text className="text-[16px] text-white">Payment</Text>
              </View>
              <View className="flex-row justify-center items-center w-[33%]">
                  <View className="w-7 h-7 bg-white items-center justify-center rounded-full mx-2 ">
                  <AntDesign name="checkcircle" size={27} color="#ff6efa"/>
                </View>
                  <Text className="text-[16px] text-white">Review</Text>
              </View>
              </View>
                <View className="flex-1 items-center justify-center">
                    <MaterialCommunityIcons name="truck-check-outline" size={70} color="#ffa1ff"/>
                    <Text className="text-white text-[28px]">We are on it!</Text>
                    <View className="w-[80%] my-4">
                        <Text className="text-white text-[18px] text-center">Your payment has been recieved, nad you'll get notifications for your order's state.</Text>
                    </View>
                    <TouchableOpacity className="w-[90vw] h-[50px] bg-[#ffa1ff] items-center justify-center rounded-[5px]" onPress={()=> navigation.navigate("Store")}>
                        <Text className="text-white text-[20px]">Go back to home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Checkout