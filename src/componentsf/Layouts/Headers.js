import React from 'react';
import Theme from '../../styles/Theme';
import Button from '../Buttons';
import {Arrow} from './Back';
import Flex from './Flex';

export const CreateJobHeader = props => {
  return (
    <Flex.Row
      justifyContent="space-between"
      alignItems="flex-start"
      mb={Theme.gutter.md}
      //   outline
      fullwidth>
      <Arrow onPress={props.onBackPress ? props.onBackPress : undefined} />
      {props.buttonText && (
        <Button.Ghost
          text={props.buttonText}
          small
          style={{color: Theme.colors.primary}}
          onButtonPress={props.onButtonPress}
        />
      )}
    </Flex.Row>
  );
};
