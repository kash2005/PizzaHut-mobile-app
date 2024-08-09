import { Image, StyleSheet, View, FlatList } from "react-native";
import * as React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar,IconButton, Text, Card, Button } from 'react-native-paper';
import { Link, router } from "expo-router";

export default function Homepage() {

    const [searchQuery, setSearchQuery] = React.useState('');
    const data = [
        {
            id: 1,
            discount: 'Discount 25%',
            prize: 'Rs.2500.00',
            title: 'Regular Pizza+',
            description: 'cheese and chicken',
            extra: 'with pepzi',
            image: require('../assets/images/card-pizza-1.png'),
        },
        {
            id: 2,
            discount: 'Discount 25%',
            prize: 'Rs.2300.00',
            title: 'Cheese Pizza+',
            description: 'Extra cheese',
            extra: 'free cola',
            image: require('../assets/images/card-pizza-2.png'),
        },
        {
            id: 3,
            discount: 'Discount 25%',
            prize: 'Rs.2700.00',
            title: 'Chicken Pizza+',
            description: 'with cheeze',
            extra: 'free cola',
            image: require('../assets/images/card-pizza-1.png'),
        }
    ]

    const data2 = [
        {
            id: 1,
            image2: require('../assets/images/card-pizza-5.png'),
            title: 'Regular Pizza+',
            description: 'cheese and chicken',
            prize: 'Rs.2500.00',
            plus: require('../assets/images/plus.png'),
        },
        {
            id: 2,
            image2: require('../assets/images/card-pizza-4.png'),
            title: 'Regular Pizza+',
            description: 'cheese and chicken',
            prize: 'Rs.2500.00',
            plus: require('../assets/images/plus.png'),
        },
        {
            id: 3,
            image2: require('../assets/images/card-pizza-5.png'),
            title: 'Regular Pizza+',
            description: 'cheese and chicken',
            prize: 'Rs.2500.00',
            plus: require('../assets/images/plus.png'),
        }
    ]

    const renderItem = ({item}:any)=> {
        return  (
            <View>
                <Card style={{backgroundColor:item.id%2===0 ? '#EE3A43':'#eeeff2', marginHorizontal:10, width:271, height:165}}>
                    <Card.Content>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            gap: 14,
                            bottom: 15,
                        }}>
                        <Button
                            mode="contained"
                            buttonColor= "#fff"
                            textColor="#000"
                            labelStyle={{ fontWeight: 'bold' }}>
                            {item.discount}
                        </Button>
                        <View 
                        style={{
                            width: 100,
                            height: 60,
                            borderTopRightRadius: 11,
                            backgroundColor: item.id%2===0? '#rgba(0,0,0,0.2)':'#EE3A43',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // marginTop: 10,
                            // marginLeft: 10,
                            // marginBottom: 10,
                        }}>
                            <Text variant="titleMedium" style={{fontWeight:"bold", color:'#fff' }}>{item.prize}</Text>  
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                        }}>
                        <View>
                            <Text variant="titleLarge" style={{color:item.id%2===0? '#fff':'#000'}}>{item.title}</Text>
                            <Text variant="bodyMedium" style={{color:item.id%2===0? '#fff':'#000'}}>{item.description}</Text> 
                            <Text variant="bodyMedium" style={{color:item.id%2===0? 'rgba(255, 255, 255, 0.7)':'rgba(0,0,0,0.4)'}}>{item.extra}</Text> 
                        </View>
                        <Image source={item.image} style={{width:140,height:80,right:'9%'}}/>
                    </View>
                    </Card.Content>
                </Card>
            </View>
        );
    }

    const renderItem2 = ({item}:any)=> {
        return(
            <View>
                <Card style={{backgroundColor:'#eeeff2',marginVertical:10,height:96}}>
                    <Card.Content>
                        <View 
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                right:'10%',
                                bottom:'5%',
                            }}>
                            <Image source={item.image2} style={{width:100,height:80,}}/>
                            <View style={{right:'5%'}}>
                                <Text variant="titleMedium" style={{color:'#000'}}>{item.title}</Text>
                                <Text variant="bodyMedium" style={{color:'rgba(0,0,0,0.5)'}}>{item.description}</Text> 
                                <Text variant="bodyMedium" style={{color:'#EE3A43'}}>{item.prize}</Text> 
                            </View>
                        </View>
                        <View 
                        style={{
                            width: 50,
                            height: 40,
                            borderTopRightRadius: 11,
                            backgroundColor:'#EE3A43',
                            justifyContent: 'center',
                            alignItems: 'center',
                            bottom:'80%',
                            left:'88%'
                        }}>
                            <Image source={item.plus} style={{width:25,height:25,}}/>  
                        </View>
                    </Card.Content>
                </Card>
            </View>
        );
    }

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
                        onPress={() => router.push('/cartPage')}
                    />
                </View>
                <Card style={{marginTop: 20,borderRadius: 25,}}>
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
                        marginTop: 20,
                        borderRadius: 25,
                        backgroundColor: '#eeeff2',
                    }}
                />
            </View>
            <View 
                style={{
                    paddingTop: 10,
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
            <View style={{
                    paddingTop: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                }}>
                <FlatList data={data} renderItem={renderItem} horizontal={true} keyExtractor={(item) => item.id.toString()} ></FlatList>
            </View>
            <View 
                style={{
                    paddingTop: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    gap: 60,
                }}>
                 <Text variant="titleMedium" style={{fontWeight: "bold"}}>Top of the week!</Text>
                 <Button
                    mode="text"
                     textColor="#EE3A43"
                    onPress={() => console.log('Pressed')}>
                    Show All >
                </Button>
            </View>
            <View style={{
                    paddingTop: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                }}>
                <FlatList data={data2} renderItem={renderItem2} keyExtractor={(item) => item.id.toString()} ></FlatList>
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