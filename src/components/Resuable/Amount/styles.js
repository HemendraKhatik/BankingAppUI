const { StyleSheet } = require("react-native");
const { fonts } = require("../../../constants");
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    amount: {
        fontSize: scale(40),
        marginLeft: scale(8),
        color: "#ffffff",
        fontFamily: fonts.bold.name,
        fontWeight: fonts.bold.weight,
    }
})

export {styles}