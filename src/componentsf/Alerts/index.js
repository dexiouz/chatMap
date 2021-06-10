import React from 'react';
import t from 'prop-types';
import * as R from 'ramda';
import {TouchableOpacity, Text} from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';

import Flex from '../Layouts/Flex';
import {SmallText} from '../Typography';
import useTheme from '../../hooks/useTheme';

export const Alert = ({text, type = 'default'}) => {
  const {colors} = useTheme();

  const styleMap = {
    success: [colors._9, 'green', 'check'],
    warning: ['orange', 'yellow', 'alert-triangle'],
    default: [colors._4, colors.white, 'check-circle'],
    info: [colors._4, colors.white, 'info'],
    network: [colors._4, colors.white, 'wifi-off'],
    danger: [colors._6, colors.white, 'alert-triangle'],
  }[type];

  return (
    <Flex.Row
      alignItems="center"
      justifyContent="flex-start"
      style={{
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: styleMap[0],
        borderColor: styleMap[0],
      }}>
      <Text
        style={{
          color: styleMap[1],
          textAlign: 'center',
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}>
        {/* <Feather name={styleMap[2]} size={15} /> */}
        {text}
      </Text>
    </Flex.Row>
  );
};

export const ShowServerMessage = ({
  type,
  messages,
  keysAndDefault,
  variant,
  onRetry = () => {},
}) => {
  const {colors} = useTheme();
  const isReloadVariant = variant === 'retry';

  const makeIterable = R.unless(R.is(Array), R.toPairs);
  const getMessageFromKey = ([key, defaultMsg]) => [messages[key], defaultMsg];
  const renderMessage = ([msg, _default]) => {
    return msg === null ? null : (
      <Flex.Row key={msg} alignItems="center">
        <Alert
          key={_default}
          type={type}
          text={msg === 'SUCCESS' ? _default : msg}
        />
        {isReloadVariant && (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: colors._3,
              paddingHorizontal: 8,
              paddingVertical: 4,
              marginLeft: 10,
              borderRadius: 16,
            }}
            onPress={onRetry}>
            <SmallText style={{color: colors._3}}>RETRY</SmallText>
          </TouchableOpacity>
        )}
      </Flex.Row>
    );
  };

  return R.compose(
    R.map(R.compose(renderMessage, getMessageFromKey)),
    R.filter(([key]) => R.hasIn(key, messages)),
    makeIterable,
  )(keysAndDefault);
};

ShowServerMessage.propTypes = {
  messages: t.object.isRequired,
  keysAndDefault: t.oneOfType([t.array, t.object]).isRequired,
  variant: t.oneOf(['inline', 'danger', 'success']),
  type: t.oneOf(['danger', 'success', 'info', 'warning']),
};
