import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './theme/style';

const DetailScreen = ({route}) => {
    const { item } = route.params 
  return (
    <View style={styles.contentDetail}>
        <View style={styles.viewImgDetail}>

        <Image
            style={styles.imageDetail}
            source={{uri:item.image}}
        />
        
        </View>

        <View style={styles.viewTxtDetail}>

            <Text>{item.title}</Text>
            <Text></Text>
            <Text>{item.description}</Text>

        </View>
    </View>
  )
}

export default DetailScreen