import React,{useContext} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native'
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import {Authcontex} from '../contex'


const LogoutScreen=()=>{
  const {datauser, setdatauser}=useContext(Authcontex)

  const onLogout=async ()=>{
    try {
      await AsyncStorage.removeItem('nama') 
      setdatauser({
        nama:'',
        islogin:false
      })     
    } catch (error) {
      
    }
  }

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> LogoutScreen</Text>
            <Button         
            title= 'logout'
            onPress= {onLogout}
            />
           
        </View>
    )
}

export default LogoutScreen