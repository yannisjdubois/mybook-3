import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './Allapps/First';

import Insta from './Allapps/Insta';

import News from './Allapps/AppNews';

import Tuto from './Allapps/TutoFlatlist';

import DetailScreen from './Allapps/AppNews/detail';

import Ecommerce from './Allapps/Ecommerce';

import store from './redux/store';

import { Provider } from 'react-redux';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>

            <Stack.Navigator>
                
                <Stack.Screen name="First" component={FirstScreen} />
                {/* AppInsta screens */}
                <Stack.Screen name="AppInsta" component={Insta} />
                {/* news App screens */}
                <Stack.Screen name="AppNews" component={News} />
                {/* DetailScreenNews */}
                <Stack.Screen name='DetailScreen' component={DetailScreen}/>
                {/* TutoScreenNews */}
                <Stack.Screen name="AppTuto" component={Tuto} />
                {/* Ecommerce App creen */}
                <Stack.Screen name="AppEcommerce" component={Ecommerce} />
                            
            </Stack.Navigator>

        </NavigationContainer>
    </Provider>
 
  )
}

export default App

const styles = StyleSheet.create({})