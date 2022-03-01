import React from "react";
import { ScrollView,StyleSheet,View } from "react-native";
import AlbumDetail from "./AlbumDetail";
import albumData from "../json/albums";
import Banner from "./Banner";

const Albumlist = () => {
  return (
    <ScrollView>
      <Banner />
      <AlbumDetail album = {albumData[0]} />
      <AlbumDetail album = {albumData[1]} />
      <AlbumDetail album = {albumData[2]} />
      <AlbumDetail album = {albumData[3]} />
      <View style={styles.bottomSpace}></View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  bottomSpace:{
    opacity:0,
    height:100,
  }
});

export default Albumlist;
