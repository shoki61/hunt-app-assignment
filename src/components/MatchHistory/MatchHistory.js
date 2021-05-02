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
import MatchTab from './MatchTab/MatchTab';
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
        col3:{
            left:images.lolRune1,
            level:17,
            right: images.group332
        },
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
];

const MatchHistory = () => (
    <View style={styles.matchHistory}>
        <MatchTab/>
        <View>
            {historyData.map(item => <View key={item.col1.date} style={styles.matchHistoryList}>
                <View style={[styles.col1,{width:'15%'}]}>
                    <Text style={styles.colText}>{item.col1.case}</Text>
                    <Text style={styles.colText}>{item.col1.time}</Text>
                    <Text style={styles.colText}>{item.col1.date}</Text>
                </View>
                <View style={[styles.center,{width:'9%'}]}>
                   {item.col2}
                </View>
                <View style={[styles.col3Container,{width:'17%'}]}>
                    <View style={{marginRight:5}}>
                        <Image style={styles.col3Img} source={item.col3.left}/>
                        <Text style={styles.col3Number}>{item.col3.level}</Text>
                    </View>
                    <SImage source={item.col4}/>
                </View>
                <View style={[styles.center,{width:'8%'}]}>
                    <SImage width={18} source={images.lolRune1}/>
                    <SImage width={18} source={images.lolRune4}/>
                </View>
                <View style={[styles.col5Container,{width:'18%'}]}>
                    <Text style={styles.colText}>11/1/11</Text>
                    <Text style={[styles.colText,{opacity:.5}]}>22.0</Text>
                </View>
                <View style={[styles.center,{width:'15%'}]}>
                    <SImage width={50} source={images.image51}/>
                </View>
                <View style={{width:'11%'}}>
                    <Text style={styles.colText}>113</Text>
                </View>
                <View style={{flex:1}}>
                   <Text style={styles.colText}>6930</Text> 
                </View>
            </View>)}
        </View>
    </View>
);

export default MatchHistory;