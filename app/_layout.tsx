import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    'InriaSans-Bold': require('../assets/fonts/InriaSans-Bold.ttf'),
    'InriaSans-Regular': require('../assets/fonts/InriaSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{headerShown : false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="loading2" />
        <Stack.Screen name="signIn" />
        <Stack.Screen name="signUp" />
      </Stack>
    </SafeAreaProvider>
  );
}
