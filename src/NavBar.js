import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';


export default class NavBar extends Component {
  render() {
    const { title } = this.props.Route
    const  leftTitle = this.props.leftButton.title
    const rightTitle = this.props.rightButton.title
    const leftButton = this.props.leftButton
    const rightButton = this.props.rightButton

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ () => this.props.navigateTo(leftButton) }>
          <Text>{ leftTitle || null }</Text>
        </TouchableOpacity>
        <Text style={ styles.title }>{ title || null }</Text>
        <TouchableOpacity onPress={ () => this.props.navigateTo(rightButton) }>
          <Text>{ rightTitle || null }</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    left: 0,
    bottom: 0,
    backgroundColor: 'white'
  },
  title: {
    color: 'red'
  }
});
