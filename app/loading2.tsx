import { router } from "expo-router";
import { useEffect } from "react";
import { View, StyleSheet, Image} from "react-native";

export default function Loading2() {
    useEffect(() =>{
        setTimeout(() =>{
          router.push('/signIn')
        },1000)
      },[])
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/pizza-logo.png')}/>
        </View>
    )
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
      }
});