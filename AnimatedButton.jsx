import { StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

export default AnimatedButton = ({ buttonText }) => {
  const scaleDownAnimation = useSharedValue(1);
  const buttonBackgroundColorAnimation = useSharedValue('orange');

  const handleButtonPress = () => {
    console.log('Tap!');
  };

  const scaleHandler = Gesture.Tap()
    .onBegin(() => {
      'worklet';
      scaleDownAnimation.value = withSpring(0.95);
      buttonBackgroundColorAnimation.value = withTiming('green');
    })
    .onFinalize(() => {
      'worklet';
      scaleDownAnimation.value = withSpring(1);
      buttonBackgroundColorAnimation.value = withTiming('orange');
      runOnJS(handleButtonPress)();
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleDownAnimation.value }],
    backgroundColor: buttonBackgroundColorAnimation.value,
    borderRadius: 15
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle}>
        <GestureDetector gesture={scaleHandler}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </View>
        </GestureDetector>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    width: 250,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'transparent'
  },
  buttonText: {
    fontSize: 28,
    color: 'white',
    fontWeight: '600'
  }
});
