import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

export default class FirstPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //txtName: '...'
    }
  }

  chgText = (text) => {
    this.setState({ txtName: text });
  }

  btnSayHello = () => {

    AsyncStorage.setItem('userDetails', { userId: 7, userName: 'avi' });

    AsyncStorage.getItem('userDetails', (err, result) => {
      console.log(result);
    });


    console.log('start');
    this.setState({ txtOutputName: this.state.txtName },
      () => {
        console.log(this.state.txtOutputName);
      });
    console.log(this.state.txtOutputName);
    console.log('end');
  }

  btnGo2SecondPage = () => {
    this.props.navigation.navigate('SecondPage',
      { user: 'Lucy' + new Date().getSeconds() });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Ruppins app!</Text>
        <View style={{ margin: 10 }}></View>
        <Button title="go2SecondPage" onPress={this.btnGo2SecondPage} />
        <View style={{ margin: 10 }}></View>
        <Button title="go 2 Material" onPress={() => {
          this.props.navigation.navigate('MaterialTabbedPageNavigator');
        }} />

        <View style={{ margin: 10 }}></View>
        <TextInput onChangeText={(text) => this.chgText(text)} />
        <View style={{ margin: 10 }}></View>
        <Button title="Push" onPress={this.btnSayHello} />
        <View style={{ margin: 10 }}></View>
        <Text>Hello {this.state.txtOutputName}</Text>
        {/* <Text>{this.state.txtName}</Text> */}
        <TouchableOpacity
          onPress={this.btnSayHello} >
          <View style={{
            borderRadius: 10,
            borderColor: 'purple',
            borderWidth: 2,
            padding: 10,
            margin: 10,
            backgroundColor: 'gray'
          }}>
            <Text>Push me!</Text>
          </View>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
