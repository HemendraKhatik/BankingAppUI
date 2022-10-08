const { StyleSheet } = require("react-native");
import {scale} from "react-native-size-matters";
import { fonts } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: scale(24),
        marginBottom:scale(80),
        width:"100%"
    },
    btn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    btnText: {
        fontSize: scale(14),
        lineHeight: scale(24),
        fontFamily: fonts.regular.name,
        fontWeight: fonts.regular.weight,
        color: "#ffffff",
        marginRight: scale(17),
        marginLeft: scale(4)
    },
    heading: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: scale(18),
        lineHeight:scale(26),
        paddingLeft:scale(40),
        fontFamily: fonts.medium.name,
        fontWeight: fonts.medium.weight,
    }
})

export {
    styles
}