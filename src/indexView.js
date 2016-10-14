import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';


export default class velocityDemo extends Component {
  render() {
    let { handleInput } = this.props;
    return (
      <View style={styles.container}>
        <Image style={{width: 300, height: 150}} source={{uri: "http://1.bp.blogspot.com/-SqrqlCjwiqQ/VHa1uvKDLkI/AAAAAAAAiH4/9R_Gqau5jZA/s1600/Pokemon-Logo-em-png-queroimagem-cei%C3%A7a-crispim.png"}} />
        <Text style={styles.welcome}>
          Welcome to Pokemon App!
        </Text>
        <TextInput style={styles.textInput} onChangeText={(text) => handleInput(text)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    height: 50,
    marginHorizontal: 30
  }
});
