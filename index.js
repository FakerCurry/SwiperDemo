/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Basic from './flashview/Basic'
import Swiper from './flashview/Swiper'
// import Swiper2 from './flashview/Swiper2'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Swiper);
