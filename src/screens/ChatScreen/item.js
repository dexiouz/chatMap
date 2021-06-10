import React  from 'react';
import {
  View,
  Text, 
  StyleSheet, 
  Image,
} from 'react-native'; 
const BORDER_RADIUS = 16; 
const userId = '3';
 
const Item = ({
    name,
    time,
    comment, 
    currentUserId, 
  }) => {
    const isSamePerson = currentUserId === userId;  
    return (
      <View style={styles.container}>
        <Text style={styles.date}>{time}</Text>
        <View style={[isSamePerson ? styles.user : styles.other]}>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/users/user-1.jpg')}
            resizeMode="cover"
          />
          <View
            style={[isSamePerson ? styles.userComments : styles.otherComments]}>
            <Text style={{color: isSamePerson ? '#fff' : '#000000'}}>
              {comment}
            </Text>
          </View>
        </View>
      </View>
    );
  };

export default Item;

const styles = StyleSheet.create({  
    container: {
        marginBottom: 20,
         width: '92%', 
         alignSelf: 'center'
        }, 
  date: {
    fontSize: 9,
    paddingBottom: 5,
    paddingTop: 2,
    color: 'gray',
    textAlign: 'center',
  },   
  tinyLogo: {
    width: 30,
    height: 30,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  other: {
    width: '100%',
    flexDirection: 'row',
  },
  user: {
    width: '100%',
    flexDirection: 'row-reverse',
  },
  otherComments: {
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    padding: 10,
    backgroundColor: '#e5e5e5',
    marginLeft: 7,
    width: '70%',
  },
  userComments: {
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    padding: 10,
    backgroundColor: '#2574FF',
    marginRight: 7,
    width: '70%',
  },
});
