import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';

import {Messages} from './data';
import Message from './message';
import {Container} from './styles';
const index = ({navigation}) => {
  return (
    <View style={{flex: 1, paddingHorizontal: 10, backgroundColor: "#ffffff"}}>
     <Header title="Messages"/>
		  	<SearchInput placeholder="Search message, name..."/>
        <Container>
      <FlatList 
        data={Messages}
        keyExtractor={item=>item.id}
        renderItem={({item}) => <Message item={item} />}
      />
    </Container>
    </View>
  );
  
};

export default index;

const styles = StyleSheet.create({});
