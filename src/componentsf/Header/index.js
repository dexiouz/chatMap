import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const FONT_SIZE = 34;

export default function index({leftIcon, rightIcon, title}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => null}>
        {leftIcon ? (
          <MaterialCommunityIcons name="keyboard-backspace" size={FONT_SIZE} />
        ) : null}
      </TouchableOpacity>

      <Text style={styles.title}> {title} </Text>
      <TouchableOpacity onPress={() => null}>
        {rightIcon ? <Feather name="more-horizontal" size={FONT_SIZE} /> : null}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    marginHorizontal: 10,
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
	title: {fontSize: 17, fontWeight: 'bold'}
});
