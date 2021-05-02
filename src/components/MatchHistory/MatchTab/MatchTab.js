import React from 'react';
import { View, Text } from 'react-native';

import SandTimer from '../../../assets/images/sand_timer.svg';
import ChampionInverted from '../../../assets/images/champion_inverted.svg';
import RunesInverted from '../../../assets/images/runes_inverted.svg';
import ScoreInverted from '../../../assets/images/score_inverted.svg';
import ItemsInverted from '../../../assets/images/items_inverted.svg';
import MinionInverted from '../../../assets/images/minion_inverted.svg';
import PositionInverted from '../../../assets/images/position_inverted.svg';
import Group_506 from '../../../assets/images/Group_506.svg';
import styles from './style';

const MatchTab = () => (
    <View style={styles.tab}>
        <View style={[styles.center,{width:'15%'}]}><SandTimer width={13} height={13}/></View>
        <View style={[styles.center,{width:'9%'}]}><PositionInverted width={13} height={13}/></View>
        <View style={[styles.center,{width:'17%'}]}><ChampionInverted width={13} height={13}/></View>
        <View style={[styles.center,{width:'8%'}]}><RunesInverted width={13} height={13}/></View>
        <View style={[styles.center,{width:'18%'}]}><ScoreInverted width={13} height={13}/></View>
        <View style={[styles.center,{width:'15%'}]}><ItemsInverted width={13} height={13}/></View>
        <View style={[styles.center,{width:'11%'}]}><MinionInverted width={13} height={13}/></View>
        <View style={[styles.center,{flex:1}]}><Group_506 width={13} height={13}/></View>
    </View>
)

export default MatchTab;