import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import BackArrow from '../../../assets/icons/backArrow.svg';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

function Header() {
    const navigation = useNavigation();
    const back = ()=>navigation.goBack();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={back} style={styles.btn}>
                <BackArrow />
                <Text style={styles.btnText}> Back</Text>
            </TouchableOpacity>
            <Text style={styles.heading} >New Request</Text>
        </View>
    )
}

export default Header;