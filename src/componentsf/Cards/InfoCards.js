import {useNavigation} from '@react-navigation/core';
import React from 'react';
import styled from 'styled-components/native';
import Theme from '../../styles/Theme';
import Button from '../Buttons';
import Flex from '../Layouts/Flex';
import {Paragraph} from '../Typography';

const Container = styled(Flex)`
  background-color: white;
  box-shadow: 0px 10px 6px rgba(0, 64, 128, 0.1);
`;

export const CompleteKYC = () => {
  return (
    <Container
      fullwidth
      px={Theme.gutter.md}
      py={Theme.gutter.md}
      mb={Theme.gutter.md}
      alignItems="center"
      style={{borderRadius: Theme.gutter.md}}>
      <Flex mb={Theme.gutter.md}>
        <Paragraph bold style={{textAlign: 'center'}}>
          Complete your registration to have access to handy men around you
        </Paragraph>
      </Flex>
      <Button disabled={true} shadow={false} text="Complete your KYC" />
    </Container>
  );
};

export const CreateJobPost = () => {
  const navigation = useNavigation();

  return (
    <Container
      fullwidth
      px={Theme.gutter.md}
      py={Theme.gutter.md}
      mb={Theme.gutter.md}
      alignItems="center"
      style={{borderRadius: Theme.gutter.md}}>
      <Flex mb={Theme.gutter.md}>
        <Paragraph bold style={{textAlign: 'center'}}>
          Find the right trusted Handymen for your family!
        </Paragraph>
      </Flex>
      <Button
        text="Create a Job Post"
        shadow={false}
        onPress={() => navigation.push('Jobs')}
      />
    </Container>
  );
};
