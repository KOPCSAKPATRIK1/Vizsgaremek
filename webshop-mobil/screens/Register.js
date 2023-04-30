import { View, Text, TouchableOpacity, Button, TextInput, Alert, ToastAndroid} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox';
import * as Animatable from 'react-native-animatable';
import { Checkbox, TextInput as Input } from 'react-native-paper';
const ip = require('../assets/ipAddress.js').ipAddress;

const Register = () => {

    const navigation = useNavigation();

    useLayoutEffect(()=> {
        navigation.setOptions({
        headerShown: false,
        })
    }, )

    const [checked, setChecked] = useState(false);

    const [username, setUsername] = useState('');
    const [usernameBad, setUsernameBad] = useState(false);
    const [email, setEmail] = useState('');
    const [emailBad, setEmailBad] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordBad, setPasswordBad] = useState(false);
    const [rePassword, setRePassword] = useState('');
    const [rePasswordBad, setRePasswordBad] = useState(false);

    let [emailErrorMessage, setEmailErrorMessage] = useState("");

    const validateEmail = async (email) => {
        setEmailErrorMessage("");
        setEmailBad(false);
        var re = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if(!re.test(email)){
            setEmailErrorMessage("Wrong email format")
            setEmailBad(true);
        }

        const response = await fetch('http://' + ip + ':3000/users/email/' + email
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        const emailAddress = await response.json();
        console.log(emailAddress);
        if(emailAddress.email == email){
            setEmailErrorMessage("Email cím már foglalt");
            setEmailBad(true);
        }

        if(email == ""){
            setEmailErrorMessage("Adja meg az email címét!")
            setEmailBad(true);
        }

        return (emailErrorMessage == "");
      };

      let [usernameErrorMessage, setUsernameErrorMessage] = useState("");

      const validateUsername = async (username) => {
        setUsernameErrorMessage("")
        setUsernameBad(false);
        if(username.length < 6){
            setUsernameErrorMessage("A felhasználónév legalább 6 karakter.");
            setUsernameBad(true);
        }

        const response = await fetch('http://' + ip + ':3000/users/username/' + username
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        const usernameErrorChecker = await response.json();
        console.log(usernameErrorChecker);
        if(usernameErrorChecker.username == username){
            setUsernameErrorMessage("Felhasználónév foglalt");
            setUsernameBad(true);
        }
        return (usernameErrorMessage == "");
      }

      let [passwordErrorMessage, setPasswordErrorMessage] = useState("");

      const validatePassword = (password) => {
        setPasswordErrorMessage("");
        setPasswordBad(false);
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
        if(password.length == 0){
            setPasswordErrorMessage("Adjon meg egy jelszót!");
            setPasswordBad(true);
        }
        else if(password.length < 8){
            setPasswordErrorMessage("A jelszó legalább 8 karakter");
            setPasswordBad(true);
        }
        else if(!re.test(password)){
            setPasswordErrorMessage("Tartalmaznia kell nagybetűt, kisbetűt és számot");
            setPasswordBad(true);
        }

        return (passwordErrorMessage == "");
      }

      let [rePasswordErrorMessage, setRePasswordErrorMessage] = useState("");

      const validateRePassword = (password, rePassword) => {
        setRePasswordErrorMessage("");
        setRePasswordBad(false);
        if(password != rePassword){
            setRePasswordErrorMessage("Két jelszó nem egyezik");
            setRePasswordBad(true);
        }

        return (rePasswordErrorMessage == "");
      }

      const postRegister = async () => {
        await fetch('http://' + ip + ':3000/register', {
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
      
    const register = async () => {
        validateEmail(email);
        validateUsername(username);
        validatePassword(password);
        validateRePassword(rePassword);
        if(!emailBad && !usernameBad && !passwordBad && !rePasswordBad && checked){
            postRegister();
        }
    }

  return (
    <View className="bg-[#212121] flex-1">
        <View className="mt-[8vh] justify-center items-center">
            <Text className="text-[30px] font-bold text-[#ffa1ff]">Új Fiók Létrehozása</Text> 
        </View>
        <View className="mt-[8vh] justify-center items-center space-y-8">
            <View>
                <Input 
                      className="bg-[#212121] w-[90vw] text-[18px]"
                      label="Felhasználónév"
                      mode="flat"
                      activeUnderlineColor="#ffa1ff"
                      underlineColor="#ffa1ff"
                      textColor="white"
                      placeholder="felhasználó12"
                      error={usernameBad}
                      onChangeText={newUsername => setUsername(newUsername)}
                      defaultValue={username}
                      onBlur={() => validateUsername(username)}
                      
                  />
                <Text className="text-red-600">{usernameErrorMessage}</Text>
            </View>
            <View>
                <Input 
                      className="bg-[#212121] w-[90vw] text-[18px]"
                      label="Email"
                      mode="flat"
                      activeUnderlineColor="#ffa1ff"
                      underlineColor="#ffa1ff"
                      textColor="white"
                      placeholder="példa@gmail.com"
                      error={emailBad}
                      onChangeText={newEmail => setEmail(newEmail)}
                      defaultValue={email}
                      onBlur={()=> validateEmail(email)}
                      keyboardType="email-address"
                  />
                <Text className="text-red-600">{emailErrorMessage}</Text>
            </View>
            <View>
                <Input 
                    className="bg-[#212121] w-[90vw] text-[18px]"
                    label="Jelszó"
                    mode="flat"
                    activeUnderlineColor="#ffa1ff"
                    underlineColor="#ffa1ff"
                    textColor="white"
                    placeholder="******"
                    error={passwordBad}
                    secureTextEntry={true}
                    onChangeText={newPassword => setPassword(newPassword)}
                    defaultValue={password}
                    onBlur={() => validatePassword(password)}
                  />
                <Text className="text-red-600">{passwordErrorMessage}</Text>
            </View>
            <View>
                <Input 
                    className="bg-[#212121] w-[90vw] text-[18px]"
                    label="Jelszó ujra"
                    mode="flat"
                    activeUnderlineColor="#ffa1ff"
                    underlineColor="#ffa1ff"
                    textColor="white"
                    placeholder="******"
                    error={rePasswordBad}
                    secureTextEntry={true}
                    onChangeText={newRePassword => setRePassword(newRePassword)}
                    defaultValue={rePassword}
                    onBlur={() => validateRePassword(password, rePassword)}
                  />
                <Text className="text-red-600">{rePasswordErrorMessage}</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
            <Checkbox
                className=""
                color='#ffa1ff'
                uncheckedColor='#ffa1ff'
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
            />
                <Text className="text-white">Elfogadom a felhasználói feltételeket</Text>
            </View>
            <View>
            <TouchableOpacity 
            className="items-center justify-center"
            onPress={() => register(username, email, password, rePassword)}>
                <View className="bg-[#ffa1ff] w-[70vw] h-[6vh] rounded-[20px] items-center justify-center">
                    <Text className="text-[20px] text-white tracking-wider">Regisztráció</Text>
                </View>
            </TouchableOpacity>
            <View className="absolute w-[200%] h-[100vh] top-[6vh] left-[-65vw] z-[-10] bg-[#ffa1ff] mt-[2vh] rounded-full">
            <TouchableOpacity 
            className="mt-[8vh] justify-center items-center"
            onPress={()=> navigation.navigate("SignIn")}>
                <Text className="text-white underline">Már van fiókod? Jelentkezz be</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    </View>
  )
}

export default Register