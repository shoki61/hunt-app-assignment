import React from 'react';
import { View, Text } from 'react-native';
import SImage from 'react-native-scalable-image';

import SandTimer from '../../assets/images/sand_timer.svg';
import ChampionInverted from '../../assets/images/champion_inverted.svg';
import RunesInverted from '../../assets/images/runes_inverted.svg';
import ScoreInverted from '../../assets/images/score_inverted.svg';
import ItemsInverted from '../../assets/images/items_inverted.svg';
import MinionInverted from '../../assets/images/minion_inverted.svg';
import PositionInverted from '../../assets/images/position_inverted.svg';
import Group_506 from '../../assets/images/Group_506.svg';


import styles from './style';

const MatchHistory = () => (
    <View style={styles.matchHistory}>
        <View style={styles.tab}>
            <SandTimer width={15} height={15}/>
            <PositionInverted width={15} height={15}/>
            <ChampionInverted width={15} height={15}/>
            <RunesInverted width={15} height={15}/>
            <ScoreInverted width={15} height={15}/>
            <ItemsInverted width={15} height={15}/>
            <MinionInverted width={15} height={15}/>
            <Group_506 width={15} height={15}/>
        </View>
        <View>
            
        </View>
    </View>
);

export default MatchHistory;