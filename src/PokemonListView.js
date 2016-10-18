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

  listTemplateView(rowData) {
    console.log(this.props.savedData)
    return (
      <View style={styles.rowContainer}>
        <Text style={ styles.rowText }>{ rowData.name }</Text>
        <Text style={ styles.rowText }>{ rowData.abilities ? rowData.abilities.length : 0 }</Text>
        <Text style={ styles.rowText }>{ rowData.height } Pies</Text>
        <Text style={ styles.rowText }>{ rowData.weight } Kg</Text>
        <Text style={ styles.rowText }>{ rowData.base_experience }</Text>
      </View>

    )
  }


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
          <View style={ [styles.rowContainer, {marginHorizontal: 30, marginVertical: 15}] }>
            <Text style={ styles.rowText }>Nombre</Text>
            <Text style={ styles.rowText }>Abilidades</Text>
            <Text style={ styles.rowText }>Altura</Text>
            <Text style={ styles.rowText }>Peso</Text>
            <Text style={ styles.rowText }>Exp</Text>
          </View>
          { savedData ?
            <ListView
              style={styles.ListView}
              dataSource={ ds.cloneWithRows(savedData) }
              renderRow={(rowData) => this.listTemplateView(rowData) } /> : null }
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
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  ListView: {
    marginHorizontal: 30,
    height: 500,
    flex: 1,
    alignSelf: 'stretch'
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  rowText: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 5
  }
});
