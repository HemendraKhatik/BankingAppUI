import { StyleSheet } from 'react-native';
import {scale} from 'react-native-size-matters';
import { fonts } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: scale(24),
        backgroundColor: '#010A43',
    },
    heading: {
        color: '#ffffff',
        fontSize: scale(12),
        lineHeight: scale(11),
        marginTop: scale(48),
        marginBottom: scale(16),
        fontFamily:fonts.regular.name,
        fontWeight:fonts.regular.weight,
    }, 
    btns:{ 
        flexDirection: "row",
         marginTop: scale(34) 
    },
    actionBtn: {
        paddingHorizontal: scale(24),
        paddingVertical: scale(16),
        flex: 1, 
    },
});

export {styles}