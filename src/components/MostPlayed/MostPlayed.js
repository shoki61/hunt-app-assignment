import React from 'react';
import { View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import SImage from 'react-native-scalable-image';

import images from '../../assets/images';
import styles from './style';

const MostPlayed = () => (
    <View style={styles.mostPlayed}>
        <View style={styles.mostPlayedItems}>
            <View style={styles.progressItemContainer}>
                <View>
                    <ProgressCircle
                        percent={35}
                        radius={47}
                        borderWidth={4}
                        color="#06AE43"
                        shadowColor="#303030"
                        bgColor="#000"
                    >
                        <SImage source={images.character1}/>
                    </ProgressCircle>
                    <View style={styles.numberContainer}>
                            <Text style={styles.number}>7W{"\n"}13L</Text>
                    </View>
                </View>
                <Text style={styles.numbers}>12.8/5.6/7.8</Text>
                <Text style={styles.KDA}>KDA</Text>
            </View>

            <View style={styles.progressItemContainer}>
                <View>
                    <ProgressCircle
                        percent={70}
                        radius={60}
                        borderWidth={4}
                        color="#06AE43"
                        shadowColor="#303030"
                        bgColor="#000"
                    >
                        <SImage width={110} source={images.character2}/>
                    </ProgressCircle>
                    <View style={styles.numberContainer}>
                        <Text style={styles.number}>12W{"\n"}8L</Text>
                    </View>
                </View>
                <Text style={styles.numbers}>12.8/5.6/7.8</Text>
                <Text style={styles.KDA}>KDA</Text>
            </View>

            <View style={styles.progressItemContainer}>
                <View>
                    <ProgressCircle
                        percent={60}
                        radius={47}
                        borderWidth={4}
                        color="#06AE43"
                        shadowColor="#303030"
                        bgColor="#000"
                    >
                        <SImage source={images.character3}/>
                    </ProgressCircle>
                    <View style={styles.numberContainer}>
                            <Text style={styles.number}>10W{"\n"}10L</Text>
                    </View>
                </View>
                <Text style={styles.numbers}>12.8/5.6/7.8</Text>
                <Text style={styles.KDA}>KDA</Text>
            </View>
        </View>
        <Text style={styles.mostPlayedText}>Most Played Champions</Text>
    </View>
);

export default MostPlayed;