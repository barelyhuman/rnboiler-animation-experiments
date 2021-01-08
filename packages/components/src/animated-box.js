import useInterval from 'lib/src/hooks/use-interval';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text } from 'react-native';

export default function AnimatedBox() {
  const [friction, setFriction] = useState(random(2, 150));
  const offset = useRef(new Animated.Value(0)).current;

  useInterval(() => {
    spring();
  }, 1000);

  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const spring = () => {
    const val = random(0, Dimensions.get('window').width - 95);
    Animated.spring(offset, {
      toValue: val,
      friction,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[styles.box, { transform: [{ translateX: offset }] }]}
    >
      <Text style={{ color: '#fff',fontWeight:"600" }}>Friction: {friction}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 4,
    backgroundColor: '#fff',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {},
  buttonText: {
    color: '#000',
    fontSize: 16,
    lineHeight: 18,
  },
  box: {
    height: 95,
    width: 95,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 8,
  },
});
