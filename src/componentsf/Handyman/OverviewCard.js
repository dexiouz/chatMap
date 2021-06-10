import React from 'react';
import styled from 'styled-components/native';
import {Paragraph} from '../Typography';
import Flex from '../Layouts/Flex';
import Theme from '../../styles/Theme';
import Icon from '../Icons';
import Oval from '../Icons/OvalShape';
import CarePro from '../Icons/CarePro';
import debounce from 'lodash/debounce';
import {TouchableOpacity} from 'react-native';
import BackgroundCheck from '../Icons/BackgroundCheck';

const StyledNC = styled(Flex.Row)`
  box-shadow: 0px 10px 40px rgba(0, 64, 128, 0.1);
`;

const AVATAR_SIZE = 80;
const TRANSFORM_OFFSET = -(AVATAR_SIZE * 0.5);

const OverviewCard = props => {
  const onPress = React.useRef(debounce(() => props.onPress(), 400)).current;

  return (
    <TouchableOpacity activeOpacity={0.75} onPress={onPress}>
      <StyledNC
        alignItems="stretch"
        justifyContent="space-between"
        px={16}
        py={16}
        ml={16}
        mt={12}
        mb={Theme.gutter.md}
        {...props}
        style={{
          backgroundColor: Theme.colors.white,
          borderRadius: 16,
        }}>
        <Flex
          style={{position: 'relative', width: AVATAR_SIZE / 1.5}}
          justifyContent="flex-end">
          <Oval
            size={AVATAR_SIZE}
            bgColor={Theme.colors._5}
            style={{
              top: 0,
              position: 'absolute',
              transform: [
                {translateX: TRANSFORM_OFFSET},
                {translateY: TRANSFORM_OFFSET},
              ],
            }}
          />
          <BackgroundCheck size={32} />
          <Flex mb={4} />
          <CarePro size={32} />
        </Flex>
        <Flex flex={1} px={Theme.gutter.sm}>
          <Flex style={{position: 'absolute', top: 0, right: 0}}>
            <Icon name="heart" size={24} />
          </Flex>
          <Flex.Row mb={Theme.gutter.sm}>
            <Paragraph bold>Edith Johnson</Paragraph>
          </Flex.Row>
          <Paragraph small style={{marginBottom: Theme.gutter.sm}}>
            28 • Capentry
          </Paragraph>
          <Paragraph small style={{marginBottom: Theme.gutter.sm}}>
            Ikota, Lekki • 2 Miles
          </Paragraph>
          <Paragraph bold small style={{marginBottom: Theme.gutter.sm}}>
            4.85 (215 reviews)
          </Paragraph>
          <Paragraph small style={{color: Theme.colors._2}}>
            Worked 192 Customers so far
          </Paragraph>
        </Flex>
      </StyledNC>
    </TouchableOpacity>
  );
};

export default OverviewCard;
