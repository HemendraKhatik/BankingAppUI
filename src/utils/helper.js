import {scale} from 'react-native-size-matters';

import {NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? scale(20) : scale(StatusBarManager.HEIGHT);

export {STATUSBAR_HEIGHT}