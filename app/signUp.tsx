import { View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import * as React from 'react';
import { Appbar, Text, Button } from 'react-native-paper';

import { Link, router } from "expo-router";

export default function SignUp() {
    return(
      <View style={{ flex: 1,backgroundColor: "#FBFCFF",justifyContent: "flex-start",}}>
        <Appbar.Header style={{ backgroundColor: "#EE3A43" }}>
          <Appbar.BackAction onPress={router.back} color="#fff" />
          <Appbar.Content 
            title="Sign Up" 
            titleStyle={{ color: "#fff" }} 
          />
        </Appbar.Header>
        <View style={styles.container}>
          <Text variant="titleLarge" 
            style={{
              textAlign: "center",
              color: "rgba(0,0,0,0.5)",
              marginTop: 10,
              marginBottom: 45
              }
              }>Create your account</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <TextInput 
            style={styles.input}
            placeholder="Enter your phone number"
            keyboardType="number-pad"
          />
          <TextInput 
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
          />
          <TextInput 
            style={styles.input}
            placeholder="Repeat password"
            secureTextEntry
          />
          <Button
            mode="contained"
            buttonColor="#EE3A43"
            onPress={() => router.push('/welcomePage')}
            style={{
              marginTop: 30
            }}>
              Sign Up
          </Button>
          <Text variant="labelMedium" 
            style={{
              textAlign: "center",
              marginTop: 20
            }}
            >If you have an acccount ? 
            <Link 
            style={{
              color: '#4D66E8',
              textDecorationLine: "underline"
              }} href={'/signIn'}>Sign In
            </Link></Text>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBFCFF",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
 
  
});    