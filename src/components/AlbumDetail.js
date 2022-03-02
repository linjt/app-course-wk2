import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumDetail = (props) => {
  const { title, smallTitle, image } = props.album;
  return (
    <View>
      <View style={styles.ContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTitleStyle}>{title}</Text>
            <Text  style={styles.headerTextStyle}>{smallTitle}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: image
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems:"center",
    padding:10,
  },
  headerTitleStyle:{
    textAlign:"center",
    fontSize: 18,
    textDecorationColor:'#eee',
    color:"#232323",
  },
  headerTextStyle:{
    fontStyle: 'italic',
    fontSize: 14,
    marginTop: 3,
    color:"#4D4D4D",
  },
  ContainerStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 40,
  },
  cardSectionStyle: {
    justifyContent: "center",
    alignItems:"center",
    padding: 10,
  },
  imageStyle: {
    height: 150,
    width: 150,
    marginTop: -15,
  }
});

export default AlbumDetail;