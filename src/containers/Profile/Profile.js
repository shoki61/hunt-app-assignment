import React, { Fragment } from 'react';
import {View, ScrollView} from 'react-native';

import NavBar from '../../components/NavBar/NavBar';
import MainHeader from '../../components/MainHeader/MainHeader';
import GameStatistics from '../../components/GameStatistics/GameStatistics';
import MostPlayed from '../../components/MostPlayed/MostPlayed';
import MatchHistory from '../../components/MatchHistory/MatchHistory';
import styles from './style';

const Profile = () => {
    return (
            <Fragment>
                <NavBar/>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <MainHeader/>
                    <View style={styles.line}/>
                    <GameStatistics/>
                    <View style={styles.line}/>
                    <MostPlayed/>
                    <View style={styles.line}/>
                    <MatchHistory/>
                </ScrollView>
            </Fragment>
    );
};

export default Profile;