/**
 * @format
 */
 import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Route from './src/navigation/index'; 
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Route);
