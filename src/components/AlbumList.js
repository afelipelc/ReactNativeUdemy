import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//class based component will fetch data, can initialize a complex operation
//fuction based component are used for only return static data
//is recomended implement class based components
export default class AlbumList extends Component {
  //https://reactjs.org/docs/react-component.html
  /*componentWillMount() is invoked immediately before mounting occurs. It is called before 
  render(), therefore calling setState() synchronously in this method will not trigger an extra 
  rendering. Generally, we recommend using the constructor() instead.*/

  //al implementar un componente que requiera cambiar su estado, debemos implementar 3 partes importantes

  //1ro)  establecer un state initial o por defecto
  
  componentWillMount() {
    console.log('componentWillMount in Album List');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
  }
  
  render() { 
    return (
      <View>
        <Text>Album List!!</Text>
      </View>
    );
  }
}
