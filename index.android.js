/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
const {width,height} = Dimensions.get('window');

import SweetProductDetail from './App/Components/SweetProductDetail/SweetProductDetail.android';
import ProductName from './App/Components/SweetProductDetail/ProductName.android';
import chart from './App/Components/SweetProductDetail/chart';
import ScrollableTabView from 'react-native-scrollable-tab-view';


export default class sweetful extends Component {

  onResponderMove(evt){
    console.log(evt.nativeEvent)
  }
  onResponderRelease(evt){
    console.log('release')
  }

  render() {
    return (
        <View        onStartShouldSetResponder= {evt=> true}
                     onMoveShouldSetResponder={evt => true}
                     onResponderMove={this.onResponderMove.bind(this)}
                     onResponderRelease ={this.onResponderRelease.bind(this)}
                     style ={styles.container}>
           <ScrollView>
             <View style = {{height: height*0.383}} >
               <ScrollView 
                  horizontal
                  snapToAlignment={'start'}
                  snapToInterval={40}
                  scrollEventThrottle= {16}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  alwaysBounceVertical={false}>
                  <View>
                    <Image  style= {{marginRight:width*0.016, width:width*0.446, height:width*0.446*1.404, }} 
                      source={require('./App/Components/SweetProductDetail/image/1.png')}
                      />
                  </View>
                  <View>
                    <Image  style= {{marginRight:width*0.016,  width:width*0.446, height:width*0.446*1.404, }} 
                      source={require('./App/Components/SweetProductDetail/image/1.png')}
                      />
                  </View>
                  <View>
                      <Image  style= {{marginRight:width*0.016,  width:width*0.446, height:width*0.446*1.404, }} 
                      source={require('./App/Components/SweetProductDetail/image/1.png')}
                      />
                  </View>
                  <View>
                      <Image  style= {{marginRight:width*0.016,  width:width*0.446, height:width*0.446*1.404, }} 
                      source={require('./App/Components/SweetProductDetail/image/1.png')}
                      />
                  </View>
                
               </ScrollView>
             </View>
             <View>
                <View style = {{flex:0.35}} >
                  <Text style = {{fontSize: 19,fontWeight:'600', alignSelf:'center',}}>
                    浪味仙|创意花式薯片
                  </Text>
                  <Text  style = {{fontSize: 16,fontWeight:'500',color:'#848689',alignSelf:'center',marginTop:height*0.0199}}>
                        田园蔬菜口味
                  </Text>
                  <View style = {{alignSelf:'center',flexDirection: 'row',marginTop:height*0.0199}}>
                    <Text style = {{fontSize: 16,fontWeight:'400',color:'#ff768b'}}>
                            $4.99
                    </Text>
                    <TouchableHighlight style ={styles.button}>     
                      <Text style = {{color:'white',fontSize: 13}}>
                            20
                      </Text>
                    </TouchableHighlight>
                  </View> 
                </View>
                <View style = {{flex:0.65, marginTop: height*0.045}}>
                  <View style = {{flexDirection:'row',}}>
                        <Text style = {{marginLeft:width*0.048,
                                        padding:7, 
                                        paddingRight:7,
                                        paddingLeft:7,
                                        fontSize:16}}>
                          口味
                        </Text>
                        <Text style = {styles.buttons}>
                          田园蔬菜口味
                        </Text>
                        <Text style = {styles.buttons}>
                          韩式泡菜口味
                        </Text>
                        <Text style = {styles.buttons}>
                          海苔口味
                        </Text>
                  </View>
                  <View style = {{flexDirection:'row',marginTop:height*0.023,}}>
                        <Text style = {{marginLeft:width*0.048,
                                        padding:7, 
                                        paddingRight:7,
                                        paddingLeft:7,
                                        fontSize:16}}>
                          大小
                        </Text>
                        <Text style = {styles.buttons}>
                          大包 | 84g/包
                        </Text>
                        <Text style = {styles.buttons}>
                          小包 | 42g/包
                        </Text>
                  </View>
                  <View style = {{flexDirection:'row',marginTop:height*0.023,}}>
                        <Text style = {{marginLeft:width*0.048,
                                        padding:7,
                                        fontSize:16}}>
                          数量
                        </Text>
                        <View style = {{flexDirection: 'row',
                                        borderColor: '#848689',
                                        borderWidth: 2,
                                        marginLeft:15,
                                        }}
                                        >
                          
                                  <TouchableHighlight style ={{
                                          height: 25,
                                          width:width*0.057,
                                          borderColor: '#ff768b',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          }}>     
                                  <Text style = {{color:'#848689',fontSize: 30}}>
                                    -
                                  </Text>
                                  </TouchableHighlight>
                                  
                                  <View style = {{
                                            alignItems:'center',
                                            justifyContent:'center',
                                            borderRightColor:'#848689',
                                            borderLeftColor:'#848689',
                                            borderLeftWidth:2,
                                            borderRightWidth:2,
                                            padding:3,
                                            paddingLeft:18,
                                            paddingRight:18,
                                            }}>
                                    <Text style = {{fontSize: 16,           
                                              color:'#ff768b',
                                              fontWeight:'400',         
                                              }}>
                                      1
                                    </Text>
                                  </View>
                            
                                  <TouchableHighlight style ={{
                                              height: 25,
                                              width:width*0.057,
                                              borderColor: '#ff768b',
                                              justifyContent: 'center',
                                              alignItems: 'center',
                                              }}>     
                                    <Text style = {{color:'#848689',fontSize: 22}}>
                                        +
                                    </Text>
                                  </TouchableHighlight>
                                
                            
                        </View> 
                  </View>
                  <TouchableHighlight style= {{  height:height*0.059,
                                                  width:width*0.425,
                                                  borderColor: '#ff768b',
                                                  borderWidth: 2,
                                                  backgroundColor: '#ff768b',
                                                  justifyContent: 'center',
                                                  alignSelf: 'center',
                                                  alignItems: 'center',
                                                  marginTop:height*0.0416,
                                             }}>     
                      <Text style = {{color:'white',
                                      fontSize: 18,}}
                      >
                            加入购物车
                      </Text>
                  </TouchableHighlight>
                </View>
                  
             </View>
             <View>
                <ScrollableTabView
                    tabBarActiveTextColor ={"#ff786b"}
                    tabBarInactiveTextColor={'#000000'}
                    tabBarUnderlineStyle ={{
                      backgroundColor: '#ff786b',
                      marginLeft:60,
                      width:85,
                      height:3,
                    }}
                    
                >
                  <View tabLabel='服务明细'>
                       <Image  style= {{marginRight:width*0.016, width:width*0.446, height:width*0.446*1.404, }} 
                      source={require('./App/Components/SweetProductDetail/image/1.png')}
                      />
                  </View>
                  <View tabLabel='产品详情'>
                       <Image  style= {{marginRight:width*0.016, width:width*0.446, height:width*0.446*1.404, }} 
                      source={require('./App/Components/SweetProductDetail/image/1.png')}
                      />
                  </View>
                </ScrollableTabView>          
             </View>

           </ScrollView>

        </View>
        

      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   button:{
     height: 20,
     width:20,
     borderColor: '#ff768b',
     borderWidth: 2,
     backgroundColor: '#ff768b',
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 20,
  },
  buttons:{
     borderColor: '#ff768b',
     borderWidth: 2,
     padding:7, 
     color:'black',
     paddingRight:7,
     paddingLeft:7,
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: width*0.037,
  },
});

AppRegistry.registerComponent('sweetful', () => sweetful);
