import { View, Text, TouchableOpacity, Button, TextInput, Alert, ToastAndroid} from 'react-native'
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

    let [emailErrorMessage, setEmailErrorMessage] = useState("");

    const validateEmail = async (email) => {
        setEmailErrorMessage("");
        var re = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if(!re.test(email)){
            setEmailErrorMessage("Wrong email format")
        }

        const response = await fetch('http://192.168.0.184:3000/users/email/' + email
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        const emailAddress = await response.json();
        console.log(emailAddress);
        if(emailAddress.email == email){
            setEmailErrorMessage("Email address already used");
        }

        if(email == ""){
            setEmailErrorMessage("You must enter an email address")
        }

        return (emailErrorMessage == "");
      };

      let [usernameErrorMessage, setUsernameErrorMessage] = useState("");

      const validateUsername = async (username) => {
        setUsernameErrorMessage("")
        if(username.length < 6){
            setUsernameErrorMessage("Username must be over 6 characters");
        }

        const response = await fetch('http://192.168.0.184:3000/users/username/' + username
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        const usernameErrorChecker = await response.json();
        console.log(usernameErrorChecker);
        if(usernameErrorChecker.username == username){
            setUsernameErrorMessage("Username already used");
        }
        return (usernameErrorMessage == "");
      }

      let [passwordErrorMessage, setPasswordErrorMessage] = useState("");

      const validatePassword = (password) => {
        setPasswordErrorMessage("");
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
        if(password.length == 0){
            setPasswordErrorMessage("You must have a password");
        }
        else if(password.length < 8){
            setPasswordErrorMessage("Password must be atleast 8 characters");
        }
        else if(!re.test(password)){
            setPasswordErrorMessage("Password must contain uppercase, lowercase and number");
        }

        return (passwordErrorMessage == "");
      }

      let [rePasswordErrorMessage, setRePasswordErrorMessage] = useState("");

      const validateRePassword = (password, rePassword) => {
        setRePasswordErrorMessage("");
        if(password != rePassword){
            setRePasswordErrorMessage("Two passwords must match");
        }

        return (rePasswordErrorMessage == "");
      }
      
    const register = async (username, email, password,rePassword) => {
        validateEmail(email);
        validateUsername(username);
        validatePassword(password);
        validateRePassword(rePassword);
        if(emailErrorMessage != "" && usernameErrorMessage != "" && passwordErrorMessage != "" && rePasswordErrorMessage != ""){
            await fetch('http://192.168.0.184:3000/register', {
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
                ToastAndroid.show('Registration succesful!', ToastAndroid.SHORT);
                navigation.navigate("SignIn")
        }
    }

  return (
    <View className="bg-[#212121] flex-1">
        <View className="mt-[12vh] justify-center items-center">
            <Text className="text-[30px] font-bold text-[#ffa1ff]">Create a New Account</Text> 
        </View>
        <View className="mt-[8vh] justify-center items-center space-y-8">
            <View>
                <TextInput 
                className="border-b border-[#ffa1ff] w-[80vw] text-[#fff] text-[18px] p-2"
                placeholder="Username..."
                placeholderTextColor="#fff"
                onChangeText={newUsername => setUsername(newUsername)}
                defaultValue={username}
                onBlur={() => validateUsername(username)}
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
                onBlur={() => validatePassword(password)}
                />
                <Text className="text-red-600">{passwordErrorMessage}</Text>
            </View>
            <View>
                <TextInput 
                className="border-b border-[#ffa1ff] w-[80vw] text-[#fff] text-[18px] p-2"
                placeholder="Password again..."
                placeholderTextColor="#fff"
                secureTextEntry={true}
                onChangeText={newRePassword => setRePassword(newRePassword)}
                defaultValue={rePassword}
                onBlur={() => validateRePassword(password, rePassword)}
                />
                <Text className="text-red-600">{rePasswordErrorMessage}</Text>
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
            onPress={() => register(username, email, password, rePassword)}>
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