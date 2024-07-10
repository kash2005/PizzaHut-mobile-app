import { useNavigation } from "@react-navigation/native";
import { NativeStackView } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { View, Image,StyleSheet } from "react-native";
import { FullWindowOverlay } from "react-native-screens";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

export default function LoadingPage() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    useEffect(() =>{
        setTimeout(() =>{
            navigation.navigate('Loading2');
        }, 3000);
    }, [])
    return(
        <View style = {styles.container}>
            <Image style={styles.image} source={require('../assets/pizza logo.png')}/>
            <Image source={require('../assets/loading.gif')} style={styles.loadingIcon}/>
            <View style={styles.darkView}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBFCFF'
    },
    image:{
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    loadingIcon:{
        width: 70,
        height: 70,
        position: 'absolute',
        bottom: 30
    },
    darkView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        opacity: 0.5,
        position: 'absolute',
        top: 0,
        left: 0,
    }    
});