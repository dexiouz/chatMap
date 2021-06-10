import React from 'react';
import styled from 'styled-components/native';
import {Paragraph} from '../Typography';
import Flex from '../Layouts/Flex';
import Theme from '../../styles/Theme';
import Oval from '../Icons/OvalShape';

const StyledNC = styled(Flex.Row)`
  box-shadow: 0px 10px 40px rgba(0, 64, 128, 0.1);
`;

const NotificationCard = () => {
  return (
    <StyledNC
      fullwidth
      alignItems="center"
      justifyContent="space-between"
      px={Theme.gutter.sm * 2}
      py={Theme.gutter.sm * 2}
      mb={Theme.gutter.md}
      style={{
        backgroundColor: Theme.colors.white,
        borderRadius: Theme.gutter.sm * 2,
      }}>
      <Flex>
        <Paragraph bold style={{color: Theme.colors._4, fontSize: 14}}>
          APPOINTMENT
        </Paragraph>
        <Paragraph>Sulemon Dangote</Paragraph>
        <Paragraph style={{fontSize: 14}}>Today • 17:00 - 17:30</Paragraph>
      </Flex>
      <Flex style={{position: 'relative', width: 64, height: 64}}>
        <Oval size={64} bgColor={Theme.colors._5}>
          {/* <Paragraph>fire</Paragraph> */}
        </Oval>
        <Oval
          size={24}
          bgColor={Theme.colors._4}
          style={{
            bottom: 0,
            right: 0,
            transform: [{translateX: 24 / 4}, {translateY: 24 / 4}],
            position: 'absolute',
          }}
        />
      </Flex>
    </StyledNC>
  );
};

export default NotificationCard;
