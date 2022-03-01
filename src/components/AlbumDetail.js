import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumDetail = (props) => {
  const { title, artist, image } = props.album;
  return (
    <View>
      <View style={styles.ContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTitleStyle}>{title}</Text>
            <Text  style={styles.headerTextStyle}>{artist}</Text>
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
  },
  headerTitleStyle:{
    fontSize:25,
  },
  headerTextStyle:{
    fontStyle: 'italic',
    fontSize:16,
  },
  ContainerStyle: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: "#333",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
  },
  cardSectionStyle: {
    // borderWidth: 1,
    padding: 10,
    // backgroundColor: "#fff",
    // borderColor: "#ddd",
    justifyContent: "center",
    alignItems:"center",
  },
  imageStyle: {
    height: 150,
    width: 150,
  }
});

export default AlbumDetail;