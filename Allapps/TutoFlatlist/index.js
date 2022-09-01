import { View, Text,FlatList,Button } from 'react-native'
import React from 'react'

import { useState } from 'react'

const Tuto = () => {

    const [getNombre, setNombre] = useState([1,2,3,4])

    const addtNombre = () => { 

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