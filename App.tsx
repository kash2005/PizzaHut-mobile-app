import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import LoadingPage from './src/pages/LoadingPage';
import LoadingPage2 from './src/pages/LoadingPage2';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loading' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Loading' component={LoadingPage} />
        <Stack.Screen name='Loading2' component={LoadingPage2} />
        <Stack.Screen name='Loading2' component={LoadingPage2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
