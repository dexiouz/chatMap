import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BackArrow from '../Icons/BackArrow';
import Theme from '../../styles/Theme';
import Oval from '../Icons/OvalShape';
import RefIcon from '../Icons';
import Flex from './Flex';

export const Arrow = ({onPress = null}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onPress || navigation.goBack}>
      <BackArrow />
    </TouchableOpacity>
  );
};

export const ArrowTransparent = ({name, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Flex justifyContent="center" alignItems="center">
        <Oval bgColor="rgba(0,0,0,0.2)" size={40} />
        <Flex style={{position: 'absolute'}}>
          <RefIcon name={name} size={24} color={Theme.colors.white} />
        </Flex>
      </Flex>
    </TouchableOpacity>
  );
};
