import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Banner = () => {
    return (
        <View>
            <View style={styles.bannerSectionStyle}>
                <Image 
                    source={{uri:'https://static.wixstatic.com/media/28dfca_08523df261e7458e86651196a797746c~mv2.jpg/v1/fill/w_750,h_1121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/000041.jpg'}}
                    style={styles.imageStyle}
                />
                <Text style={styles.bannerTitleStyle1}>DSPS</Text>
                <Text style={styles.bannerTitleStyle2}>DSPS</Text>
            </View>
            <View style={styles.line}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    bannerSectionStyle:{
        justifyContent: "center",
        alignItems:"center",
        height: 250,
        marginTop: 35,
      },
    bannerTitleStyle1:{
        position:"absolute",
        fontSize: 60,
        left:30,
        bottom:-10,
        fontStyle: 'italic',
        color:"#232323",
    },
    bannerTitleStyle2:{
        position:"absolute",
        fontSize: 60,
        right:30,
        top:-10,
        fontStyle: 'italic',
        color:"#232323",
    },
    imageStyle: {
        height: 180,
        width: 180,
    },
    line:{
        borderBottomWidth:1,
        borderBottomColor:"#232323",
        marginTop: 80,
        marginHorizontal:30,
        opacity: 0.6,
    },
});
    
export default Banner;