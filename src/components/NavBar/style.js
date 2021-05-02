import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    navBar:{
        width: '100%',
        height: 65,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        backgroundColor:'#000'
    },
    navBarLeft:{
        flexDirection:'row',
        alignContent:'center'
    },
    backBtn: {
        justifyContent:'center'
    },
    navTitle:{
        color:'#fff',
        fontSize: 22,
        marginLeft:15
    }
});

export default styles;