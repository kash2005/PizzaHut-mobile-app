import { View, Image, StyleSheet, Text } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Welcome() {
    useEffect(() =>{
        setTimeout(() =>{
          router.push('/homePage')
        },3000)
      },[])
    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/welcome-rectangle.png')}/>
            <View style={styles.subContainer}>
                <Image style={styles.logo} source={require('../assets/images/pizza-logo.png')}/>
                <Text style={styles.topic}>Welcome</Text>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    logo: {
        width: 225,
        height: 225,
    },
    topic: {
        color: '#EE3A43',
        fontWeight: 'bold',
        fontSize: 32,
        fontFamily: 'InriaSans-Bold',
        marginTop: 10,
    },
    subContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    }  
});