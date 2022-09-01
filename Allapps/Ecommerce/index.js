import { View, Text } from 'react-native'

import React from 'react'

import Connexion from './Public/Connexion';

import Private from './Private';

import { useSelector } from 'react-redux';

const Index = () => {
    /* recupere la variable login présent dans le State */
    const { login } = useSelector(state => state)
  return (
    <View>
      <Text>E-Commerce</Text>
      { !login ? <Connexion/>:
                <Private/>}
    </View>
  )
}

export default Index