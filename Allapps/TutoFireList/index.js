import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import firestore from '@react-native-firebase/firestore';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

const Item = ({ nom }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{nom}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const [data, setData] = useState([]) ;

  onResult = () =>{
    console.log('Result') ;
  }

  onError = () =>{
    console.log('Error') ;
  }

  // Chargement de mon composant
  useEffect(()=>{
    firestore().collection('stagiaires').onSnapshot(snapShot=>{
        // console.log('snapShot', snapShot)

        let dataTemp = [] ;

        snapShot.forEach(document => {

            dataTemp.push({id: document.id, ...document.data()})
            setData(dataTemp)
            console.log('document', dataTemp)
        })
    }) ;
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;