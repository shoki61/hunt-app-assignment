import React from 'react';
import {View, Text} from 'react-native';

import NavBar from '../../components/NavBar/NavBar';
import styles from './style';

const Profile = () => {
    return (
        <View style={styles.container} >
            <NavBar/>
        </View>
    );
};

export default Profile;