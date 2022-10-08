import { StyleSheet } from "react-native";
import {scale} from 'react-native-size-matters';
import { fonts } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        color: '#ffffff',
        fontFamily:fonts.medium.name,
        fontWeight:fonts.medium.weight,
        fontSize: scale(20),
        lineHeight: scale(20),
        marginLeft: scale(24),
    }, btn: {
        width: scale(92),
        height: scale(32),
        backgroundColor: '#212A6B',
        borderRadius: scale(8),
    }, btnText: {
        color: '#426DDC',
        fontSize: scale(14),
        lineHeight: scale(24),
        fontFamily:fonts.medium.name,
        fontWeight:fonts.medium.weight,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export { styles }