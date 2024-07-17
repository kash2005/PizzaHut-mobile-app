import { Text, View, StyleSheet, TextInput , Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useState } from "react";
import {Entypo, AntDesign} from "@expo/vector-icons";
import { Link, router } from "expo-router";

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.topic}>Welcome Back</Text>
        <Text style={styles.title}>If you have account login first and Don’t you have account create an account.</Text>
        <View style={styles.space}>
          <TextInput style={styles.input}  value={email} autoCapitalize="none" onChangeText={(text) => setEmail(text)} placeholder="Enter your email"/>
          <View style={{}}>
            <TextInput style={styles.input}  value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={showPassword} placeholder="Enter your password" />
            <TouchableOpacity style={{left: 280, bottom:53}} onPress={togglePassword}>
                          {showPassword ? (
                              <Entypo name="eye" size={34} color="#cccccc" />
                          ) : (
                              <Entypo name="eye-with-line" size={34} color="#cccccc" />
                          )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>{}}>
          <Text style={styles.buttonText} >Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Image style={styles.image} source={require('../assets/images/google-logo.png')} />
          <Text style={styles.googleButtonText}>Continue with google</Text>
        </TouchableOpacity>
        <Text style={styles.signup}>Don’t you have an account ? <Link style={styles.signup2} href={'/signUp'}>Sign Up</Link></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFCFF",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  topic: {
    color: '#EE3A43',
    fontWeight: 'bold',
    fontSize: 28,
    fontFamily: 'InriaSans-Bold',
  },  
  title: {
    marginVertical: 20,
    color: '#000',
    opacity: 0.7,
    fontFamily: 'InriaSans-Regular',
  },
  space: {
    marginTop: 20,
  },  
  input: {
    height: 55,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#cccccc',
    opacity: 0.5,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 15
  },
  button: {
    backgroundColor: '#EE3A43',
    marginTop: 5,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'InriaSans-Bold',
  },
  image: {
    width: 25,
    height: 25,
    marginRight: 20
  },
  googleButton: {
    borderWidth: 1,
    marginTop: 30,
    width: 340,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    borderColor: '#cccccc',
  },
  googleButtonText: {
    fontSize: 16,
    color: '#000',
    opacity: 0.7,
    fontFamily: 'InriaSans-Regular',
  },
  signup: {
    textAlign: "center",
    marginTop: 20,
    fontFamily: 'InriaSans-Regular',
  },
  signup2: {
    color: '#4D66E8',
    textDecorationLine: 'underline',
    fontFamily: 'InriaSans-Regular',
  },
 
});