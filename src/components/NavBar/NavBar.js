import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SImage from 'react-native-scalable-image';

import images from '../../assets/images/index'
import styles from './style';

const NavBar = () => (
    <View style={styles.navBar}>
        <View style={styles.navBarLeft}>
            <TouchableOpacity style={styles.backBtn}><SImage height={17} source={images.arrow}/></TouchableOpacity>
            <Text style={styles.navTitle}>League of Legend</Text>
        </View>
        <TouchableOpacity><SImage width={20} source={images.menu}/></TouchableOpacity>
    </View>
);

export default NavBar;