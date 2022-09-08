import { View, Text, ActivityIndicator } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import { FirebaseContext } from '../../../firebaseContext';


const NoArticle = () => {

  <Text>Pas d'articles</Text>
}

const Details = ({route}) => {

  const { id } = route.params ;
  const [article, setArticle] = useState(null) ;
  const [load, setLoad] = useState(false) ;
  const firebase = useContext(FirebaseContext) ;

  const getArticles = async () => {

    setLoad(true) ;
    const rqArticle = await firebase.getArticleById(id) ;

    setArticle(rqArticle.data()) ;
    setLoad(false) ;

    console.log(rqArticle.data()) ;
    
  }

  useEffect (()=>{

    getArticles() ;

  },[])

  console.log("id", id)

  return (
    // Si load = true Afficher la couche de chargement Sinon Si article est null afficher NoArticle Sinon afficher Details
    <View>
      {(load == true) ? <ActivityIndicator/> : (article == null) ? <NoArticle/> : <Text>{article.nom}</Text>}
    </View>
  )
}

export default Details