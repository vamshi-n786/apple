/**
 * Sample React Nativ\BenJeau\react-native-draw\blob\master\packages\react-native-draw-extras\src\icons\Brush.tsxe App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';

import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ScreenA from './src/ScreenA';
import ScreenB from './src/ScreenB';
import ScreenC from './src/ScreenC';
import ScreenD from './src/ScreenD';
import ScreenE from './src/ScreenE';
import ScreenF from './src/ScreenF';
import ScreenG from './src/ScreenG';
import ScreenH from './src/ScreenH';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
    name='Screen_A'
    component={ScreenA}
    />
    <Stack.Screen
    name='Screen_B'
    component={ScreenB}
    />
    <Stack.Screen
    name='Screen_C'
    component={ScreenC}
    />
    <Stack.Screen
    name='Screen_D'
    component={ScreenD}
    />
    <Stack.Screen
    name='Screen_E'
    component={ScreenE}
    />
    <Stack.Screen
    name='Screen_F'
    component={ScreenF}
    />
    <Stack.Screen
    name='Screen_G'
    component={ScreenG}
    />
    <Stack.Screen
    name='Screen_H'
    component={ScreenH}
    />
    </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;