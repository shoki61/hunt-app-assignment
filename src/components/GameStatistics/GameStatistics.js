import React from 'react';
import { View, Text } from 'react-native';
import SImage from 'react-native-scalable-image';
import ProgressCircle from 'react-native-progress-circle'

import LolLevelPlat from '../../assets/images/lol_level_plat.svg';
import LolRnakGold from '../../assets/images/lol_rank_gold_4.svg';
import ChampionInverted from '../../assets/images/champion_inverted.svg';
import ScoreInverted from '../../assets/images/score_inverted.svg';
import SupportInverted from '../../assets/images/support_inverted.svg';
import styles from './style';

const GameStatistics = () => (
    <View style={styles.gameStatistics}>
        <Text style={styles.mostRecent}>Most Recent 20 Games</Text>
        <View style={styles.gameStatisticsInfo}>
            <View style={{flexDirection:'row'}}>
                <View style={styles.itemContainer}>
                    <View style={styles.levelIcon}>
                        <LolLevelPlat/>
                        <Text style={styles.level}>III</Text>
                    </View>
                    <Text style={styles.bottomText}>Solo/Duo</Text>
                </View>

                <View style={styles.itemContainer}>
                    <View style={styles.levelIcon}>
                        <LolRnakGold/>
                        <Text style={styles.level}>IV</Text>
                    </View>
                    <Text style={styles.bottomText}>Flex</Text>
                </View>
            </View>

            <View style={styles.itemContainer}>
                <ProgressCircle
                    percent={60}
                    radius={30}
                    borderWidth={9}
                    color="#06AE43"
                    shadowColor="#555"
                    bgColor="#000"
                >
                    <Text style={styles.progressNumber}>60%</Text>
                </ProgressCircle>
                <Text style={styles.bottomText}>12W 8L</Text>
            </View>

            <View style={styles.itemContainer}>
                <View style={{flexDirection:'row', marginBottom:10}}>
                    <View style={styles.scoreContainer}>
                        <Text style={styles.scoreNumber}>12.8</Text>
                        <ScoreInverted width={13} height={13}/>
                    </View>
                    <Text style={styles.scoreNumber}> / </Text>
                    <View style={styles.scoreContainer}>
                        <Text style={styles.scoreNumber}>2.7</Text>
                        <ChampionInverted width={13} height={13}/>
                    </View>
                    <Text style={styles.scoreNumber}> / </Text>
                    <View style={styles.scoreContainer}>
                        <Text style={styles.scoreNumber}>24.3</Text>
                        <SupportInverted width={16} height={13}/>
                    </View>
                </View>
                <Text style={styles.bottomText}>KDA</Text>
            </View>
        </View>
    </View>
);

export default GameStatistics;