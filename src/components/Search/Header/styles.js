const { StyleSheet } = require("react-native");
import {scale} from "react-native-size-matters";
import { fonts } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: scale(10),
        paddingHorizontal: scale(16)
    },
    btn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    btnText: {
        fontWeight: "400",
        fontSize: scale(14),
        lineHeight: scale(24),
        fontFamily:fonts.regular.name,
        fontWeight:fonts.regular.weight,
        color: "#ffffff",
        marginRight: scale(17),
        marginLeft: scale(4)
    },
    search: {
        borderWidth: scale(2),
        flex: 1,
        borderColor: "#1DC7AC",
        borderRadius: scale(8),
        color: "#ffffff",
        paddingLeft:scale(16),
        fontSize:scale(14),
        lineHeight:scale(24),
        fontFamily:fonts.regular.name,
        fontWeight:fonts.regular.weight,
    }
})


export { styles }