import { StyleSheet } from "react-native";
import { fonts } from "../../../constants";
import { scale } from "react-native-size-matters";



const styles = StyleSheet.create({
    circle: {
        backgroundColor: "#10194E",
        padding: scale(25),
        borderRadius: scale(100),
        elevation: 1,
    },
    userImg: {
        width: scale(100),
        height: scale(100),
        borderRadius: scale(100),
    },
    username: {
        fontSize: scale(24),
        lineHeight:scale(32),
        fontFamily:fonts.medium.name,
        fontWeight:fonts.medium.weight,
        color: "#ffffff",
        marginVertical: scale(24)
    },
    subText: {
        fontSize: scale(14),
        lineHeight:scale(21),
        fontFamily:fonts.regular.name,
        fontWeight:fonts.regular.weight,
        color: "#ffffff",
    }
});


export {styles}