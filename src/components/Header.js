import React from "react";
import { StyleSheet, Text, View ,Image } from "react-native";

const Header = () => {
  return (
    <View>
    <View style={styles.headerStyle}>
        <View style={styles.headerBoxStyle}></View>
        <Text style={styles.textStyle}>DSPS's discography</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    shadowColor: "#232323",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    // Android Only
    elevation: 7,
    // opacity:0.8,
  },
  headerBoxStyle:{
    
  },
  textStyle: {
    fontSize: 17,
    letterSpacing:0.2,
    fontWeight:"600"
  },
});

export default Header;
