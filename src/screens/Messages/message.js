import React from 'react'
import { View, Text } from 'react-native'
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
    Dot
  } from './styles';
  import {useNavigation} from "@react-navigation/native";
const Message = ({item}) => {
    const navigation = useNavigation();
    return (
        <Card onPress={() => navigation.navigate('Chats', {userName: item.userName})}>
        <UserInfo>
          <UserImgWrapper>
            <UserImg source={item.userImg} />
            <Dot />
          </UserImgWrapper>
          <TextSection>
            <UserInfoText>
              <UserName>{item.userName}</UserName>
              <PostTime >{item.messageTime}</PostTime>
            </UserInfoText>
            <MessageText numberOfLines={1}>{item.messageText}</MessageText>
          </TextSection>
        </UserInfo>
      </Card>
    )
};

export default Message;
