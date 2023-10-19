import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { useDispatch } from 'react-redux'
import { setSignIn } from '../redux/slices/authSlice';


const LoginScreen = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // const user = {
        //     isLoggedIn: true,
        //     email: 'jdoe@test.com',
        //     userName: 'johnDoe'
        // };
        if (username == '' || password == '') {
            alert('Please enter email and password!');
            return;
          }
         const user = {
            isLoggedIn: true,
            email: username,
            userName: password
        };

        dispatch(setSignIn(user))
        // .then((response) => {
        //     console.log(response);
        //     if (response.selectIsLoggedIn == "true") {
        //       navigation.replace("Dashboard");
        //     }
        //   })
        //   .catch((error) => {
        //     navigation.replace("LoginScreen");
        //   });
    }

    return (
        <View style={styles.container}>
            {/* <Text style={{ marginBottom: 20, fontSize: 15 }}>Login Screen</Text> */}
            <Text style={styles.headerTitle}>Please Login to your account</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        placeholder="password"
      />
            <TouchableOpacity onPress={handleLogin} style={styles.btn}>
                <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    btn: {
        backgroundColor: 'blue',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    },
    headerTitle: {
        fontSize: 24,
      },
      input: {
        width: 300,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "gray",
        paddingVertical: 10,
        marginVertical: 10,
      },
})
