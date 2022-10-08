const { StyleSheet } = require("react-native");
import { scale } from "react-native-size-matters";
import { fonts } from "../../../constants";

const styles = StyleSheet.create({
    btn: {
        width: scale(147),
        minHeight: scale(40),
        backgroundColor: "#FF2E63",
        borderRadius: scale(10),
        justifyContent: "center",
        alignItems: "center"
    },
    btnTwo: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#464E8A"
    },
    btnText: {
        color: "#ffffff",
        fontFamily: fonts.medium.name,
        fontWeight: fonts.medium.weight,
    },
});

export { styles }
