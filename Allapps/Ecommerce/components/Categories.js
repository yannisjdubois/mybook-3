import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const data = [
    {id:1, nom:"catégorie 1"},
    {id:2, nom:"catégorie 2"},
    {id:3, nom:"catégorie 3"},
    {id:4, nom:"catégorie 4"}
]

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
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
      horizontal={true}
      data={data}
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