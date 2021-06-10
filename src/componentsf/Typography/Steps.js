import React from 'react';
import {Paragraph} from '.';
import Theme from '../../styles/Theme';

export default function Steps({current, max}) {
  return (
    <Paragraph style={{color: Theme.colors.text}}>
      Step {current} of {max}
    </Paragraph>
  );
}
