import { View, Text } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import { FirebaseContext } from '../../../firebaseContext';

const Details = ({route}) => {

  const { id } = route.params ;
  const [article, setArticle] = useState() ;
  const firebase = useContext(FirebaseContext) ;

  const getArticles = async () => {

    const rqArticle = await firebase.getArticleById(id) ;

  }

  useEffect (()=>{

    getArticles() ;

  },[])

  console.log("id", id)

  return (
    <View>
      <Text>Details</Text>
    </View>
  )
}

export default Details