import React from 'react';
import t from 'prop-types';
import {View} from 'react-native';
import {HalfWay, ModalHeader} from '../Cards/Modal';
import DatePicker from 'react-native-date-picker';
import Button, {TapIcon} from '../Buttons';
import useTheme from '../../hooks/useTheme';

const DateSelect = ({
  date = new Date(Date.now() - 3600 * 5 * 365 * 1000 * 18),
  maximumDate = new Date(Date.now() - 3600 * 24 * 365 * 1000 * 18),
  minimumDate = new Date(1950, 0, 1),
  mode = 'date',
  onClose,
  onDatePicked,
  title,
  show,
}) => {
  const {colors} = useTheme();
  const [_date, setDate] = React.useState(date);

  return (
    <HalfWay
      visible={show}
      onClose={() => {
        onClose();
      }}
      containerStyle={{
        backgroundColor: colors.white,
        height: 350,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <ModalHeader
          title={title || 'Pick Date'}
          onClose={onClose ? onClose : undefined}
        />
        <DatePicker
          mode={mode}
          date={_date}
          androidVariant="iosClone"
          minimumDate={minimumDate}
          onDateChange={data => {
            setDate(data);
          }}
        />
        <Button
          small
          outline
          text="DONE"
          textColor={colors._1}
          shadow={false}
          onPress={() => {
            onClose();
            onDatePicked && onDatePicked(_date);
          }}
        />
      </View>
    </HalfWay>
  );
};

DateSelect.propTypes = {
  date: t.any.isRequired,
  maximumDate: t.any,
  minimumDate: t.any,
  mode: t.string.isRequired,
  onClose: t.func.isRequired,
  onDatePicked: t.func.isRequired,
  show: t.bool.isRequired,
};

export default DateSelect;
