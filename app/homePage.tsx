import { Image, StyleSheet, Text, View, TextInput } from "react-native";
import * as React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from 'react-native-paper';

export default function Homepage() {

    const [searchQuery, setSearchQuery] = React.useState('');

    return(
        <SafeAreaView style={{flex: 1,backgroundColor: "#FBFCFF",justifyContent: "flex-start",}}>
            <View style={styles.firstContainer}>
                <View style={styles.secondContainer}>
                    <Image style={styles.logo} source={require('../assets/images/pizza-logo.png')}/>
                    <View style={styles.thirdContainer}>
                        <Text style={styles.title}>My location</Text>
                        <Text style={styles.subTitle}>Kalutara,Panadura</Text>
                    </View>
                    <Image source={require('../assets/images/cart.png')}/>
                </View>
                <View >
                    <Image style={{marginTop: 30, borderRadius: 25}} source={require('../assets/images/main-pizza.png')}/>
                    <Image style={{position:"absolute", borderRadius: 25, marginTop: 30,opacity:0.5}} source={require('../assets/images/dark-rectangle.png')}/>
                    <Text style={styles.title2}>Your favorite pizza, just a tap away.</Text>
                    <Text style={styles.subTitle2}>Easy pizza ordering, fast delivery.</Text>
                </View>
                <Searchbar
                    placeholder="hot pepperoni pizza"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={{
                        borderRadius: 25,
                        backgroundColor: '#eeeff2',
                        
                    }}
                />
                {/* <TextInput style={styles.input} placeholder="hot pepperoni pizza">
                </TextInput> */}
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    firstContainer: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    secondContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 20,
    },
    logo: {
        width: 45,
        height: 45,
        alignContent: 'center',
        justifyContent: 'center',
    },
    cart: {
        width: 50,
        height: 50, 
        marginLeft: 30,
        paddingLeft: 30,
    },
    thirdContainer: {
        marginLeft: 10,
    },
    title: {
        fontSize: 17,
        color: '#cccccc',
    },
    subTitle: {
        fontSize: 21,
        color: '#000',
    },
    title2: {
        position:"absolute",
        fontSize: 28,
        color: '#fff',
        width: 270,
        marginTop: 60,
        marginLeft: 40
    },
    subTitle2: {
        position:"absolute",
        fontSize: 13,
        color: '#fff',
        marginTop: 150,
        marginLeft: 40
    },
    input: {
        height: 55,
        marginVertical: 8,
        borderRadius: 25,
        padding: 20,
        backgroundColor: '#eeeff2',
        fontSize: 15,
        marginTop: 30
    },
    
});    