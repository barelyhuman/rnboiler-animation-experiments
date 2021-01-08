import AnimatedBox from 'components/src/animated-box';
import Spacer from 'components/src/spacer';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

const App = () => {
  const Boxes = [];

/*
 
Current test has an inconsistent fps of 59-60 at an approx of 350 animated boxes running at once, 
each using an approx of memory of 0.5 mb considering state 
and animated value changes etc
total memory being about 105-110 mb
this needs to to be reduced to about 200 to avoid m

Average Amount of animations you can have on a general screen - 100 - 150 of this simpler one
Average amount of animations you can have with a more complex combination - 90-100 
Optimal limit for animations to be around 90 with a memory usage of about 100mb with the animation taking in about 45 MB

Might Lag with a MapView in the background

*/

  for (let i = 0; i < 90; i++) {
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
