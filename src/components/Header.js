import React from "react";
import { StyleSheet, Text, View ,Image } from "react-native";

const Header = () => {
  return (
    <View>
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>Albums</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 4
  },
  textStyle: {
    fontSize: 20
  },
  imageStyle:{
    height: 180,
    width: 180,
  },
});

export default Header;
