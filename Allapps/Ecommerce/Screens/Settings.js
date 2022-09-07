import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Details from './Details'

const Settings = () => {
  return (
    <View style={styles.content}>
      <Text>Mon Compte</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  content: {
    flex:1,
    margin: 10
},
})