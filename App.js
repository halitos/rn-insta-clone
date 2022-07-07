import { useState, useEffect } from 'react';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './components/auth/Landing';
import Register from './components/auth/Register';
import firebaseConfig from './secrets/firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const checkLogin = async () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }),
      [];
  };

  useEffect(() => {
    checkLogin();
  }, []);

  // THIS ONLY WORKS WITH ANDROID, BUT NOT WITH EXPO
  // if (!isLoggedIn) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         backgroundColor: 'amber',
  //       }}
  //     >
  //       <Text>Loading.....</Text>
  //     </View>
  //   );
  // } else {}

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
        <Stack.Screen
          name='Landing'
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Register'
          component={Register}
          ptions={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
