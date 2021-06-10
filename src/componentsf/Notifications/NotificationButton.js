import React from 'react';
import {Paragraph} from '../Typography';
import Flex from '../Layouts/Flex';
import Theme from '../../styles/Theme';
import NotificationBell from '../Icons/NotificationBell';
import OvalButton from '../Buttons/OvalButton';

const NotificationButton = () => {
  return (
    <OvalButton size={48} bgColor={Theme.colors.white}>
      <NotificationBell size={24} />
      <Flex
        alignItems="center"
        justifyContent="center"
        style={{
          top: 0,
          right: 0,
          height: 30,
          minWidth: 30,
          borderRadius: 15,
          position: 'absolute',
          backgroundColor: Theme.colors.primary,
          transform: [{translateY: -30 * 0.25}, {translateX: 30 * 0.25}],
        }}>
        <Paragraph style={{color: Theme.colors.white}}>3</Paragraph>
      </Flex>
    </OvalButton>
  );
};

export default NotificationButton;
