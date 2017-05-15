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
  ScrollView,
  ViewPagerAndroid,

} from 'react-native';

var {height, width} = Dimensions.get('window');
console.log(height, width)
import ScrollableTabView from 'react-native-scrollable-tab-view';



const {width,height} = Dimensions.get('window');
export default class SweetProductDetail extends Component {

  constructor(){
    super();
		this.state = {
		}

  }
	componentDidMount(){
    
	}
   
  render() {
    const height = 148;
    return (
      <View>
        <View style={{height:200, alignItems: 'center'}}>
          <ScrollView
            horizontal
            snapToAlignment={'start'}
            snapToInterval={40}
            scrollEventThrottle= {16}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            directionalLockEnabled
            pagingEnabled
            style={{marginTop: 20, width: 220*2}}>
            <View style={{position: 'relative',width: 150}}>
              
            </View>
            <View>
               <Image  style= {{marginRight:20, width:200, height:200, }} 
                 source={require('./image/1.png')}
                />
            </View>
            <View>
               <Image  style= {{marginRight:20, width:200, height:200, }} 
                 source={require('./image/2.png')}
                />
            </View>
            <View>
                <Image  style= {{marginRight:20, width:200, height:200, }} 
                 source={require('./image/3.png')}
                />
            </View>
            <View>
                 <Image  style= {{marginRight:20, width:200, height:200, }} 
                 source={require('./image/4.png')}
                />
            </View>
            <View style={{position: 'relative',width: 100}}>
              
            </View>
          </ScrollView>
        </View>

          {/*<ViewPagerAndroid initialPage={0} style={{backgroundColor:'blue',height:200, alignItems: 'center'}}>
            <View>
              <Text>First page</Text>
            </View>
            <View>
              <Text>Second page</Text>
            </View>
          </ViewPagerAndroid>*/}
      </View>
    )
  }

  

  
}
const styles = StyleSheet.create({
  
});