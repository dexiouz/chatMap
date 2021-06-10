import React from 'react';
import styled, {css} from 'styled-components/native';
import t from 'prop-types';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {SmallText, ButtonText} from '../Typography';
import useTheme from '../../hooks/useTheme';
import Flex from '../Layouts/Flex';
import {
  colors,
  withProp,
  propOr,
  propIs,
  responsive,
  fullwidth,
} from '../style_helpers';
// import Feather from 'react-native-vector-icons/Feather';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const disabled = ({disabled}) =>
  disabled === true
    ? css`
        opacity: 0.5;
      `
    : '';

const noShadow = ({shadow}) =>
  shadow === false
    ? css`
        box-shadow: 0px 0px 0px transparent;
      `
    : '';

const _Button = styled(TouchableOpacity).attrs({
  activeOpacity: 0.75,
})`
  elevation: 0;
  min-height: 50px;
  border-radius: 16px;
  flex-direction: row;
  padding: ${responsive([8, 12])}px ${responsive([16, 16])}px;

  margin-top: ${propOr('mt', 0)}px;
  margin-left: ${propOr('ml', 0)}px;
  margin-right: ${propOr('mr', 0)}px;
  margin-bottom: ${propOr('mb', 0)}px;

  ${withProp(
    'large',
    css`
      padding: 16px 24px;
    `,
  )}

  ${withProp(
    'small',
    css`
      min-height: auto;
      padding: 10px 15px;
    `,
  )}

  ${withProp(
    'rounded',
    css`
      border-radius: 16px;
    `,
  )}

  ${disabled}

  ${fullwidth}
`;

const StyledPrimaryButton = styled(_Button)`
  background-color: ${colors('primary')};
  border-color: rgb(63, 172, 157);
  box-shadow: 0 10px 20px ${colors('_1')};
  justify-content: center;

  ${withProp(
    'outline',
    css`
      background-color: transparent;
      border: solid 1px ${colors('primary')};
      box-shadow: none;
    `,
  )}

  ${withProp(
    'mx',
    css`
      margin-right: ${propOr('mx', 0)}px;
      margin-left: ${propOr('mx', 0)}px;
    `,
  )}

  ${withProp(
    'my',
    css`
      margin-top: ${propOr('my', 0)}px;
      margin-bottom: ${propOr('my', 0)}px;
    `,
  )}

  ${noShadow}
`;

export const Button = ({text, onPress, ...props}) => {
  const {colors} = useTheme();

  return (
    <StyledPrimaryButton onPress={onPress} {...props}>
      <WithIcon
        Icon={props.Icon}
        small={props.small}
        loading={props.loading}
        LoadIncidator={<ActivityIndicator color="#ffffff" size="small" />}
        Text={text}
        textColor={props.outline ? colors.primary : 'white'}
      />
    </StyledPrimaryButton>
  );
};

Button.propTypes = {
  text: t.oneOfType([t.node, t.string]).isRequired,
  onClick: t.func,
};

Button.defaultProps = {
  styles: {
    buttonContainerStyle: {},
    buttonTextStyle: {},
  },
  buttonText: '',
  onClick: () => {},
};

const StyledWhiteButton = styled(_Button)`
  background-color: white;
  justify-content: center;
  box-shadow: 0 6px 3px rgba(0, 0, 0, 0.23);
  ${noShadow}

  ${withProp(
    'outline',
    css`
      background-color: transparent;
      border: solid 1px ${colors('primary')};
      box-shadow: none;
    `,
  )}
`;

const WithIcon = ({loading, Icon, Text, LoadIncidator, ...props}) => {
  return (
    <Flex.Row
      alignItems="center"
      justifyContent="center"
      style={{width: 'auto', alignSelf: 'center'}}>
      <Flex style={{flexShrink: 0}}>
        {Icon && (loading ? LoadIncidator : Icon)}
      </Flex>
      <ButtonText
        small={props.small}
        style={{
          textAlign: 'center',
          marginLeft: Icon ? 5 : 0,
          color: props.textColor,
        }}>
        {Text}
      </ButtonText>
    </Flex.Row>
  );
};

export const WhiteButton = ({text, Icon, onPress, ...props}) => {
  const {colors} = useTheme();

  return (
    <StyledWhiteButton onPress={onPress} {...props}>
      <WithIcon
        loading={props.loading}
        small={props.small}
        Icon={Icon}
        Text={text}
        LoadIncidator={
          <ActivityIndicator color={colors.primary} size="small" />
        }
        textColor={props.outline ? colors.primary : colors.primary}
      />
    </StyledWhiteButton>
  );
};

WhiteButton.propTypes = {
  onPress: t.func,
  text: t.string.isRequired,
};

const StyledGhostButton = styled(_Button)`
  box-shadow: none;
`;

const GhostButton = ({text, onPress, textColor, ...props}) => {
  const {colors} = useTheme();

  return (
    <StyledGhostButton onPress={onPress} {...props}>
      <WithIcon
        loading={props.loading}
        small={props.small}
        LoadIncidator={
          <ActivityIndicator color={colors.primary} size="small" />
        }
        Icon={props.Icon}
        Text={text}
        textColor={textColor || colors.primary}
      />
    </StyledGhostButton>
  );
};

Button.White = WhiteButton;
Button.Ghost = GhostButton;
Button.Cancel = styled(GhostButton).attrs({
  textStyle: {color: 'crimson'},
})``;

export const SeeMore = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <SmallText>SEE MORE</SmallText>
      {/** Chevron right*/}
    </View>
  </TouchableOpacity>
);

export const BackButton = ({text, onPress, textColor, bgColor}) => {
  const {colors, responsive, gutter} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingRight: 8,
        borderRadius: 17,
        paddingVertlical: 5,
        backgroundColor: bgColor || 'beige',
        marginLeft: responsive([gutter.sm, gutter.SPACING]),
      }}>
      <Flex.Row alignItems="center" justifyContent="flex-start">
        {/**<Feather
          size={25}
          name="chevron-left"
          color={textColor || colors._3}
          style={{
            paddingLeft: 0,
          }}
        />**/}
        <SmallText style={{color: textColor || colors._3, marginLeft: 5}}>
          {text || 'BACK'}
        </SmallText>
      </Flex.Row>
    </TouchableOpacity>
  );
};

export const TapIcon = ({Family, onPress, style = {}, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      <Family {...props} />
    </TouchableOpacity>
  );
};

export default Button;
