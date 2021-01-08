import AnimatedBox from 'components/src/animated-box';
import Spacer from 'components/src/spacer';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

const App = () => {
  const Boxes = [];

// Current test has an inconsistent fps of 59-60 at an approx of 350 animated boxes running at once, 
// each using an approx of memory of 0.5 mb considering state 
// and animated value changes etc
// total memory being about 105-110 mb

  for (let i = 0; i < 350; i++) {
    Boxes.push(
      <>
        <AnimatedBox />
        <Spacer y={1} />
      </>,
    );
  }

  return (
    <>
      <SafeAreaView></SafeAreaView>
      <ScrollView>{Boxes}</ScrollView>
    </>
  );
};

export default App;
