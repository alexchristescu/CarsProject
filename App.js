/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LogIn from './Screens/LogIn';
import Register from './Screens/Register';
import Main from './Screens/Main';
import { AsyncStorage } from 'react-native';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Filter from './Screens/FilterScreen';
import CarSize from './Screens/CarSize';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      hasToken : false,
    }
  }

componentDidMount(){
  AsyncStorage.getItem('token').then((token) => {
    this.setState({hasToken: token !== null, isLoaded: true })
  });
}


  render() {
    
    return (
      <Router>
        <Scene key="root">
          <Scene key="LogIN" initial={!this.state.hasToken} component={LogIn} title="LogIn" initial={true} hideNavBar={true} />
          <Scene key="Register" component={Register} title="Register" />
          <Scene key="Main" initial={this.state.hasToken} component={Main} title="Main" />
          <Scene key= "FilterScreen" component={Filter} title="Filter"/>
          <Scene key = "CarSize" component={CarSize} title="CarSize"/>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
