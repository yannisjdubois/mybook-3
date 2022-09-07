import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'


const RenderArticle = ({article}) => {

    const navigation = useNavigation() ;

    const onPressArticle = () => {
        navigation.navigate("Details", {id:article.id})
    }

    return (
        <TouchableOpacity onPress={onPressArticle} style={styles.touchArticle}>
            <Text style={styles.textArticle}>
                {article.nom}
            </Text>
        </TouchableOpacity>
    )
}

const Articles = () => {

    const {dataArticles} = useSelector(state=>state) ;

    console.log("dataArticles :", dataArticles) ;

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Articles</Text>
      <FlatList
      data={dataArticles}
      numColumns={2}
      horizontal={false}
      renderItem={({item})=> <RenderArticle article={item} /> }
      keyExtractor={item=>item.id}
      />
    </View>
  )
}

export default Articles

const styles = StyleSheet.create({
    content: {
        // backgroundColor:"lightblue",
        // width:"100%",
        // height:100,
        flex:1
    },

    title: {
        fontSize:25,
        fontWeight:'600',
    },

    touchArticle: {
        backgroundColor:"lightblue",
        margin:10,
        padding:10,
        width:160,
        borderRadius: 15,
        height:200,
    },

    textArticle: {
        fontSize:18,
        color:"grey",
        fontWeight:"500"

    },

})