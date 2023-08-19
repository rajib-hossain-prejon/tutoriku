import { Stack } from 'expo-router';

import colors from '../config/colors';
import routes from '../navigation/routes';

export default function Layout() {
  return (
    <Stack
      // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
      screenOptions={{
       gestureEnabled: true,
       gestureDirection: 'vertical',
       cardStyleInterpolator: ({ current }) => {
          return {
            cardStyle: {
              opacity: current.progress,
            },
          };
        },
        headerStyle: {
          backgroundColor: colors.primary,
          
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route. */}
      
      <Stack.Screen name="index" options={{ headerShown: false}} />
      <Stack.Screen name={routes.LOGIN.path} options={{ title: routes.LOGIN.header }} />
      <Stack.Screen name={routes.REGISTER.path} options={{ title: routes.REGISTER.header }} />
      <Stack.Screen name={routes.LISTING_DETAILS.path} options={{ title: routes.LISTING_DETAILS.header }} />
      <Stack.Screen name={routes.INSTITUTION_DETAILS.path} options={{ title: routes.INSTITUTION_DETAILS.header }} />
       <Stack.Screen name={routes.TUTORS_LIST.path} options={{ title: routes.TUTORS_LIST.header }} />
      <Stack.Screen name="tabs" options={{ headerShown: false}} />
    </Stack>
  );
}
