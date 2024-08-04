import { View, StyleSheet, Image, TouchableOpacity,TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button  } from 'react-native-paper';
import React from "react";
import { Link, router } from "expo-router";

export default function Index() {

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
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <TextInput 
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
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
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  
});