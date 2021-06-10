import React from 'react';
import {Switch} from 'react-native-gesture-handler';
import Flex from '../Layouts/Flex';
import Theme from '../../styles/Theme';
import {Paragraph} from '../Typography';

export default function SwitchList(props) {
  return (
    <Flex.Row
      alignItems="center"
      justifyContent="space-between"
      mb={Theme.gutter.lg}
      alignSelf="stretch">
      <Paragraph>{props.title}</Paragraph>
      <Switch
        value={props.value}
        onValueChange={props.onValueChange ? props.onValueChange : undefined}
      />
    </Flex.Row>
  );
}
