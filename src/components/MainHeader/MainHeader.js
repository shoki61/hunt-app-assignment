import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import SImage from 'react-native-scalable-image';

import images from '../../assets/images';
import Group_546 from '../../assets/images/Group_546.svg';
import Group_332 from '../../assets/images/Group_332.svg';
import Group_562 from '../../assets/images/Group_562.svg';
import styles from './style';

const width = Dimensions.get('screen').width;

const MainHeader = () => (
    <View style={styles.mainHeader}>
        <SImage style={styles.backImg} width={width} source={images.profileBackImg}/>
        <View style={styles.mainHeaderInfo}>
            <View style={[styles.itemsContainer]}>
                <View style={styles.profileImg}>
                    <SImage borderRadius={100} width={110} source={images.profile}/>
                    <Group_546 width={25} height={25} style={styles.editProfileImg}/>
                </View>
                <Text style={styles.profileName}>Kötü Çocuk <Text style={styles.profileLabel}>#EUW</Text></Text>
            </View>
                
            <View style={styles.itemsContainer}>
                <Group_332 width={70} height={70}/>
                <Text style={styles.fnatic}>Fnatic</Text>
            </View>

            <View style={styles.itemsContainer}>
                <Group_562 width={40} height={40}/>
                <Text style={styles.badge}>
                    100th Player {"\n"}
                    Badge
                </Text>
            </View>
        </View>
    </View>
);

export default MainHeader;