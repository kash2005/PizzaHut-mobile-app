import { EvilIcons, Feather, FontAwesome, FontAwesome5, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Icon} from 'react-native-paper';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor: "#EE3A43"}}>
      <Tabs.Screen options={{title: "Home",
                tabBarIcon:({color}) => <Icon size={35} source="home" color={color}/>}} name="(home)" />
      <Tabs.Screen options={{title: "Profile",
                tabBarIcon:({color}) => <FontAwesome6 size={35} name="user" solid color={color}/>}} name="(profile)" />
    </Tabs>
  );
}