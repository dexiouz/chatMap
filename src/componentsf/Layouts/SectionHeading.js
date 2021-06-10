import React from 'react';
import {TouchableOpacity} from 'react-native';
import Theme from '../../styles/Theme';
import BackArrow from '../Icons/BackArrow';
import {Paragraph} from '../Typography';
import Flex from './Flex';

export const SectionHeading = ({
  small = false,
  title = 'Enter the Title',
  linkText = 'View All',
  showLink = true,
  onPress,
}) => {
  return (
    <Flex.Row justifyContent="space-between" fullwidth mb={Theme.gutter.sm}>
      <Paragraph bold={!small}>{title}</Paragraph>
      {showLink && (
        <TouchableOpacity onPress={onPress}>
          <Flex.Row alignItems="center">
            <Paragraph
              style={{
                color: Theme.colors.primary,
                marginRight: Theme.gutter.sm,
              }}>
              {linkText}
            </Paragraph>
            <ArrowRight />
          </Flex.Row>
        </TouchableOpacity>
      )}
    </Flex.Row>
  );
};

export const ArrowRight = () => {
  return (
    <Flex style={{height: 16, transform: [{rotate: '180deg'}]}}>
      <BackArrow size={16} />
    </Flex>
  );
};

export default SectionHeading;
