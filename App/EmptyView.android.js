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


      </View>
    )
  }
}
const styles = StyleSheet.create({
});