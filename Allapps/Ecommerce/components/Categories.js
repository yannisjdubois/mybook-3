import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


const RenderCategorie = ({categorie}) => {
        return (
        <TouchableOpacity style={styles.touchCategorie}>
            <Text style={styles.textCategorie}>
                {categorie.nom}
            </Text>
        </TouchableOpacity>
    )
}

const Categories = () => {

    const {dataCategories} = useSelector(state=>state) ;

    console.log("dataCategories :", dataCategories) ;

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
      horizontal={true}
      data={dataCategories}
      renderItem={({item})=> <RenderCategorie categorie={item} /> }
      keyExtractor={item=>item.id}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    content: {
        // backgroundColor:"lightblue",
        width:"100%",
        height:100
    },

    title: {
        fontSize:25,
        fontWeight:'600',
    },

    touchCategorie: {
        backgroundColor:"lightblue",
        margin:10,
        padding:10,
        width:120,
        borderRadius: 15,
        height:40,
    },

    textCategorie: {
        fontSize:18,
        color:"grey",
        fontWeight:"500"

    },

})