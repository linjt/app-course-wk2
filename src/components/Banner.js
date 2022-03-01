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
            <View style={styles.cardTitleSection}>
                <Text style={styles.cardTitleStyle}>discography</Text>
            </View>
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
    },
    bannerTitleStyle2:{
        position:"absolute",
        fontSize: 60,
        right:30,
        top:-10,
        fontStyle: 'italic',
    },
    imageStyle: {
        height: 180,
        width: 180,
    },
    line:{
        borderBottomWidth:1,
        borderBottomColor:"#ff6a00",
        marginTop:75,
        marginHorizontal:30,
    },
    cardTitleSection:{
        justifyContent: "space-around",
        alignItems:"center",
        marginTop: 40,
      },
    cardTitleStyle:{
        fontSize:28,
        fontWeight:"bold",
        lineHeight:30,
        letterSpacing: 2,
    },
});
    
export default Banner;