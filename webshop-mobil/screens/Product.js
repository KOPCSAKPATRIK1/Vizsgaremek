import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Navbar from '../components/Navbar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SelectList from 'react-native-select-dropdown';

const Product = ({route}) => {

    const navigation = useNavigation();
    const id = route.params.id;
    const[selected, setSelected] = useState("");
    const sizes = ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"];
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(()=> {
        getData();
        
        

    }, [])

    const [data, setData] = useState({});
    const getData = async () => {
        const response = await fetch('http://192.168.0.184:3000/shoes/' + id
            ,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            })
        let json = await response.json();
        setData(json);
        setImageUrl(json.imageUrl1);
        navigation.setOptions({
            title: json.name,
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "#212121"
              },
        });
    }

    const setImage = (num) => {
        if(num == 1){
            setImageUrl(data.imageUrl1);
        }
        else if(num == 2){
            setImageUrl(data.imageUrl2);
        }
        else if(num == 3){
            setImageUrl(data.imageUrl3);
        }
        else if(num == 4){
            setImageUrl(data.imageUrl4);
        }
    }


  return (
    <View className="flex-1 bg-[#212121]">
        
        <ScrollView>
            <View className="bg-white w-full h-[45vh] border-solid border-b-2 border-[#ffa1ff]">
                <Image source={{uri: imageUrl}} className="w-full h-[30vh]"/>
                <View className="absolute w-[55px] h-[55px] rounded-full bg-[#212121] top-[3vh] left-[5vw] items-center justify-center border-solid border-[2px] border-[#ff6efa]">
                    <TouchableOpacity>
                        <AntDesign name="hearto" size={37} color="#ff6efa"/>
                    </TouchableOpacity>
                </View>
                <View className="w-full h-[15vh] flex-row justify-around items-center">
                    <TouchableOpacity 
                        className="border-solid border-[1px] border-[#ffa1ff] rounded-[5px]" 
                        onPress={() => setImage(1)}
                    >
                        <Image source={{uri: data.imageUrl1}} className="w-[24vw] h-[8vh]" />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className="border-solid border-[1px] border-[#ffa1ff] rounded-[5px]"
                        onPress={() => setImage(2)}    
                    >
                        <Image source={{uri: data.imageUrl2}} className="w-[24vw] h-[8vh]" />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className="border-solid border-[1px] border-[#ffa1ff] rounded-[5px]"
                        onPress={() => setImage(3)}
                    >
                        <Image source={{uri: data.imageUrl3}} className="w-[24vw] h-[8vh]" />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className="border-solid border-[1px] border-[#ffa1ff] rounded-[5px]"
                        onPress={() => setImage(4)}
                    >
                        <Image source={{uri: data.imageUrl4}} className="w-[24vw] h-[8vh]" />
                    </TouchableOpacity>
                </View>
            </View>
            <Text className="text-white text-[24px] mx-2 mt-4 mb-2">{data.name}</Text>
            <Text className="text-white text-[22px] mx-2 mb-4">{data.price} Ft</Text>
            
            <View className="mx-2">
                <SelectList 
                    data={sizes}
                    setSelected={setSelected}
                    defaultButtonText="Size"
                    buttonTextAfterSelection={selected}
                    buttonStyle={{width: 90, height: 40, borderColor: "#ffa1ff", borderStyle: "solid", borderWidth: 2, borderRadius: 5, backgroundColor: "#212121"}}
                    buttonTextStyle={{color: 'white', fontSize: 20}}
                    dropdownStyle={{borderRadius: 5}}
                    dropdownTextStyle={{color: "white"}}
                />
            </View>
            <Text className="text-white text-[16px] mx-2 my-4">{data.desc}</Text>
            <View className="flex-1 items-center">
                <TouchableOpacity className="w-[180px] h-[50px] border-solid border-2 border-[#ffa1ff] rounded-[10px] items-center flex-row justify-around">
                    <Text className="text-white text-[20px]">Add to Cart</Text>
                    <IonIcons name="md-add-circle-outline" size={30} color="#ff6efa"/>
                </TouchableOpacity>
            </View>
            <View className="h-20"></View>
        </ScrollView>
        

        <View className="absolute bottom-0 left-0 border-t-[1px] border-t-[#383838] bg-[#212121]">
            <Navbar />
        </View>
    </View>
  )
}

export default Product