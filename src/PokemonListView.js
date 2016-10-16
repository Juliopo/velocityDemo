import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  ScrollView,
  RefreshControl
} from 'react-native';


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class PokemonListView extends Component {


  render() {
    let { handleInput, savedData, onRefreshData, isRefreshing } = this.props;
    return (
      <ScrollView style={ styles.scrollView }
        refreshControl={
          <RefreshControl
            refreshing={ isRefreshing || false }
            onRefresh={() => onRefreshData() }
          />
        }
      >
        <View style={styles.container}>
          <Image style={{width: 300, height: 150}} source={require('../images/Pokemon-Logo.png')} />
          <Text style={styles.welcome}>
            This is the list of your pokemons added
          </Text>
          { savedData ?
            <ListView
              style={styles.ListView}
              dataSource={ ds.cloneWithRows(savedData) }
              renderRow={(rowData) => <Text>{rowData.name}</Text>} /> : null }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    height: 50,
    marginHorizontal: 30,
    borderColor: 'gray',
    borderWidth: 1
  },
  ListView: {
    marginLeft: 30,
    flex: 1,
    alignSelf: 'flex-start'
  }
});
