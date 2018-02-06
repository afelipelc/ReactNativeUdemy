import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//class based component will fetch data, can initialize a complex operation
//fuction based component are used for only return static data
//is recomended implement class based components
export default class AlbumList extends Component {
  //https://reactjs.org/docs/react-component.html
  /*componentWillMount() is invoked immediately before mounting occurs. It is called before 
  render(), therefore calling setState() synchronously in this method will not trigger an extra 
  rendering. Generally, we recommend using the constructor() instead.*/

  //al implementar un componente que requiera cambiar su estado, debemos 
  //implementar 3 partes importantes

  //1ro)  establecer un state initial o por defecto

  state = { albums: [] }; //empty state

  componentWillMount() {
    console.log('componentWillMount in Album List');
    //get json data
    //axios is a library
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data })); //record data in albums state
  }
  
  renderAlbums() {
    //map() is an array helper, la usamos para generar un nuevo array de diferente tipo
    //en este caso se devolverá un array de items <Text>
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() { 
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()} 
      </View>
    );
  }
}
