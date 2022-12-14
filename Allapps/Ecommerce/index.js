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

import React, {useContext, useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FirebaseContext } from '../../firebaseContext';
import { useDispatch } from 'react-redux';
import { addCategorie, addArticle } from '../../redux/action';

import Home from './Screens/Home';
import Settings from './Screens/Settings';
import Details from './Screens/Details';
import Panier from './Screens/Panier';





const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Accueil = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

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


  const initArticles = async () => {
    const articles = await firebase.getArticles() ;

    if (!articles.empty){

      console.log("page vide")

      articles.forEach(articleData =>{

        // const tempCategorie = {
        //   id : articleData.id,
        //   nom : articleData.data().nom
        // }


        // console.log("first" , tempArticle)


        // Version déstructurée du code précédent pour màj instantanément
        const tempArticle = {
          id : articleData.id,
          ...articleData.data()
        }


        // console.log("first" , tempCategorie)
        dispatch(addArticle(tempArticle))
      })
    }


    // console.log("categories :", categories.empty)
  }

  useEffect (()=>{

    initCategories() ;
    
    initArticles() ;

  },[])

  

  return (
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Accueil" component={Accueil} />
        <Tab.Screen name="Panier" component={Settings} />
        <Tab.Screen name="Mon Compte" component={Settings} />
      </Tab.Navigator>
  );
}

export default App ;