import React, { Component } from 'react';
import {
  Navigator,
  View
} from 'react-native';

import SearchView from './SearchView'
import ProfileView from './ProfileView'
import PokemonListView from './PokemonListView'
import NavBar from './NavBar'
import ViewController from './ViewController'


const routes = [
  {title: 'Profile', index: 0},
  {title: 'Search', index: 1},
  {title: 'Pokemons', index: 2}
];


export default class MainController extends Component {

  navigateTo(route) {
    let nav = this.refs && this.refs.mainNav

    if(nav) {
      if(nav.getCurrentRoutes().length > 1) {
        this.refs.mainNav.replacePreviousAndPop(route)
      } else {
        this.refs.mainNav.push(route);
      }
    }
  }

  _renderScene(route, navigator) {
    let self = this;

    if(route.index === 0 ) {
      return (
        <View style={{flex: 1}}>
          <ViewController ChildView={ ProfileView } />
          <NavBar Route={route} leftButton={routes[1]} rightButton={routes[2]} navigateTo={this.navigateTo.bind(this)}/>
        </View>
      )
    } else if(route.index === 1) {

      return (
        <View style={{flex: 1}}>
          <ViewController ChildView={SearchView} />
          <NavBar Route={route} leftButton={routes[0]} rightButton={routes[2]} navigateTo={this.navigateTo.bind(this)} />
        </View>
      )
    } else if(route.index === 2) {

      return (
        <View style={{flex: 1}}>
          <ViewController ChildView={PokemonListView} />
          <NavBar Route={route} leftButton={routes[0]} rightButton={routes[1]} navigateTo={this.navigateTo.bind(this)} />
        </View>
      )
    }
  }

  render() {
    return (
      <Navigator
        ref='mainNav'
        initialRoute={routes[0]}
        renderScene={this._renderScene.bind(this)}
      />
    )
  }
}
