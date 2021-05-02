import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({    
    center:{
        alignItems:'center'  
    },
    matchHistoryList:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:5,
        paddingHorizontal:2,
        borderLeftWidth:4,
        borderRightWidth:4,
    },
    colText:{
        color: '#fff',
        fontSize:11,
        textAlign:'center'
    },
    col1:{
        alignItems:'center'
    },
    col3Container:{
        flexDirection:'row',
        alignItems:'center',
    },
    col3Img:{
        borderRadius:100,
        height:37,
        width:37,
        borderWidth:1,
        borderColor:'#7D6D4B'
    },
    col3Number:{
        color:'#A09B8C',
        fontSize:8,
        width:13,
        height:13,
        position:'absolute',
        bottom:0,
        right:-2,
        backgroundColor:'#000',
        borderWidth:1,
        borderColor:'#7D6D4B',
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:100
    },
    col5Container:{
        alignItems:'center'
    },
    historyListText:{
        color:'#fff',
        textAlign:'center',
        marginVertical:5,
        fontSize:17
    }
});

export default styles;