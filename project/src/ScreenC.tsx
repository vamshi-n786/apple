import React from 'react';
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

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import SpeechRecognitionScreen from './screens/speech-recognition.screeen';
import TextToSpeechScreen from './screens/text-to-speech.screeen';
 export default function ScreenC({navigation}){
    const onPressHandler = ()=>{
        navigation.navigate('Screen_D');
    }
    return(
        <>
        <NavigationContainer>
        <Tab.Navigator
      screenOptions={
        {
          headerShown: false,
          tabBarIconStyle: {
            display: 'none',
          }
        }
      }
    >
      <Tab.Screen name="TTS" component={TextToSpeechScreen}/>
      <Tab.Screen name="ASR" component={SpeechRecognitionScreen} />
        </Tab.Navigator>
      </NavigationContainer>
        <View style={styles.body}>
            <Text style={styles.text}>
                ScreenC
            </Text>
            <Pressable
            onPress={onPressHandler}
            style={({pressed})=>({backgroundColor:pressed ?'#ddd':'#0f0'})}
            >
                <Text style={styles.text}>
                    Go to ScreenD
                </Text>
      </Pressable>
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        margin:10,
    },
})