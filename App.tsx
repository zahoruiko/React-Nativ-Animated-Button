import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import AnimatedButton from './AnimatedButton';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1, alignItems: 'center'}}>
      <SafeAreaView>
        <AnimatedButton buttonText={'Submit!'} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
