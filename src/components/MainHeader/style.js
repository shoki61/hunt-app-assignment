import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainHeader:{
        height:200,
        position: 'relative',
        flexDirection:'row',
    },
    backImg: {
        position: 'absolute'
    },
    mainHeaderInfo: {
        flexDirection:'row'
    },
    profileContainer:{
        alignItems: 'center'
    },
    profileImg:{
        borderRadius:100,
        backgroundColor:'red',
        position:'relative',
        borderColor:'#000',
        borderWidth:4
    },
    editProfileImg:{
        position: 'absolute',
        bottom:0,
        right:0
    },
    profileName: {
        color: '#fff',
        fontSize: 16,
        marginTop:3
    },
    profileLabel:{
        fontSize:13,
        color:'#777676'
    }
});

export default styles;