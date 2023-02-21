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

 export default function ScreenG({navigation}){
    const onPressHandler = ()=>{
        navigation.navigate('Screen_H');
    }
    return(
        <View style={styles.body}>
            <Text style={styles.text}>
                Screen_G
                Write the word
            </Text>
            <Pressable
            onPress={onPressHandler}
            style={({pressed})=>({backgroundColor:pressed ?'#ddd':'#0f0'})}
            >
                <Text style={styles.text}>
                    Go to ScreenH
                </Text>
            </Pressable>
        </View>
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