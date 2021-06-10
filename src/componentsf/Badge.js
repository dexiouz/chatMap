import React from 'react';
import Flex from './Layouts/Flex';
import Theme from '../styles/Theme';
import Oval from './Icons/OvalShape';
import CarePro from './Icons/CarePro';
import {Paragraph} from './Typography';
import BackgroundCheck from './Icons/BackgroundCheck';

const BADGES = {
  VERIFIED: {
    text: 'Verified User',
    textColor: Theme.colors.white,
    bgColor: Theme.colors._10,
    Icon: BackgroundCheck,
  },
  KYC_VERIFIED: {
    text: 'KYC Verified',
    textColor: Theme.colors.white,
    bgColor: Theme.colors._11,
    Icon: CarePro,
  },
  FLEXIBLE: {
    text: 'Flexible',
    textColor: Theme.colors.white,
    bgColor: Theme.colors._11,
  },
};

const Badge = props => {
  const data = BADGES[props.type];
  const hasIcon = data.Icon;

  if (!data) return null;

  return (
    <Flex.Row
      alignItems="center"
      style={{borderRadius: 12, backgroundColor: data.bgColor}}
      px={8}
      py={8}>
      {hasIcon && (
        <Oval size={24} bgColor={'rgba(255,255,255,0.4)'}>
          <data.Icon />
        </Oval>
      )}
      <Paragraph
        style={{
          paddingHorizontal: hasIcon ? 0 : 8,
          marginRight: hasIcon ? 8 : 0,
          marginLeft: hasIcon ? 16 : 0,
          color: data.textColor,
        }}>
        {data.text}
      </Paragraph>
    </Flex.Row>
  );
};

export default Badge;
