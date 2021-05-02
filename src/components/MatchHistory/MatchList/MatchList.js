import React from 'react';
import { View, Text, Image } from 'react-native';
import SImage from 'react-native-scalable-image';

import images from '../../../assets/images';
import { historyData } from '../../../data';

import styles from './style';

const MatchList = () => (
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
                    <SImage source={item.col3.right}/>
                </View>
                <View style={[styles.center,{width:'8%'}]}>
                    <SImage width={18} source={item.col4.imgTop}/>
                    <SImage width={18} source={item.col4.imgBottom}/>
                </View>
                <View style={[styles.col5Container,{width:'18%'}]}>
                    <Text style={styles.colText}>{item.col5.numberTop}</Text>
                    <Text style={[styles.colText,{opacity:.5}]}>{item.col5.numberBottom}</Text>
                </View>
                <View style={[styles.center,{width:'15%'}]}>
                    <SImage width={50} source={item.col6}/>
                </View>
                <View style={{width:'11%'}}>
                    <Text style={styles.colText}>{item.col7}</Text>
                </View>
                <View style={{flex:1}}>
                   <Text style={styles.colText}>{item.col8}</Text> 
                </View>
            </View>)}
    </View>
);

export default MatchList;