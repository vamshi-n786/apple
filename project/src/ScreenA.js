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

 export default function ScreenA({navigation}){
    const onPressHandler = ()=>{
        navigation.navigate('Screen_B');
    }
    return(
        <>
        
        <View style={styles.body}>
            <Text style={styles.text}>
                ScreenA
            </Text>
            <Pressable
            onPress={onPressHandler}
            style={({pressed})=>({backgroundColor:pressed ?'#ddd':'#0f0'})}
            >
                <Text style={styles.text}>
                    Go to ScreenB
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
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
      },
    text:{
        fontSize:30,
        fontWeight:'bold',
        margin:10,
    },
})