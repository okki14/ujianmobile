import React from 'react';
import { Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'native-base'
import  HomeScreen from '../screen/homescreen'
import LogoutScreen from '../screen/logoutscreen'



const Tab = createBottomTabNavigator();


function HomeTab() {
    return (
      <Tab.Navigator
        screenOptions={({ route })=>({
          tabBarIcon:({ focused,color,size })=>{
            let iconName;
            type= 'Entypo'
            if(route. name === 'Home') {
              iconName = focused ? 'home' : 'home'
            }else {
              iconName = focused ? 'user' : 'user';
              type= 'EvilIcons'
            }
            return <Icon name = { iconName } type={ type }  style={{ fontSize : 30, color}} />
          },
          tabBarLabel:({ focused, color, size}) => {
            let LabelName
            if (route. name === 'Home') {
              LabelName = 'Home'
            }else {
              LabelName= 'LogOut'
            }
            return <Text style ={{ color, fontSize: 12}}> {LabelName} </Text>
          }
        })}
  
        tabBarOptions ={{
          activeTintColor: 'salmon',
          inactiveTintColor: 'gray',
        }}
      >
  
        <Tab.Screen name="Home" component={HomeScreen} />       
        <Tab.Screen name="Logout" component={LogoutScreen} />
      </Tab.Navigator>
    );
}

export default HomeTab