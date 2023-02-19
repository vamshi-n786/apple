import React,{useRef,useState} from 'react';
import {
    Pressable,
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    
  useWindowDimensions,
    useColorScheme,
    View,
  } from 'react-native';

  import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';
import {useSnapshot} from 'valtio';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import { state } from './store';


 export default function ScreenB({navigation}){
    const onPressHandler = ()=>{
        navigation.navigate('Screen_C');
    }
    const { width } = useWindowDimensions();
  const canvasRef = useRef<SketchCanvasRef>(null);
  const snap = useSnapshot(state);

  const [string, setString] = React.useState('V');

    const generateRandomString = (lenth) => {
        const char = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
        const random = Array.from(
            {length: lenth},
            () => char[Math.floor(Math.random() * char.length)]
        );
        const randomString = random.join("");
        return setString(randomString);
    }
    
    return(
       <>
       <View style={styles.body1}>
       <Text style={styles.text3}>{string}</Text>
       </View>
       
        <View style={styles.buttonContainer}>
            <Button 
                //   title='generate random string'
                title='refresh'
                onPress={() => generateRandomString(1)}
            />
        </View>
       <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: '#f0f0f0',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Header canvasRef={canvasRef} />
        <View
          style={{
            width: width - 24,
            flexGrow: 1,
            backgroundColor: '#ffffff',
            borderRadius: 10,
            overflow: 'hidden',
            elevation: 1,
          }}
        >
          <SketchCanvas
            strokeColor={snap.strokeColor}
            strokeWidth={snap.strokeWidth}
            ref={canvasRef}
            containerStyle={styles.container}
          />
        </View>

        <Toolbar />
      </View>
    </SafeAreaView>
        <View style={styles.body}>
            {/* <Text style={styles.text}>
                ScreenB
            </Text> */}
            <Pressable
            onPress={onPressHandler}
            style={({pressed})=>({backgroundColor:pressed ?'#ddd':'#0f0'})}
            >
                <Text style={styles.text}>
                    Go to ScreenC
                </Text>
            </Pressable>
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    body:{
        justifyContent:'center',
        alignItems:'center',
    },
    body1:{
        justifyContent:'center',
        alignItems:'center',
    },
    container: {
        flex: 1,
      },
    text:{
        fontSize:30,
        fontWeight:'bold',
        margin:10,
    },
    text3:{
        fontSize:100,
        fontWeight:"bold",
        margin:10,
      },
    box: {
        width: 60,
        height: 60,
        marginVertical: 20,
      },
      
      buttonContainer: {
        marginTop:10,
    },
})