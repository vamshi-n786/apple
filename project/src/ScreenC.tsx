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
import TabNav from './components/TabNav';
const Tab = createBottomTabNavigator();

 export default function ScreenC({navigation}){
    const onPressHandler = ()=>{
        navigation.navigate('Screen_D');
    }
    return(
        <>
        <TabNav/>
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