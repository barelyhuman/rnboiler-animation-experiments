import React from 'react';
import {View} from 'react-native';

export default function Spacer(props) {
    const style = {
      height: 1,
      width: 1,
    };
  
    const spacingMultiplier = 8;
  
    if (props.x) {
      style.marginLeft = spacingMultiplier * props.x;
    }
  
    if (props.y) {
      style.marginTop = spacingMultiplier * props.y;
    }
  
    return <View style={style}>{props.children}</View>;
  }