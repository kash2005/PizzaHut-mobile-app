import { View, Image, StyleSheet, Text } from "react-native";

export default function Welcome() {
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