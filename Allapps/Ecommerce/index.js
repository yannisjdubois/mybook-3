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

import React, {useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Settings from './Screens/Settings';
import { FirebaseContext } from '../../firebaseContext';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCategorie } from '../../redux/action';



const Tab = createBottomTabNavigator();

const App = () => {

  const dispatch = useDispatch() ;

  const firebase = useContext(FirebaseContext) ;

  const initCategories = async () => {
    const categories = await firebase.getCategories() ;

    if (!categories.empty){

      console.log("page vide")

      categories.forEach(categorieData =>{

        // const tempCategorie = {
        //   id : categorieData.id,
        //   nom : categorieData.data().nom
        // }


        // console.log("first" , tempCategorie)


        // Version déstructurée du code précédent pour màj instantanément
        const tempCategorie = {
          id : categorieData.id,
          ...categorieData.data()
        }


        // console.log("first" , tempCategorie)
        dispatch(addCategorie(tempCategorie))
      })
    }


    // console.log("categories :", categories.empty)
  }

  useEffect (()=>{

    initCategories() ;

  },[])

  return (
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Accueil" component={Home} />
        <Tab.Screen name="Mon Compte" component={Settings} />
      </Tab.Navigator>
  );
}

export default App ;