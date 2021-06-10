import React from 'react';
import R from 'ramda';
import styled from 'styled-components/native';
import {Paragraph, Lead} from '../Typography';
import useTheme from '../../hooks/useTheme';
import {useController} from 'react-hook-form';
import {responsive, colors, propIs, theme} from '../style_helpers';
import {TextInput as TextInput_, View} from 'react-native';
import Theme from '../../styles/Theme';

const StyledInput = styled(TextInput_)`
  color: ${colors('text')};
  font-size: ${responsive([16])}px;
  border-bottom-width: 2px;
  border-bottom-color: ${colors('_3')};
  padding: ${responsive([5, 12])}px ${responsive([0])}px;

  ${propIs(
    'hasMessage',
    x => x === false,
    `
	  	margin-bottom: 15px;
	  `,
  )}

  ${propIs(
    'border',
    R.equals(false),
    `
      border: solid 0px transparent;
    `,
  )}
`;

export const TextInput = props => {
  return (
    <StyledInput
      autoCapitalize="none"
      placeholderTextColor="#78849E"
      {...props}
    />
  );
};

export const LabelInput = ({label, message, ...props}) => {
  return (
    <View style={{width: '100%'}}>
      {!R.isNil(label) && (
        <Lead
          style={{
            fontWeight: '500',
            color: Theme.colors._2,
            fontSize: 14,
            marginBottom: -4,
          }}>
          {label}
        </Lead>
      )}
      <TextInput hasMessage={!!message} {...props} />
      {message && <View style={{marginBottom: 15}}>{message}</View>}
    </View>
  );
};

export const ErrorMessage = ({children}) => {
  const {colors: _colors} = useTheme();

  return (
    <Paragraph small style={{marginTop: 4, color: _colors._6}}>
      {children}
    </Paragraph>
  );
};

export const LabelControlledInput = ({name, control, ...props}) => {
  const {
    field: {ref, onChange, ...inputProps},
    // meta: { invalid, isTouched, isDirty },
  } = useController({
    name,
    control,
    defaultValue: '',
  });

  return <LabelInput {...props} {...inputProps} onChangeText={onChange} />;
};
