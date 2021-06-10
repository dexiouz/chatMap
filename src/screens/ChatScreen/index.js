import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';
import Feather from 'react-native-vector-icons/Feather';
import Item from './item';
import {data} from './data';

const BORDER_RADIUS = 16;
const ICON_SIZE = 30;

const Comments = ({route}) => {
  const username = route?.params?.userName;
  const [text, setText] = useState('');
  const [onFocus, setOnFocus] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={username} leftIcon rightIcon />
      <FlatList
        keyExtractor={item => item.id}
        refreshing={true}
        data={data}
        renderItem={({item}) => (
          <Item
            name={item.email}
            image={item.image}
            comment={item.comment}
            time={item.time}
            currentUserId={item.id}
            commentAuthor={item.id}
            createdAt={item.createdAt}
          />
        )}
      />

      <View style={styles.inputWrapper }>
        <View
          style={{
            width: onFocus ? '10%' : '35%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Ionicons
              name="add-circle-outline"
              size={ICON_SIZE}
              color="#2574FF"
            />
          </TouchableOpacity>
          {onFocus ? null : (
            <>
              <TouchableOpacity>
                <AntDesign name="camerao" size={ICON_SIZE} color="#2574FF" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="picture" size={ICON_SIZE} color="#2574FF" />
              </TouchableOpacity>
            </>
          )}
        </View>
        <View
          style={[onFocus ? styles.input_onFocus : styles.input]}>
          <TextInput
            placeholder="Aa"
            style={styles.inputInner}
            onChangeText={text => setText(text)}
            onBlur={() => setOnFocus(false)}
            value={text}
            editable
            multiline
            name="comment"
            onFocus={() => setOnFocus(true)}
          />
          <TouchableOpacity
            style={styles.send}
            onPress={() => console.log(text, 'text')}>
            <Feather name="send" color="#2574FF" size={26} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10, 
  }, 
  
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: '#101E60',
    backgroundColor: '#fff',
    padding: 10
  },
  input: {
    backgroundColor: '#e5e5e5',
    borderRadius: BORDER_RADIUS - 6,
    flexDirection: 'row',
    width: '60%'
  },
  input_onFocus: { 
    borderRadius: BORDER_RADIUS - 6,
    flexDirection: 'row',
    width:  '90%',
    backgroundColor: '#fff',
    borderWidth: 1, 
    borderColor: "#2574FF"
  },
  inputInner: {
    paddingLeft: 10,
    height: 40,
    width: '80%',
  },
  send: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%'
  },    
});
