import { View, Text, TouchableOpacity, Button, TextInput} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox';
import * as Animatable from 'react-native-animatable';

const Register = () => {

    const navigation = useNavigation();

    useLayoutEffect(()=> {
        navigation.setOptions({
        headerShown: false,
        })
    }, )

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');


    const register = async (username, email, password) => {
        if(canRegister){
            await fetch('http://10.4.118.6:3000/register', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                /*mode: 'cors', */
                body: JSON.stringify(
                    {
                        "username": username,
                        "email": email,
                        "password": password
                    }
                )
                })
                console.log(username, email, password);
        }
    }

    let [emailErrorMessage, setEmailErrorMessage] = useState("");
    let canRegister = false;

    const validateEmail = async (email) => {
        setEmailErrorMessage("");
        var re = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if(!re.test(email)){
            setEmailErrorMessage("Wrong email format")
        }

        const response = await fetch('http://10.4.118.6:3000/users/email/' + email
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        if (response.ok) {
            setEmailErrorMessage("This email is already used")
        }
        const emailAddress = await response.json()
        console.log(emailAddress);
      };

      let [usernameErrorMessage, setUsernameErrorMessage] = useState("");

      const validateUsername = (username) => {
        if(username.length < 6){

        }
      }

  return (
    <View className="bg-[#212121] flex-1">
        <View className="mt-[12vh] justify-center items-center">
            <Text className="text-[30px] font-bold text-[#ffa1ff]">Create a New Account</Text> 
        </View>
        <View className="mt-[8vh] justify-center items-center space-y-10">
            <View>
                <TextInput 
                className="border-b border-[#ffa1ff] w-[80vw] text-[#fff] text-[18px] p-2"
                placeholder="Username..."
                placeholderTextColor="#fff"
                onChangeText={newUsername => setUsername(newUsername)}
                defaultValue={username}
                />
                <Text className="text-red-600">{usernameErrorMessage}</Text>
            </View>
            <View>
                <TextInput 
                className="border-b border-[#ffa1ff] w-[80vw] text-[#fff] text-[18px] p-2"
                placeholder="Email address..."
                placeholderTextColor="#fff"
                onChangeText={newEmail => setEmail(newEmail)}
                defaultValue={email}
                onBlur={()=> validateEmail(email)}
                />
                <Text className="text-red-600">{emailErrorMessage}</Text>
            </View>
            <View>
                <TextInput 
                className="border-b border-[#ffa1ff] w-[80vw] text-[#fff] text-[18px] p-2"
                placeholder="Password..."
                placeholderTextColor="#fff"
                secureTextEntry={true}
                onChangeText={newPassword => setPassword(newPassword)}
                defaultValue={password}
                />
                <Text className="text-red-600">Hibás jelszó</Text>
            </View>
            <View>
                <TextInput 
                className="border-b border-[#ffa1ff] w-[80vw] text-[#fff] text-[18px] p-2"
                placeholder="Password again..."
                placeholderTextColor="#fff"
                secureTextEntry={true}
                onChangeText={newRePassword => setRePassword(newRePassword)}
                defaultValue={rePassword}
                />
                <Text className="text-red-600">Hibás jelszó</Text>
            </View>
            <View className="flex-row space-x-2">
                {/*<CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />*/}
                <View className="w-5 h-5 bg-white border-[#ffa1ff] border-[2px]"></View>
                <Text className="text-white">Agree with terms and conditions</Text>
            </View>
            <View>
            <TouchableOpacity 
            className="items-center justify-center mt-[5vh]"
            onPress={() => register(username, email, password)}>
                <View className="bg-[#ffa1ff] w-[70vw] h-[6vh] rounded-[20px] items-center justify-center">
                    <Text className="text-[20px] text-white tracking-wider">Register</Text>
                </View>
            </TouchableOpacity>
            <View className="absolute w-[200%] h-[100vh] top-[10vh] left-[-65vw] z-[-10] bg-[#ffa1ff] mt-[2vh] rounded-full">
            <TouchableOpacity 
            className="mt-[8vh] justify-center items-center"
            onPress={()=> navigation.navigate("SignIn")}>
                <Text className="text-white underline">Already have an account? Sign in</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    </View>
  )
}

export default Register