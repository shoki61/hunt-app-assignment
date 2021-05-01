import React from 'react';
import {View, Text} from 'react-native';

import NavBar from '../../components/NavBar/NavBar';
import MainHeader from '../../components/MainHeader/MainHeader';
import GameStatistics from '../../components/GameStatistics/GameStatistics';
import MostPlayed from '../../components/MostPlayed/MostPlayed';
import MatchHistory from '../../components/MatchHistory/MatchHistory';
import styles from './style';

const Profile = () => {
    return (
        <View style={styles.container} >
            <NavBar/>
            <MainHeader/>
            <View style={styles.line}/>
            <GameStatistics/>
            <View style={styles.line}/>
            <MostPlayed/>
            <View style={styles.line}/>
            <MatchHistory/>
        </View>
    );
};

export default Profile;