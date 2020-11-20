import React from 'react';


import {
    
    View
   
  } from 'react-native';

export const Viewpadding=(props)=>{
    return(
      <View style={{...props.style,paddingHorizontal:20}}>
        {props.children}
      </View>
    )
}

export const Viewminion=(props)=>{
    return(
      <View style={{
        backgroundColor:'white',
        borderRadius:10,
        elevation:10,
        marginHorizontal:10,
        width:200,
        height:60,
        justifyContent:'center',
        alignItems:'center'
      
      }}>
        {props.children}
      </View>
    )
}