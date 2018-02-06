import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
//Card es un componente que debe recibir un componente como atributo

//(props) representa el parámetro recibido que son los atributos enviados desde el parent
//<AlbumDetail key={album.title} album={album} /> album is the prop
const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>

    </Card>
  );
};

export default AlbumDetail;
