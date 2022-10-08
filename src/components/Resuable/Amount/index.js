import { Text, View } from 'react-native'
import React from 'react'
import CurrencyIcon from '../../../assets/icons/currency.svg';
import { scale } from "react-native-size-matters";
import { styles } from './styles';

function Amount({ amount, style }) {
    return (
        <View style={[styles.container, style]}>
            <CurrencyIcon width={scale(40)} height={scale(32)} fill="#ffffff" />
            <Text style={styles.amount}>{amount}</Text>
        </View>
    )
}

export default Amount;

