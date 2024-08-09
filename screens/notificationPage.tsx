import * as React from 'react';
import {Text, Appbar, List, Button, Menu, Icon  } from 'react-native-paper';
import { View, Image,TouchableOpacity} from 'react-native';
import { router } from "expo-router";
import { EvilIcons, Ionicons, } from '@expo/vector-icons';
export default function NotificationPage(){
    return(
        <View style={{ flex: 1,backgroundColor: "#FBFCFF",justifyContent: "flex-start",}}>
            <Appbar.Header style={{ backgroundColor: "#EE3A43" }}>
                <Appbar.BackAction onPress={router.back} color="#fff" />
                <Appbar.Content 
                title="Profile" 
                titleStyle={{ color: "#fff", }} 
            />
            </Appbar.Header>
            <View style={{justifyContent:'center',backgroundColor: "#FBFCFF",alignItems:'center',marginTop: 355,}}>
            <Text variant="labelMedium"
                    style={{
                        color: '#000',
                        opacity: 0.5,  
                        marginBottom:355
                    }}
                >There are no item in this cart.</Text>
            </View>
                
        </View>
    );
}