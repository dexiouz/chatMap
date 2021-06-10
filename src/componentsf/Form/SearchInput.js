import React from 'react';
// import R from 'ramda';
import styled, {css} from 'styled-components/native';
// import useTheme from '../../hooks/useTheme';
// import {useController} from 'react-hook-form';
import {  colors, withProp} from '../style_helpers';
import {TextInput} from 'react-native';
import Flex from '../Layouts/Flex';
import Search from '../Icons/Search';
import Theme from '../../styles/Theme';

const Wrapper = styled(Flex.Row)`
  width: 100%;
  border-width: 1px;
  border-radius: 8px;
  background-color: white;
  border-color: transparent;
  box-shadow: 0px 10px 20px rgba(0, 64, 128, 0.1);
  padding: 10px;

  ${withProp(
    'focused',
    css`
      border-color: ${colors('_4')};
    `,
  )}
`;

const StyledInput = styled(TextInput)`
  flex: 1;
  color: red;
  background-color: transparent;
  padding-left: 10px;
  font-size: 10px;
`;

export const SearchInput = props => {
  const [focus, setFocus] = React.useState(false);

  return (
    <Wrapper focused={focus} alignItems="center">
      <Search />
      <StyledInput
        autoCapitalize="none"
        onFocus={evt => {
          setFocus(true);
          props.onFocus && props.onFocus(evt);
        }}
        onBlur={evt => {
          setFocus(false);
          props.onBlur && props.onBlur(evt);
        }}
        placeholderTextColor={Theme.colors._7}
        {...props}
      />
    </Wrapper>
  );
};

export default SearchInput;
