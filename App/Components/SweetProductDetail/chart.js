import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  ListView,
  Dimensions
} from 'react-native';
import * as _ from 'lodash';
export default class Chart extends Component {
  renderBars(height) {
    return _.range(25, 90).map((value, index) => {
      return (
        <View key={index} style={{position: 'relative'}}>
          <View style={{width: 21, opacity: 0.2, backgroundColor: '#ff2d2d', marginRight: 2, height: height - 20 - value}} />
          <View style={{width: 21, backgroundColor: '#ff2d2d', marginRight: 2, height: value}} />
          <View style={{alignItems: 'center', marginTop: 3}}>
            <Text style={{fontSize: 8}}>10/13</Text>
            <Text style={{fontSize: 8}}>三</Text>
          </View>
        </View>
      )
    })
  }
  render() {
    const height = 148;
    return (
      <View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <ScrollView
            horizontal
            snapToAlignment={'start'}
            snapToInterval={23}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            directionalLockEnabled
            style={{marginTop: 20, position: 'relative', height: height, width: 23*15}}>
            {this.renderBars(height)}
          </ScrollView>
        </View>
      </View>
    )
  }
}