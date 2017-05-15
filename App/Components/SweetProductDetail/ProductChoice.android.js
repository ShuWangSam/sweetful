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
export default class EmptyView extends Component {

  constructor(){
    super();
		this.state = {
		}

  }
	componentDidMount(){
	}



  render(){
    return(
      <View >
        <View style = {{alignSelf:'center',flexDirection: 'row',paddingTop:5}}>
            <Text>口味</Text>
            <TouchableHighlight style ={styles.button}>     
              <Text>
                田园蔬菜口味
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style ={styles.button}>     
              <Text>
                韩式泡菜口味
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style ={styles.button}>     
              <Text>
                海苔口味
              </Text>
            </TouchableHighlight>
        </View>
        <View style = {{alignSelf:'center',flexDirection: 'row',paddingTop:5}}>
            <Text>大小</Text>
            <TouchableHighlight style ={styles.button}>     
              <Text>
                大包 | 84克/包
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style ={styles.button}>     
              <Text>
                小包 | 42克/包
              </Text>
            </TouchableHighlight>
        </View>
        <View>
            <Text>大小</Text>
        </View>

      </View>
    )
  }
}
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