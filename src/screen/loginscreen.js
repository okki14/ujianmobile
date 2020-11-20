import React, {useContext, useState} from 'react';
import { View, Text} from 'react-native';
import {Authcontex} from '../contex'
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import { Input,Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontawesome from 'react-native-vector-icons/Entypo'

function Login({ navigation }) {
  const {datauser, setdatauser}=useContext(Authcontex)
  const [loading, setloading]=useState(false)
  const [secure, setsecure]=useState(true)
  const [inputlog, setinputlog]=useState('')
  
 const onLoginPress=()=>{
   AsyncStorage.setItem('nama',inputlog)
   .then(()=>{
     setdatauser({
       islogin:true,
       nama:inputlog
     })
   })
 }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:40, color:'tomato', fontWeight:'900'}}>Tomato App</Text>
        <Text>
        <Fontawesome
            name= 'drink'
            color= 'tomato'
            size={40}
          />
        </Text>
        <Input
          placeholder='Username'
          value={inputlog}
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
          onChangeText={(text)=>setinputlog(text)}
        />
        
        <Button
          title='Enter'
          loading={loading}
          containerStyle={{width:'100%'}}
          buttonStyle={{backgroundColor:'tomato'}} 
          onPress={onLoginPress}
        />
      </View>
    );
}


export default Login