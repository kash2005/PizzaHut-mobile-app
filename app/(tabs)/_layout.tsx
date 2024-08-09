import { EvilIcons, Feather, FontAwesome, FontAwesome5, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Icon} from 'react-native-paper';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor: "#EE3A43"}}>
      <Tabs.Screen options={{title: "Home",
                tabBarIcon:({color}) => <Icon size={30} source="home" color={color}/>}} name="(home)" />
      <Tabs.Screen options={{title: "Notification",
                tabBarIcon:({color}) => <FontAwesome6 size={25} name="bell" solid color={color}/>}} name="(notification)" />          
      <Tabs.Screen options={{title: "Profile",
                tabBarIcon:({color}) => <FontAwesome6 size={25} name="user" solid color={color}/>}} name="(profile)" />
    </Tabs>
  );
}