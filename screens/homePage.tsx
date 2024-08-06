import { Image, StyleSheet, View, ImageBackground } from "react-native";
import * as React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar,IconButton, Text, Card, Button } from 'react-native-paper';

export default function Homepage() {

    const [searchQuery, setSearchQuery] = React.useState('');

    return(
        <SafeAreaView 
            style={{flex: 1,
                backgroundColor: "#FBFCFF",
                justifyContent: "flex-start",
            }}>
            <View 
                style={{
                    paddingTop: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                }}>
                <View style={styles.secondContainer}>
                    <Image style={{
                        width: 45,
                        height: 45,
                    }} source={require('../assets/images/pizza-logo.png')}/>
                    <View 
                        style={{
                            marginLeft: 10,
                        }}>
                        <Text variant="titleMedium" 
                            style={{
                                color: "rgba(0,0,0,0.3)"
                            }}>My location
                        </Text>
                        <Text variant="titleLarge">Kalutara,Panadura</Text>
                    </View>
                    <IconButton
                        icon="cart"
                        mode="outlined"
                        iconColor="#EE3A43"
                        style={{
                            borderColor: "#EE3A43",
                        }}
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
                <Card style={{marginTop: 30,borderRadius: 25,}}>
                    <Card.Cover source={require('../assets/images/main-pizza.png')} style={{width:"auto",height:160}} />
                    <View style={{position:"absolute",paddingLeft:45, paddingTop:30}}>
                        <Text style={styles.title2}>Your favorite pizza, just a tap away.</Text>
                        <Text style={styles.subTitle2}>Easy pizza ordering, fast delivery.</Text>
                    </View>
                </Card>
                <Searchbar
                    placeholder="hot pepperoni pizza"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={{
                        marginTop: 30,
                        borderRadius: 25,
                        backgroundColor: '#eeeff2',
                    }}
                />
            </View>
            <View 
                style={{
                    paddingTop: 20,
                    paddingLeft: 10,
                    paddingRight: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    gap: 60,
                }}>
                 <Text variant="titleMedium" style={{fontWeight: "bold"}}>Special Just For You!</Text>
                 <Button
                    mode="text"
                     textColor="#EE3A43"
                    onPress={() => console.log('Pressed')}>
                    Show All >
                </Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    secondContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 20,
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
    coverContainer: {
        borderRadius: 25,
        overflow: 'hidden', // Ensure the borderRadius is applied to the ImageBackground
    },
    imageBackground: {
        height: 176,
    },
    title2: {
        fontSize: 28,
        color: '#fff',
        width: 250,
        // marginTop: 60,
        // marginLeft: 40
    },
    subTitle2: {
        marginTop: 20,
        fontSize: 13,
        color: '#fff',
    },
});    