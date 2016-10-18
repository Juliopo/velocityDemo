import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';


export default class ProfileView extends Component {
  render() {
    let { handleInput, savedData } = this.props;
    return (
      <View style={styles.container}>
        <Image style={{width: 300, height: 150}} source={require('../images/Pokemon-Logo.png')} />
        <Text style={styles.welcome}>
          Profile App view
        </Text>
        <Text style={ styles.user }>Julio Jaramillo</Text>
        <Text>Tus Puntos acumulados</Text>
        <Text>Tienes { (savedData && savedData.length) || "0" } Puntos</Text>

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
  user: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'grey'
  }
});
