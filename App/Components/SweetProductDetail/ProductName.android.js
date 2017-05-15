'use strict';
import React, {
	Component,
} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
} from 'react-native';


const {width,height} = Dimensions.get('window');

const styles = StyleSheet.create({
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
});

export default class ProductName extends Component {

  
  constructor(){
    super();
		this.state = {
		}

  }
	componentDidMount(){
	}



  render(){
    return(
      <View style = {{paddingTop:30}}>
        <Text style = {{fontSize: 20, alignSelf:'center',}}>
            浪味仙 | 创意花式薯片
        </Text>
        <Text  style = {{fontSize: 16,alignSelf:'center',paddingTop:5}}>
            田园蔬菜口味
        </Text>
        <View style = {{alignSelf:'center',flexDirection: 'row',paddingTop:5}}>
          <Text>
                $4.99
          </Text>
          <TouchableHighlight style ={styles.button}>     
            <Text>
                6
            </Text>
          </TouchableHighlight>
        </View> 
      </View>
    )
  }
}
