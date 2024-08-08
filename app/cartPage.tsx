import { View,Image } from "react-native";
import { Text, Button} from 'react-native-paper';
import { Appbar,} from 'react-native-paper';
import { Link, router } from "expo-router";

export default function CartPage(){
    return(
        <View
        style={{
            flex: 1,backgroundColor: "#FBFCFF",
        }}>
            <Appbar.Header>
                <Appbar.BackAction onPress={router.back} color="#EE3A43" />
            </Appbar.Header>
            <View
                style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '50%'
                }}>
                <Image style={{
                        width: 130,
                        height: 130,
                        opacity: 0.7
                    }} source={require('../assets/images/cart.png')}/>
                <Text variant="labelMedium"
                    style={{
                        color: '#000',
                        opacity: 0.5,  
                        marginTop: 20,
                    }}
                >There are no item in this cart.</Text>
                <Button
                    mode="outlined"
                    textColor="#EE3A43"
                    onPress={() => console.log('Pressed')}
                    style={{
                        borderColor: '#EE3A43',
                        marginTop: 30
                    }}>
                    Add Items
                </Button>
            </View>        
        </View>
    );
}