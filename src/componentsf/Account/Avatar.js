import React from 'react';
import Theme from '../../styles/Theme';
import Oval from '../Icons/OvalShape';
import Flex from '../Layouts/Flex';

const AVATAR_SIZE = 96;

export const Avatar = props => {
  return (
    <Flex
      mb={Theme.gutter.sm * 2}
      {...props}
      alignItems="center"
      justifyContent="center"
      style={{height: AVATAR_SIZE, width: AVATAR_SIZE}}>
      <Oval size={AVATAR_SIZE} bgColor="white" />
      <Oval
        size={AVATAR_SIZE - 8}
        bgColor={Theme.colors._1}
        style={{position: 'absolute'}}
      />
    </Flex>
  );
};

Avatar.Profile = function ProfileAvatar(props) {
  return <Avatar {...props} mt={-(AVATAR_SIZE / 2) - Theme.gutter.md} />;
};
