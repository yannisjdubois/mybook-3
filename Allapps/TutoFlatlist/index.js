import { View, Text,FlatList,Button } from 'react-native'
import React from 'react'
import firestore from '@react-native-firebase/firestore';

import { useState } from 'react'

const Tuto = () => {

    const [getNombre, setNombre] = useState([1,2,3,4])


    const readStagiaire = async () => {

      const user = await firestore().collection('YannisCollection').doc('JM4xQlOhJ4TOnQt1ePf2').get();
      console.log('user' , user) ;
    }

    const addtNombre = async () => { 

      await readStagiaire() ;

    console.log(getNombre.length)

    const tempNombre = [...getNombre , getNombre.length+1]
       
    console.log(tempNombre)

       setNombre(getNombre)
       
    }

  return (
   
    <FlatList
        ListHeaderComponent={<Button
                                title='Add'
                                onPress={addtNombre}
                                />}
        data={getNombre}
        renderItem={({item})=><Text>{item}</Text>}
        keyExtractor={item => item}
        onEndReached={addtNombre}
        onEndReachedThreshold={0.1}
    />

  )
}

export default Tuto