import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

 const elevationShadowStyle = (elevation) => {
	return {
	  elevation,
	  shadowColor: 'black',
	  shadowOffset: {width: 0, height: 0.5 * elevation},
	  shadowOpacity: 0.3,
	  shadowRadius: 0.8 * elevation,
	};
  };

export default function index(props) {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <AntDesign name="search1" size={24} color='#9393AA' />
      </View>
      <TextInput
        {...props}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 10, 
    alignItems: 'center',
	borderRadius: 5,
	...elevationShadowStyle(2)
  },
  input: { 
    height: '100%',
    fontSize: 18,
	marginLeft: 10
  },
});
