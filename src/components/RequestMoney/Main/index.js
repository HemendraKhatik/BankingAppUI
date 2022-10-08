import { View, Text, StyleSheet, Image, } from 'react-native'
import React from 'react'
import Amount from '../../Resuable/Amount';
import Button from '../../Resuable/Button';
import { useNavigation } from '@react-navigation/native';
import { scale } from "react-native-size-matters";
import { fonts } from '../../../constants';
import { styles } from './styles';

function Main({ user, amount }) {

    const navigation = useNavigation();

    const send = () => {
        alert("Money has been sent");
        navigation.navigate("Home");
    }
    const dontSend = () => navigation.navigate("Home");
    return (
        <React.Fragment>
            <View style={[styles.circle]}>
                <View style={[styles.circle, { backgroundColor: "#192259" }]}>
                    <Image style={styles.userImg} source={user?.img} />
                </View>
            </View>

            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.subText}>is requesting for</Text>

            {/* Reusable component */}
            <Amount style={{ marginTop: scale(24), marginBottom: scale(48) }} amount={amount} />


            <Button action={send} type="filled" text="Send Money" />
            <Button action={dontSend} style={{ marginTop: scale(24) }} text="Don't send" />
        </React.Fragment>
    )
}


export default Main;