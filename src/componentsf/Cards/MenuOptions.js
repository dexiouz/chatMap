import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import Flex from '../Layouts/Flex';
import {Paragraph} from '../Typography';
import {HalfWay} from './Modal';

const Option = styled(Pressable)`
  width: 100%;
  align-items: center;
`;

export default function MenuOptions(props) {
  return (
    <HalfWay
      visible={props.show}
      containerStyle={{
        backgroundColor: Theme.colors.white,
        height: (props.options || []).length
          ? 100 + props.options.length * 50
          : 250,
      }}>
      <Flex fullwidth>
        {React.Children.map(props.options, a => (
          <Flex
            mb={Theme.gutter.sm}
            py={Theme.gutter.sm}
            fullwidth
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
            }}>
            <Option
              text="Share"
              onPress={() => props.onOptionPress && props.onOptionPress(a)}>
              <Paragraph bold>{a}</Paragraph>
            </Option>
          </Flex>
        ))}
      </Flex>
      <Option
        onPress={() => {
          props.onCancel && props.onCancel();
        }}>
        <Paragraph bold style={{color: Theme.colors._6}}>
          Cancel
        </Paragraph>
      </Option>
    </HalfWay>
  );
}
