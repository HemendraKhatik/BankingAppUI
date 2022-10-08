const { StyleSheet } = require("react-native");
import {scale} from "react-native-size-matters";
import { fonts } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        margin: 0,
        marginTop: scale(100)
    },
    innerContainer: {
        flex: 1,
        backgroundColor: "#10194E",
        borderTopRightRadius: scale(40),
        borderTopLeftRadius: scale(40),
        alignItems: "center"
    },
    actionBtns: {
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
        marginTop: scale(50)
    },
    actionBtn: {
        width: "33.33%",
        padding: scale(25),
        justifyContent: "center",
        alignItems: "center"
    },
    actionBtnText: {
        color: "#ffffff",
        fontSize: scale(24),
        fontFamily:fonts.medium.name,
        fontWeight:fonts.medium.weight,
    },
    continueBtn: {
        width: scale(147),
        height: scale(40),
        marginTop: scale(85),
        backgroundColor: "#FF2E63",
        borderRadius: scale(10),
        justifyContent: "center",
        alignItems: "center"
    },
    continueBtnText: {
        color: "#ffffff",
        fontWeight: "600"
    },
    closeIcon: {
        width: "100%",
        alignItems: "center",
        position: "absolute",
        top: scale(-45)
    }
})

export {
    styles
}