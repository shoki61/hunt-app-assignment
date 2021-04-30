import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import SImage from 'react-native-scalable-image';

import images from '../../assets/images';
import Group_546 from '../../assets/images/Group_546.svg';
import styles from './style';

const width = Dimensions.get('screen').width;

const MainHeader = () => (
    <View style={styles.mainHeader}>
        <SImage style={{position:'absolute'}} width={width} source={images.profileBackImg}/>
        <View style={styles.mainHeaderInfo}>
            <View style={styles.profileContainer}>
                <View style={styles.profileImg}>
                    <SImage borderRadius={100} width={110} source={images.profile}/>
                    <Group_546 width={25} height={25} style={styles.editProfileImg}/>
                </View>
                <Text style={styles.profileName}>Kötü Çocuk <Text style={styles.profileLabel}>#EUW</Text></Text>
            </View>

            <View>

            </View>

            <View>

            </View>
        </View>
    </View>
);

export default MainHeader;