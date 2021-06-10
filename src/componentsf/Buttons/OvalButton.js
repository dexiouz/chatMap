import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Flex from '../Layouts/Flex';
import Theme from '../../styles/Theme';
import Oval from '../Icons/OvalShape';

const OvalButton = ({
  size = 48,
  bgColor = Theme.colors.white,
  children,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Flex
        alignItems="center"
        justifyContent="center"
        style={{width: size, height: size, position: 'relative'}}>
        <Oval
          size={size}
          bgColor={bgColor}
          style={[
            StyleSheet.absoluteFillObject,
            {
              shadowColor: 'black',
              shadowOpacity: 0.2,
            },
          ]}
        />
        {children}
      </Flex>
    </TouchableOpacity>
  );
};

export default OvalButton;
