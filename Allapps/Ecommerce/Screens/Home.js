import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'
import Articles from '../components/Articles'

const Home = () => {
  return (
    <View style={styles.content}>
      <Categories/>
      <Articles/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    content: {
        flex:1,
        // backgroundColor:"lightblue",
        margin: 10
    },
})