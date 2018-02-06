//se ha eliminado todo, de acuerdo al curso, vamos a reescribir todo para comprender 
//el desarrollo de una app


// 1. Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';

//after Header created
import Header from './src/components/header'; //nota que partimos desde ./src
import AlbumList from './src/components/AlbumList';

// 2. Create a component
//ESLint indica error por las llaves, no es un error, sino que esteticamente debe ser corto si 
//solo se contiene una instrucción en la funcion
const App = () => //{
  (//return (
    <View>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
//};

// 3. Render it to the device

//render aplication called "albums" must be the same string of project name as was created
AppRegistry.registerComponent('albums', () => App);
//en una app react este es el punto de entrada principal
//only the root component uses AppRegistry
