import React from 'react';
import {View, Text} from 'react-native';

import NavBar from '../../components/NavBar/NavBar';
import MainHeader from '../../components/MainHeader/MainHeader';
import GameStatistics from '../../components/GameStatistics/GameStatistics';
import MostPlayed from '../../components/MostPlayed/MostPlayed';
import styles from './style';

const Profile = () => {
    return (
        <View style={styles.container} >
            <NavBar/>
            <MainHeader/>
            <View style={styles.line}></View>
            <GameStatistics/>
            <View style={styles.line}></View>
            <MostPlayed/>
        </View>
    );
};

export default Profile;