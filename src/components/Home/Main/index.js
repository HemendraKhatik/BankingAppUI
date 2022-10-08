import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import Amount from '../../Resuable/Amount';
import Button from '../../Resuable/Button';
import { styles } from './styles';
import {scale} from 'react-native-size-matters';

function Main() {
    const navigation = useNavigation();
    const searchUser = () => navigation.navigate('Search');
    return (
        <React.Fragment>
            <Text style={styles.heading}>Your current balance is</Text>

            <Amount amount="200,000" />

            <View style={styles.btns}>
                <Button style={[styles.actionBtn,{marginRight:scale(15)}]} action={searchUser} text="Request Money" />
                <Button style={styles.actionBtn} action={searchUser} text="Send Money" />
            </View>
        </React.Fragment>
    );
}


export default Main;
