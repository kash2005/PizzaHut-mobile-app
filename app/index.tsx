import { router } from "expo-router";
import { useEffect } from "react";
import {View, StyleSheet, Image } from "react-native";

export default function Index() {
  useEffect(() =>{
    setTimeout(() =>{
      router.push('/loading2')
    },3000)
  },[])
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/pizza-logo.png')}/>
      <Image style={styles.gif} source={require('../assets/images/loading.gif')}/>
      <View style={styles.dark}></View>
    </View>
  );
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    // width: 225,
    // height: 225,
  },
  gif: {
    width: 70,
    height: 70,
    top: 230,
  },
  dark: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
