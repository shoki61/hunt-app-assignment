import React from 'react';
import { View } from 'react-native';

import MatchTab from './MatchTab/MatchTab';
import MatchList from './MatchList/MatchList';
import styles from './style';

const MatchHistory = () => (
    <View style={styles.matchHistory}>
        <MatchTab/>
        <MatchList/>
    </View>
);

export default MatchHistory;