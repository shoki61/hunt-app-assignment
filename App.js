import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import Profile from './src/containers/Profile/Profile';

const App = () => (
  <Fragment>
    <StatusBar backgroundColor='#171717'/>
    <Profile/>
  </Fragment>
);

export default App;