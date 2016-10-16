import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';


export default class velocityDemo extends Component {
  render() {
    let { handleInput, onSubmit, pokemon, loading, addPokemon } = this.props;
    return (
      <View style={styles.container}>
        <Image style={{width: 300, height: 150}} source={require('../images/Pokemon-Logo.png')} />
        <Text style={styles.text}>
          Welcome to Pokemon App!
        </Text>
        <TextInput style={styles.textInput} onChangeText={(text) => handleInput(text)}/>
        { loading ? <Text>Loading ....</Text> : <TouchableOpacity onPress={() => onSubmit()}>
          <Text style={styles.button}>Buscar</Text>
        </TouchableOpacity> }
        { pokemon ?
          <View style={styles.pokemonView}>
            <Text style={styles.pokemonViewName}>{pokemon.name}</Text>
            <TouchableOpacity onPress={() => addPokemon(pokemon)}>
              <Text>Add</Text>
            </TouchableOpacity>
          </View> : <Text>"There's No pokemons to show"</Text> }
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
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'red'
  },
  pokemonView: {
    flexDirection: 'row',
    flex: 1
  },
  pokemonViewName: {
    marginRight: 20
  },
  textInput: {
    alignSelf: 'stretch',
    height: 50,
    marginHorizontal: 30,
    borderColor: 'gray',
    borderWidth: 1
  }
});
