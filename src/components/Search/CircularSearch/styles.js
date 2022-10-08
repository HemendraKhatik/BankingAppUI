import { StyleSheet } from "react-native";
import {scale} from "react-native-size-matters";
import { fonts } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    circle: {
        padding: scale(50),
        borderRadius: scale(200),
        borderWidth: scale(0.1),
        borderColor: "#c4c4c4",
    },
    user: {
        width: scale(36),
        height: scale(36),
        borderRadius: scale(100),
        position: "absolute",
        justifyContent: "center",
        alignItems: 'center',
        borderWidth: scale(4)
    },
    username: {
        position: "absolute",
        bottom: scale(-28),
        width: scale(113),
        color: "#f2f2f2",
        textAlign: "center",
        fontSize:scale(12),
        lineHeight:scale(18),
        fontFamily:fonts.regular.name,
        fontWeight:fonts.regular.weight,
    },
    u1: {
        top: scale(25),
        left: 0,
        transform: [
            { rotate: "-60deg" },
        ]
    },
    u2: {
        top: scale(25),
        right: 0,
        transform: [
            { rotate: "-60deg" },
        ]
    }, u3: {
        bottom: scale(25),
        left: 0,
        transform: [
            { rotate: "-60deg" },
        ]
    },
    u4: {
        bottom: scale(25),
        right: 0,
        transform: [
            { rotate: "-60deg" },
        ]
    },
    u5: {
        top: scale(10),
        left: scale(-10),
        transform: [
            { rotate: "-120deg" },
        ]
    },
    u6: {
        bottom: scale(10),
        right: scale(-10),
        transform: [
            { rotate: "-120deg" },
        ]
    }
});

export {
    styles
}