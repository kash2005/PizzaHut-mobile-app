import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

export default function SignUp() {
    return(
        <SafeAreaView style={{flex: 1,backgroundColor: "#FBFCFF",justifyContent: "flex-start",}}>
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={router.back}>
                    <Image style={styles.arrow} source={require('../assets/images/arrow.png')}/>
                </TouchableOpacity>
                <Text style={styles.topic}>Sign Up</Text>
                <Text style={styles.title}>Create your account</Text>
            </View>
            <View style={styles.subCotainer}>
                <TextInput style={styles.input} placeholder="Enter your email"></TextInput>
                <TextInput style={styles.input} placeholder="Enter your phone number"></TextInput>
                <TextInput style={styles.input} placeholder="Enter your password"></TextInput>
                <TextInput style={styles.input} placeholder="Repeat password"></TextInput>
                <TouchableOpacity style={styles.button} onPress={()=>{}}>
                    <Text style={styles.buttonText} >Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.signup}>If you have an acccount ? <Link style={styles.signup2} href={'/signIn'}>Sign In</Link></Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBFCFF",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
      },
      mainContainer: {
        width: "100%",
        height: 100,
        backgroundColor: "#EE3A43", 
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
      },
      arrow: {
        width: 30,
        height: 30,
      },
      topic: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 32,
        fontFamily: 'InriaSans-Bold',
        marginLeft: 60,
        marginTop: -38,
      },  
      title: {
        marginVertical: 0,
        color: '#fff',
        fontFamily: 'InriaSans-Regular',
        marginLeft: 60,
        fontSize: 19,
      },
      subCotainer: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
      },
      input: {
        height: 55,
        marginVertical: 8,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#cccccc',
        opacity: 0.5,
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 15
      },
      button: {
        backgroundColor: '#EE3A43',
        marginTop: 45,
        height: 45,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
      },
      buttonText: {
        color: '#fff',
        fontSize: 17,
        fontFamily: 'InriaSans-Bold',
      },
      signup: {
        textAlign: "center",
        marginTop: 20,
        fontFamily: 'InriaSans-Regular',
      },
      signup2: {
        color: '#4D66E8',
        textDecorationLine: 'underline',
        fontFamily: 'InriaSans-Regular',
      },
});    