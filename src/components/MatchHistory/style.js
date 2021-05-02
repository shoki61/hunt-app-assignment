import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    matchHistory:{
        width: '100%',
        marginVertical:5,
        paddingHorizontal:10
    },
    tab: {
        width:'100%',
        height:30,
        backgroundColor:'#303030',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5
    },
    center:{
        alignItems:'center'  
    },
    matchHistoryList:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:5,
        paddingHorizontal:2,
        backgroundColor:'#172327',
        borderLeftWidth:4,
        borderRightWidth:4,
        borderColor:'#2980B9'
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
    }
});

export default styles;