
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router/tabs';
import colors from '../../config/colors';

export default function AppLayout() {
  return (
    <Tabs
    
    screenOptions={{
        tabBarActiveTintColor: colors.white,
        tabBarActiveBackgroundColor: colors.primary,
        headerStyle: {
         backgroundColor: colors.primary
        },
        headerTintColor: colors.white,
        headerShown: false
         // Change the inactive icon color
      }}   >
      <Tabs.Screen
        // Name of the route to hide.
        name="feed/index"
        options={{
          // This tab will no longer show up in the tab bar.
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          title: 'Home',
          tabBarLabel: 'Home'
          
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name="account/index"
        options={{
          // This tab will no longer show up in the tab bar.
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          title: 'Account',
          tabBarLabel: 'Account',
          headerStyle: {
         backgroundColor: colors.white
        },
          
        }}
      />
      
    </Tabs>
  );
}
