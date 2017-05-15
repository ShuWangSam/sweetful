## 产品详情页面

### 页面结构:
使用flex架构将页面分为三层

第一层flex= 0.4, 使用ScrollView展示商品图片

第二层flex= 0.5, 展示商品详情

第三层flex= 0.1, 展示服务明细和产品详情


```
    <View style = {{flex:0.4, }} >
     ...
    </View>

    <View style = {{flex:0.5,marginTop:10}} >
     ...
    </View>

    <View style = {{flex:0.1,backgroundColor:'yellow'}} >
    ...   
    </View>
```

### 产品详情:
使用flex架构将页面分为两层

第一层flex= 0.35, 展示商品名称，口味 和价格。

第二层flex= 0.65, 提供口味， 大小，数量的选择以及加入购物车按键。


```
           <View style = {{flex:0.5,marginTop:10}} >

             <View style = {{flex:0.35}} >
             ...
             </View>

             <View style = {{flex:0.65}}>
             ...
             </View>
              
           </View>
```

#### 展示商品名称等:
- 分层居中
- 商品名称 字号：`fontSize: 19` 字体颜色: `#ffffff`.
- 商品口味 字号：`fontSize: 16` 字体颜色: `#848689`.
- 商品价格 字号：`fontSize: 16` 字体颜色: `#ff768b`.

```
              <Text style = {{fontSize: 19,fontWeight:'600', alignSelf:'center',}}>
                    浪味仙|创意花式薯片
              </Text>
              <Text  style = {{fontSize: 16,fontWeight:'500',color:'#848689',alignSelf:'center',            marginTop:10}}>
                    田园蔬菜口味
              </Text>
              <View style = {{alignSelf:'center',flexDirection: 'row',marginTop:10}}>
                <Text style = {{fontSize: 16,fontWeight:'400',color:'#ff768b'}}>
                    $4.99
                </Text>
                <TouchableHighlight style ={styles.button}>     
                   <Text style = {{color:'white',fontSize: 13}}>
                    20
                  </Text>
                </TouchableHighlight>
              </View> 
```

#### 展示口味选择等:
- 分层居中
- 标题以及选择等字体: 字号：`fontSize: 16` 字体颜色: `#ffffff`.
- 选项外框: 外框颜色 `#ff768b` 外框宽度 `2` padding `7`
- 加入购物车按键: 背景色: `#ff768b` 高度`50` 宽度`170`

```
               <View style = {{flexDirection:'row',}}>
                     <Text style = {{marginLeft:20,
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
               <View style = {{flexDirection:'row',marginTop:12,}}>
                     <Text style = {{marginLeft:20,
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
               <View style = {{flexDirection:'row',marginTop:12,}}>
                     <Text style = {{marginLeft:20,
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
                                      width:25,
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
                                          color:'#848689',
                                          fontWeight:'400',
                                          alignSelf:'center'
                                          }}>
                                   1
                                 </Text>
                              </View>
                        
                              <TouchableHighlight style ={{
                                          height: 25,
                                          width:25,
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
               <View style= {{marginTop:15,}}>
                 <TouchableHighlight style= {{
                       height:50,
                       width:170,
                       borderColor: '#ff768b',
                       borderWidth: 2,
                       backgroundColor: '#ff768b',
                       justifyContent: 'center',
                       alignSelf: 'center',
                 }}>     
                   <Text style = {{
                     color:'white',
                     fontSize: 18,
                     alignSelf: 'center',}}>
                        加入购物车
                  </Text>
                </TouchableHighlight>
               </View>
```









### 总体代码

```
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
    } from 'react-native';

    import SweetProductDetail from './App/Components/SweetProductDetail/SweetProductDetail.android';
    import ProductName from './App/Components/SweetProductDetail/ProductName.android';
    import chart from './App/Components/SweetProductDetail/chart';


    export default class sweetful extends Component {

    onResponderMove(evt){
        console.log(evt.nativeEvent)
    }
    onResponderRelease(evt){
        console.log('release')
    }

    render() {
        return (
            <View 
            onStartShouldSetResponder= {evt=> true}
            onMoveShouldSetResponder={evt => true}
            onResponderMove={this.onResponderMove.bind(this)}
            onResponderRelease ={this.onResponderRelease.bind(this)}
            style ={styles.container}>
            {/*<SweetProductDetail style = {{flex:0.4,backgroundColor:'blue'}}/>   
            <ProductName style = {{flex: 0.4,paddingTop:30}}/>     */}
            <View style = {{flex:0.4, }} >
                <SweetProductDetail />
            </View>
            <View style = {{flex:0.5,marginTop:10}} >
                <View style = {{flex:0.35}} >
                <Text style = {{fontSize: 19,fontWeight:'600', alignSelf:'center',}}>
                    浪味仙|创意花式薯片
                </Text>
                <Text  style = {{fontSize: 16,fontWeight:'500',color:'#848689',alignSelf:'center',marginTop:10}}>
                        田园蔬菜口味
                </Text>
                <View style = {{alignSelf:'center',flexDirection: 'row',marginTop:10}}>
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
                <View style = {{flex:0.65}}>
                <View style = {{flexDirection:'row',}}>
                        <Text style = {{marginLeft:20,
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
                <View style = {{flexDirection:'row',marginTop:12,}}>
                        <Text style = {{marginLeft:20,
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
                <View style = {{flexDirection:'row',marginTop:12,}}>
                        <Text style = {{marginLeft:20,
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
                                        width:25,
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
                                            color:'#848689',
                                            fontWeight:'400',
                                            alignSelf:'center'
                                            }}>
                                    1
                                    </Text>
                                </View>
                            
                                <TouchableHighlight style ={{
                                            height: 25,
                                            width:25,
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
                <View style= {{marginTop:15,}}>
                    <TouchableHighlight style= {{
                        height:50,
                        width:170,
                        borderColor: '#ff768b',
                        borderWidth: 2,
                        backgroundColor: '#ff768b',
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}>     
                    <Text style = {{
                        color:'white',
                        fontSize: 18,
                        alignSelf: 'center',}}>
                            加入购物车
                    </Text>
                    </TouchableHighlight>
                </View>
                
                </View>
                
            </View>
            <View style = {{flex:0.1,backgroundColor:'yellow'}} >
                
            </View>



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
        paddingRight:7,
        paddingLeft:7,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    });

    AppRegistry.registerComponent('sweetful', () => sweetful);
```