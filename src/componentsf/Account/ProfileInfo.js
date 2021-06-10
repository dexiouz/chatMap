import React from 'react';
import Theme from '../../styles/Theme';
import Icon from '../Icons';
import Flex from '../Layouts/Flex';
import {H3, Paragraph} from '../Typography';
import Badge from '../Badge';

export default function ProfileInfo(props) {
  return (
    <Flex alignItems="center" mb={Theme.gutter.md} fullwidth>
      {props.fullname && <H3 bold>{props.fullname}</H3>}
      {props.region && (
        <Flex.Row mt={Theme.gutter.sm} mb={Theme.gutter.sm}>
          <Icon name="map-pin" />
          <Flex ml={Theme.gutter.sm}>
            <Paragraph>{props.region}</Paragraph>
          </Flex>
        </Flex.Row>
      )}
      {props.note && (
        <Paragraph small style={{opacity: 0.75}}>
          Worked for 2 customers so far
        </Paragraph>
      )}
      <Flex.Row mt={Theme.gutter.md} justifyContent="space-between">
        {props.isVerified && (
          <Flex mr={Theme.gutter.sm}>
            <Badge type="VERIFIED" />
          </Flex>
        )}
        {props.bvnVerified && <Badge type="KYC_VERIFIED" />}
      </Flex.Row>
    </Flex>
  );
}
