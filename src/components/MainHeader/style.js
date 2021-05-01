import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainHeader:{
        height:195,
        position: 'relative',
        flexDirection:'row',
        alignItems:'flex-end',
        width:'100%'
    },
    backImg: {
        position:'absolute',
        top:0
    },
    mainHeaderInfo: {
        flexDirection:'row',
        paddingHorizontal:5
    },
    itemsContainer:{
        alignItems: 'center',
        justifyContent:'flex-end',
        marginHorizontal:5
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
    },
    fnatic:{
        color:'#fff',
        fontSize:14,
        marginTop:3
    },
    badge:{
        fontSize:10,
        color:'#7C7C7C',
        textAlign:'center',
        marginTop:3
    }
});

export default styles;