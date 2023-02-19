import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SpeechRecognitionScreen from '../screens/speech-recognition.screeen';
import TextToSpeechScreen from '../screens/text-to-speech.screeen';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={
        {
          headerShown: false,
          tabBarIconStyle: {
            display: 'none',
          }
      }}>
      <Tab.Screen name="TTS" component={TextToSpeechScreen}/>
      <Tab.Screen name="ASR" component={SpeechRecognitionScreen} />
    </Tab.Navigator>
  );
}