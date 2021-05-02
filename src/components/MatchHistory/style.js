import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    matchHistory:{
        width: '100%',
        paddingHorizontal: 15,
        marginVertical:5
    },
    tab: {
        width:'100%',
        height:30,
        marginTop:50,
        backgroundColor:'#303030',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingRight:10,
        paddingLeft:30
    },
    matchHistoryList:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:5,
        paddingLeft:7,
        paddingRight:3,
        justifyContent:'space-between',
        backgroundColor:'#172327',
        borderLeftWidth:4,
        borderRightWidth:4,
        borderColor:'#2980B9'
    },
    colText:{
        color: '#fff',
        fontSize:12
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
        height:33,
        width:33,
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




    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, }
});

export default styles;