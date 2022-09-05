
import { StyleSheet } from "react-native"
import { colors } from "./color"

export const styles = StyleSheet.create({
    
    content : {
        backgroundColor : colors.primary,
        padding:10,
        margin:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'rgba(31, 118, 115, 1)',
        flexDirection:'row',
        justifyContent:'space-around'
       
    },

    viewImg : {

        height:100,
        width:100,
        
    },

    viewText :{
           
        height:100,
        width:190,
        // justifyContent:'center',
        // alignItems:'center'
        
    },
    image:{

        height:100,
        width:100,
        borderRadius:50
    },

     // Style du détail

     contentDetail:{
        backgroundColor: colors.primary,
        padding: 10,
        margin: 10,
        borderRadius:5,
        alignItems: "center",
        // flexDirection : 'row'
    },

    viewImgDetail:{
        width : 100,
        height : 100,
    },

    viewTxtDetail:{
        width : 350,
        height : 150,
        margin : 4,
        alignItems: "center",
    },

    imageDetail:{
        width : 100,
        height : 100,
        borderRadius : 10,
    }

})