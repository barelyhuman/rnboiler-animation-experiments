import AnimatedBox from 'components/src/animated-box';
import Spacer from 'components/src/spacer';
import React from 'react';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <AnimatedBox />
      <Spacer y={1} />
      <AnimatedBox />
      <Spacer y={1} />
      <AnimatedBox />
      <Spacer y={1} />
      <AnimatedBox />
      <Spacer y={1} />
    </>
  );
};

export default App;
