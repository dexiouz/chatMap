import React from 'react';
import {View, Modal} from 'react-native';
import useTheme from '../../hooks/useTheme';
import RefIcon from '../Icons';
import Flex from '../Layouts/Flex';
import {Paragraph} from '../Typography';
import {TapIcon} from '../Buttons';

export const HalfWay = ({visible, onClose, children, containerStyle}) => {
  const {gutter, responsive, colors} = useTheme();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            height: '50%',
            borderTopLeftRadius: responsive([12, 24]),
            borderTopRightRadius: responsive([12, 24]),
            padding: gutter.padded,
            justifyContent: 'space-between',
            shadowColor: colors._7,
            shadowOffset: {
              width: 0,
              height: -12,
            },
            shadowOpacity: 0.2,
            shadowRadius: 6,
            ...containerStyle,
          }}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export const ModalHeader = ({title, onClose}) => {
  const {colors} = useTheme();

  return (
    <Flex.Row alignItems="flex-end" justifyContent="space-between" fullwidth>
      <Paragraph bold style={{color: colors._4}}>
        {title || '<MODAL_HEADER_TITLE>'}
      </Paragraph>
      <TapIcon
        Family={RefIcon}
        name="x"
        size={20}
        color={colors._7}
        style={{
          width: 24,
          height: 24,
        }}
        onPress={onClose}
      />
    </Flex.Row>
  );
};
