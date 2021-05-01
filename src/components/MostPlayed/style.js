import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mostPlayed:{
        width: '100%',
        paddingHorizontal: 15,
        marginVertical:10,
        alignItems:'center'
    },
    progressItemContainer:{
        alignItems:'center'
    },
    mostPlayedItems:{
        flexDirection: 'row',
        width:'100%',
        alignItems:'flex-end',
        justifyContent:'space-between'
    },
    numberContainer:{
        width: 40,
        height:40,
        borderRadius:100,
        borderWidth:2,
        backgroundColor:'#000',
        borderColor:'#707070',
        position:'absolute',
        bottom:0,
        right:-15,
        alignItems: 'center',
        justifyContent:'center'
    },
    number:{
        color: '#fff',
        fontSize:11,
        textAlign:'center'
    },
    numbers:{
        color:'#fff',
        marginTop:5
    },
    KDA:{
        fontSize:15,
        color:'#7C7C7C'
    },
    mostPlayedText:{
        color: '#fff',
        fontSize:15,
        marginTop:15
    }
});

export default styles;