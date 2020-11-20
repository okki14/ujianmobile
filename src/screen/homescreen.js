import React, {useContext} from 'react';
import {
  View,
   Text,
   StatusBar,
  _ScrollView,
    StyleSheet,
    Image,
    ScrollView,
    
 } from 'react-native';
 import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
 import {Viewpadding, Viewminion} from './../component/view'
 import Fontawesome from 'react-native-vector-icons/AntDesign'

function HomeScreen({ navigation }) {

  return (
    <>
    <ScrollView>
          <View style={{backgroundColor: '#5b8c5a'}}>
                <Viewpadding style={{ paddingTop:40 }}>
                    <View style={{
                      backgroundColor:'white',
                      flexDirection:'row',
                      elevation:10,                        
                      marginTop:40,
                      flexWrap:'wrap',
                      borderRadius:10,
                      
                    }}>                                                       
                        <View style={styles.kotak}>                            
                          <Icon name='creditcard' type='AntDesign' style={{color:'#438a5e', fontSize:30}} />
                          <Text style={{fontSize:10}}>
                            Credit
                          </Text>
                        </View>
                        <View style={styles.kotak}>
                          <Icon name='drink' type='Entypo' style={{color:'#0779e4', fontSize:30}} />
                          <Text style={{fontSize:10}} >
                           Variant
                          </Text>
                        </View>
                        <View style={styles.kotak}>
                          <Icon name='apple1' type='AntDesign' style={{color:'#ffc93c', fontSize:30}} />
                          <Text style={{fontSize:10}}>
                           Recipe
                          </Text>
                        </View>
                        <View style={styles.kotak}>
                              <Icon name='location' type='EvilIcons' style={{color:'#eb8242', fontSize:30}} />
                              <Text  style={{fontSize:10}}>
                              Location
                              </Text>
                        </View>
                        <View style={styles.kotak}>
                              <Icon name='shopping-cart' type='Entypo' style={{color:'#3282b8', fontSize:30}} />
                              <Text  style={{fontSize:10}}>
                               cart
                              </Text>
                        </View>
                        <View style={styles.kotak}>
                           <Icon name='pizza-slice' type='FontAwesome5' style={{color:'#400082', fontSize:30}} />
                            <Text  style={{fontSize:10}}>
                              Pizza
                            </Text>
                        </View>
                        <View style={styles.kotak}>
                            <Icon name='hamburger' type='FontAwesome5' style={{color:'#235952', fontSize:30}} />
                            <Text  style={{fontSize:10}}>
                              Burger
                            </Text>
                        </View> 
                        <View style={styles.kotak}>
                            <Icon name='more-horizontal' type='Feather' style={{color:'#235952', fontSize:30}} />
                            <Text  style={{fontSize:10}}>
                              More
                            </Text>
                        </View> 
                                                   
                    </View>
                </Viewpadding>
                <Viewpadding >
                  <View style={{flexWrap:'wrap',flexDirection:'row', marginTop:20}}>
                    <View  style={{flexBasis:'50%',paddingRight:10,paddingVertical:5}}>
                     
                        <Image 
                          style={{
                            height:150,
                            width:'100%',
                            borderRadius:5
                          }}
                          source={{
                            uri:'https://asset.kompas.com/crops/O7bqQqViMzIbz4XX-J2_FnYlzqI=/0x0:1000x667/750x500/data/photo/2017/09/22/3325539051.jpg'
                          }}
                        />
                        <Text>
                            <Fontawesome
                              name= 'star'
                              color= 'yellow'
                              size={20}
                            />{'4.9'}
                        </Text>
                        <Text>The Curry Culture</Text>

                     
                      </View>

                      <View  style={{flexBasis:'50%',paddingVertical:5}}>
                        <Image 
                          style={{
                            height:150,
                            width:'100%',
                            borderRadius:5
                          }}
                          source={{
                            uri:'https://www.gadjian.com/blog/wp-content/uploads/2020/04/7-Tips-Agar-Bisnis-Restoran-dan-Kedai-Kopi-FB-Bertahan-di-Masa-Corona.jpg'
                          }}
                        />
                        <Text>
                            <Fontawesome
                              name= 'star'
                              color= 'yellow'
                              size={20}
                            />{'4.9'}
                        </Text>
                        <Text>Gasto</Text>
                      </View>
                      <View  style={{flexBasis:'50%',paddingRight:10,paddingVertical:5}}>
                          <Image 
                            style={{
                              height:150,
                              width:'100%',
                              borderRadius:5
                            }}
                            source={{
                              uri:'https://destinasian.co.id/id/wp/wp-content/uploads/wayan-1.jpg'
                            }}
                          />
                          <Text>
                            <Fontawesome
                              name= 'star'
                              color= 'yellow'
                              size={20}
                            />{'4.9'}
                        </Text>
                        <Text>Monkey Bar</Text>
                      </View>
                      <View  style={{flexBasis:'50%',paddingVertical:5}}>
                          <Image 
                            style={{
                              height:150,
                              width:'100%',
                              borderRadius:5
                            }}
                            source={{
                              uri:'https://arsitagx-master-article.s3-ap-southeast-1.amazonaws.com/article-photo/333/Arsitag-Januari-04-Foto-1.jpeg'
                            }}
                          />
                          <Text>
                            <Fontawesome
                              name= 'star'
                              color= 'yellow'
                              size={20}
                            />{'4.9'}
                        </Text>
                        <Text>Brahma Brew</Text>
                      </View>
                  </View>
                </Viewpadding>
          </View>
       
      </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
kotak:{
  justifyContent:'center',
  alignItems:'center',
  flexBasis:'25%',
  height:60
  
} 

});



export default HomeScreen