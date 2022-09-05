// import { View, Text } from 'react-native'

// import React from 'react'

// import Connexion from './Public/Connexion';

// import Private from './Private';

// import { useSelector } from 'react-redux';

// const Index = () => {
//     /* recupere la variable login présent dans le State */
//     const { login } = useSelector(state => state)
//   return (
//     <View>
//       <Text>E-Commerce</Text>
//       { !login ? <Connexion/>:
//                 <Private/>}
//     </View>
//   )
// }

// export default Index

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Settings from './Screens/Settings';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Accueil" component={Home} />
        <Tab.Screen name="Mon Compte" component={Settings} />
      </Tab.Navigator>
  );
}