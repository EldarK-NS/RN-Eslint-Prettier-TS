import React from 'react';
import {View} from 'react-native';
import {Signin, Home} from '../screens';

const Navigator: React.FC = () => {
  return (
    <View>
      <Signin />
      <Home />
    </View>
  );
};

export default Navigator;
