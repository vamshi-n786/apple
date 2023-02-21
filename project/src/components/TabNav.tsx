import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import SpeechRecognitionScreen from '../screens/speech-recognition.screeen';
import TextToSpeechScreen from '../screens/text-to-speech.screeen';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <NavigationContainer independent={true}>
    <Tab.Navigator
      screenOptions={
        {
          headerShown: false,
          tabBarIconStyle: {
            display: 'none',
          }
      }}>
        <Tab.Screen name="TTS" component={TextToSpeechScreen} />
        <Tab.Screen name="ASR" component={SpeechRecognitionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}