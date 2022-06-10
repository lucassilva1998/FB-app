import React from 'react';
import Routes from './src/routes';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: Uncognized WebSocket']);
LogBox.ignoreLogs(['Warning: Failed prop type']);
LogBox.ignoreLogs(['Setting a timer for a long period of time']);

export default function App() {
  return <Routes />
}

