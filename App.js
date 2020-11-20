import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './src/screen/loginscreen'
import TabRoot from './src/navigation/tabroot'
import {Authcontex} from './src/contex'
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import { View, Text} from 'react-native';





const AuthStack=createStackNavigator()

const AuthStackRoot=()=>{
  return(
    <AuthStack.Navigator headerMode='none'>
      <AuthStack.Screen name='login' component={LoginScreen} />
    </AuthStack.Navigator>
  )
}


function App() {
  const [datauser, setdatauser]=useState({
    nama:'',
    islogin:false
  })

  const [loading, setloading]=useState(true)

  useEffect(()=>{
    AsyncStorage.getItem('nama')
    .then((value)=>{
      if(value !==null){
        setdatauser({
          nama:value,
          islogin:true
        })
        setloading(false)
      }
    })
  },[])

  if(loading){
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Splash Screen</Text>
    </View>
  }

  return (
    
    <Authcontex.Provider
      value={
        {
          datauser:datauser,
          setdatauser:setdatauser
        }
      }
    >
      <NavigationContainer>
        {
          datauser.islogin?
          <TabRoot />
          :
          <AuthStackRoot />
        }
      </NavigationContainer>
    </Authcontex.Provider>
  );
}


export default App;
//991dd82f1702997ed530d0983ff61b9c
