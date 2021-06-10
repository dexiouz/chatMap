// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from '../screens/Messages';
import ChatsScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="Chats" component={ChatsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;