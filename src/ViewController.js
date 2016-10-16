import React, { Component } from 'react';
import {
  View,
  AsyncStorage
} from 'react-native';


export default class ViewController extends Component {

  constructor() {
    super()
    this.state = {
      searchText: null,
      pokemon: null,
      loading: false,
      savedData: null
    }
  }

  fetchPokemons(searchValue) {
    return fetch(`http://pokeapi.co/api/v2/pokemon/${searchValue}/`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }


  handleInput(textValue) {
    this.setState({searchText: textValue})
  }

  async addPokemon(pokemon) {
    try {
      await AsyncStorage.setItem(`@MyStore:${pokemon.name}`, JSON.stringify(pokemon));
    } catch (error) {
      // Error saving data
    }
  }

  componentDidMount() {
    this.getPokemonData()
  }

  onRefreshData() {
    this.getPokemonData()
  }

  async getPokemonData() {
    try {
      this.setState({isRefreshing: true});
      const arrayOfSavedData = await AsyncStorage.getAllKeys();
      if (arrayOfSavedData.length) {
        let values = await AsyncStorage.multiGet(arrayOfSavedData)
        values = values.map((value) => {
          return JSON.parse(value[1])
        })

        this.setState({savedData: values, isRefreshing: false})

      }
    } catch (error) {
      console.log(error)
    }
  }

  onSubmit() {
    let value = this.state.searchText

    if(value && value.trim().length) {
      this.setState({loading: true})
      this.fetchPokemons(value.toLowerCase()).done((searchResult) => {
        this.setState({pokemon: searchResult})
        this.setState({loading: false})
      });
    }
  }


  render() {
    const { ChildView } = this.props
    return (
      <ChildView handleInput={ this.handleInput.bind(this) } onRefreshData={this.onRefreshData.bind(this)} onSubmit={this.onSubmit.bind(this)} pokemon={this.state.pokemon} addPokemon={this.addPokemon.bind(this)} savedData={this.state.savedData} isRefreshing={this.state.isRefreshing} loading={this.state.loading} />
    )
  }
}
