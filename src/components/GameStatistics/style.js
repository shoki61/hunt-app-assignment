import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    gameStatistics:{
        alignItems:'flex-end',
        width: '100%',
        paddingHorizontal:25
    },
    mostRecent:{
        color:'#7C7C7C',
        fontSize:11
    },
    gameStatisticsInfo:{
        flexDirection:'row',
        alignItems:'flex-end', 
        width:'100%'
    },
    itemContainer:{
        alignItems:'center'
    },
    levelIcon:{
        alignItems:'center'
    },
    level:{
        color: '#fff',
        position:'absolute',
        bottom:0,
        width:20,
        height:20,
        fontSize:11,
        textAlign: 'center',
        textAlignVertical:'center',
        backgroundColor:'#000',
        borderColor:'#707070',
        borderWidth:1,
        borderRadius:100
    },
    bottomText: {
        color:'#7C7C7C',
        fontSize: 12,
        marginTop:3
    },
    scoreContainer:{
        alignItems:'center'
    },
    scoreNumber:{
        color: '#fff',
        fontSize:15,
        marginBottom:3
    }
});

export default styles;