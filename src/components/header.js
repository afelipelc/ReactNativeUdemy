// import liraries for making  a component
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

// make a component
export default class Header extends Component {
  render() {
    return ( 
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{ this.props.headerText }</Text>
      </View>
    );
  }
}

//create styles
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center', 
    height: 40,
    paddingTop: 6,
    paddingBottom: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0, height: 3
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 22
  }
});

// make component available on app
//export component 
//export default Header; //diabled for created as class
