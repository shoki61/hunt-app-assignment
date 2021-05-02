import React from 'react';
import { View, Text, Image } from 'react-native';
import SImage from 'react-native-scalable-image';

import SandTimer from '../../assets/images/sand_timer.svg';
import ChampionInverted from '../../assets/images/champion_inverted.svg';
import RunesInverted from '../../assets/images/runes_inverted.svg';
import ScoreInverted from '../../assets/images/score_inverted.svg';
import ItemsInverted from '../../assets/images/items_inverted.svg';
import MinionInverted from '../../assets/images/minion_inverted.svg';
import PositionInverted from '../../assets/images/position_inverted.svg';
import Group_506 from '../../assets/images/Group_506.svg';
import MiddleInverted from '../../assets/images/middle_inverted.svg';
import TopInverted from '../../assets/images/top_inverted.svg';
import SupportInverted from '../../assets/images/support_inverted.svg';
import images from '../../assets/images';


import styles from './style';


const historyData = [
    {
        col1:{
            case:'VICTORY',
            time:'23:19 min',
            date:'10h ago'
        },
        col2:<MiddleInverted/>,
        col3:images.character2,
        col4:images.group522,
        col5:{
            iconTop:images.lolRune1,
            iconBottom:images.lolRune4
        },
        col6:{
            numberTop:'11/1/11',
            numberBottom:'22.0'
        },
        col7:images.image52,
        col8: '113',
        col9: '6930'
    },
    {
        col1:{
            case:'VICTORY',
            time:'20:29 min',
            date:'12h ago'
        },
        col2: <SupportInverted/>,
        col3:images.character3,
        col4:images.group522,
        col5:{
            iconTop:images.lolRune1,
            iconBottom:images.lolRune4
        },
        col6:{
            numberTop:'11/14/1',
            numberBottom:'2.0'
        },
        col7:images.image51,
        col8: '113',
        col9: '6930'
    },
    {
        col1:{
            case:'VICTORY',
            time:'34:09 min',
            date:'yesterday'
        },
        col2:<TopInverted/>,
        col3:images.character1,
        col4:images.group521,
        col5:{
            iconTop:images.lolRune1,
            iconBottom:images.lolRune3
        },
        col6:{
            numberTop:'14/12/13',
            numberBottom:'4.3'
        },
        col7:images.image52,
        col8: '113',
        col9: '6930'
    },
    {
        col1:{
            case:'VICTORY',
            time:'17:13 min',
            date:'yesterday'
        },
        col2:<MiddleInverted/>,
        col3:images.character2,
        col4:images.group521,
        col5:{
            iconTop:images.lolRune4,
            iconBottom:images.lolRune4
        },
        col6:{
            numberTop:'11/1/11',
            numberBottom:'22.0'
        },
        col7:images.image52,
        col8: '113',
        col9: '6930'
    },
    {
        col1:{
            case:'VICTORY',
            time:'23:19 min',
            date:'10h ago'
        },
        col2:<MiddleInverted/>,
        col3:images.character1,
        col4:images.group522,
        col5:{
            iconTop:images.lolRune1,
            iconBottom:images.lolRune4
        },
        col6:{
            numberTop:'11/1/11',
            numberBottom:'22.0'
        },
        col7:images.image52,
        col8: '113',
        col9: '6930'
    }
];


const data = [1, 2, 3, 4, 5];
const MatchHistory = () => (
    <View style={styles.matchHistory}>

        <View style={styles.tab}>
            <SandTimer width={12} height={12}/>
            <PositionInverted width={12} height={12}/>
            <ChampionInverted width={12} height={12}/>
            <RunesInverted width={12} height={12}/>
            <ScoreInverted width={12} height={12}/>
            <ItemsInverted width={12} height={12}/>
            <MinionInverted width={12} height={12}/>
            <Group_506 width={12} height={12}/>
        </View>
        <View>
            <View style={styles.matchHistoryList}>
                <View style={styles.col1}>
                    <Text style={styles.colText}>VICTORY</Text>
                    <Text style={styles.colText}>23:19 min</Text>
                    <Text style={styles.colText}>10h ago</Text>
                </View>
                <MiddleInverted width={15} height={15}/>
                <View style={styles.col3Container}>
                    <View style={{marginRight:5}}>
                        <Image style={styles.col3Img} source={images.lolChar2}/>
                        <Text style={styles.col3Number}>17</Text>
                    </View>
                    <SImage source={images.group521}/>
                </View>
                <View>
                    <SImage source={images.lolRune1}/>
                    <SImage source={images.lolRune4}/>
                </View>
                <View style={styles.col5Container}>
                    <Text style={styles.colText}>11/1/11</Text>
                    <Text style={[styles.colText,{opacity:.5}]}>22.0</Text>
                </View>
                <SImage width={40} source={images.image51}/>
                <Text style={styles.colText}>113</Text>
                <Text style={[styles.colText,{marginLeft:7}]}>6930</Text>
            </View>
        </View>
    </View>
);

export default MatchHistory;