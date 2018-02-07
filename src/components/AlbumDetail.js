import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
//Card es un componente que debe recibir un componente como atributo

//(props) representa el parámetro recibido que son los atributos enviados desde el parent
//<AlbumDetail key={album.title} album={album} /> album is the prop
const AlbumDetail = ({ album }) => {
  //declaracion de atributos que seran tomados del props.album y
  //se eliminaran las referencias props.album a lo largo del render component
  //se dice que es crear multiples referencias
  const { title, artist, thumbnail_image, image } = album; 
  //crear referencias de estilo
  const { 
    thumbnailStyle, 
    headerContentStyle, 
    thumbnailContainerStyle,
    imageStyle,
    headerTextStyle
  } = styles;

  //el component Image por default no tiene dimensión, se debe definir un estilo
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image 
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image 
          style={imageStyle}
          source={{ uri: image }} 
        />
      </CardSection>
    </Card>
  );
};
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
