import { View,StyleSheet,Image} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

export default function LoadingPage2() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    useEffect(() =>{
        setTimeout(() =>{
            navigation.navigate('Loading2');
        }, 3000);
    }, [])
    return(
        <View style = {styles.container}>
            <Image style = {styles.image} source={require('../assets/pizza logo.png')}/>
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
}
});    