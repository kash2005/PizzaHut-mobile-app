import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; 

import React from "react";
import { useState } from "react";
import {Entypo, AntDesign} from "@expo/vector-icons";
import { Link, router } from "expo-router";

export default function Index() {
  const [email, setEmail] = useState('');
  const [text, setText] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text variant="titleLarge" 
          style={{
            color: '#EE3A43',
            fontFamily: 'InriaSans-Bold',
          }}
        >Welcome Back</Text>
        <Text variant="labelMedium"
          style={{
            color: '#000',
            opacity: 0.5,  
            marginTop: 20,
          }}
        >If you have account login first and Don’t you have account create an account.</Text>
        <View style={{marginVertical: 45,}}>
          <TextInput
            mode="outlined" 
            label="Email"
            value={email}
            autoCapitalize="none"
            onChangeText={text => setEmail(text)}
            style={{
              backgroundColor: '#FBFCFF',
            }}          
            outlineColor="rgba(0, 0, 0, 0.2)" // Color when not focused
            activeOutlineColor="rgba(0, 0, 0, 0.2)" // Color when focused
          /> 
          <TextInput
            label="Password"
            secureTextEntry={!passwordVisible}
            right={
              <TextInput.Icon
                icon={passwordVisible ? "eye" : "eye-off"}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
            value={text}
            onChangeText={text => setText(text)}
            mode="outlined" // Ensure the TextInput is in outlined mode
            style={styles.input}
            outlineColor="rgba(0, 0, 0, 0.2)" // Color when not focused
            activeOutlineColor="rgba(0, 0, 0, 0.2)" // Color when focused
          />
          <Button
            mode="contained"
            buttonColor="#EE3A43"
            onPress={() => router.push('/welcomePage')}
            style={{
              marginTop: 50
            }}>
              Sign In
          </Button>
          <Button
            icon="google"
            mode="outlined"
            textColor="rgba(0, 0, 0, 0.7)"
            onPress={() => console.log('Pressed')}
            style={{
              marginTop: 30
            }}>
              Continue with google
          </Button>
          <Text variant="labelMedium" style={{textAlign: "center",marginTop: 20}}>Don’t you have an account ? <Link style={{color: '#4D66E8',textDecorationLine: "underline"}} href={'/signUp'}>Sign Up</Link></Text>
        </View>
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
  input: {
    backgroundColor: '#FBFCFF', // Set the background color of the TextInput
    marginTop: 20,
  },
  
});