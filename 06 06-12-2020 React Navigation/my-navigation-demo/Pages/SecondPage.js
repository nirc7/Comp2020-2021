import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class SecondPage extends Component {
  render() {
    return (
      <View style={{ padding: 20 }}>
        <Text> SecondPage </Text>
        <Text> {this.props.route.params != undefined ?
          this.props.route.params.user : '...'}</Text>
        <Button title="go 2 First Page"
          onPress={() => {
            this.props.navigation.navigate('FirstPage');
          }} />
      </View>
    )
  }
}
