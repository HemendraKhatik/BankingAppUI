import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import CloseIcon from "../../../assets/icons/close.svg";
import Modal from 'react-native-modal';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Amount from '../../Resuable/Amount';
import Button from '../../Resuable/Button';
import {scale} from "react-native-size-matters";
import EraseIcon from "../../../assets/icons/erase.svg"

function EnterMoney({ isVisible, toggle, user }) {

    const [amount, setAmount] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [placeholder, setPlaceholder] = useState(false);

    const navigtion = useNavigation();

    // we can Move this logic in store to keep it modular but for this demo purpose I've kept it here only
    const typeAmount = (val) => {

        setBtnDisabled(false);
        setPlaceholder(false);

        // should not be two dots in an amount
        if (amount.split(".").length - 1 > 0 && val === ".") return;

        // Removing last letter
        if (val === "*") {
            if (amount.length <= 1) {
                setPlaceholder(true); // placeholder amount 0.00
                setBtnDisabled(true);
            }
            setAmount(oldAmount => oldAmount.slice(0, -1))
            return;
        }

        if (amount.length > 5) return;

        setAmount(oldAmount => oldAmount + val.toString());
    }

    const sendMoney = () => {
        // Closing popup from previous screen
        toggle();

        // using setTime here for smooth animation
        setTimeout(() => {
            navigtion.navigate("Request", { user, amount });
        }, 300);
    }
    const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "*"];

    useEffect(() => {
        setPlaceholder(true);
    }, [])

    return (
        <Modal style={styles.container} isVisible={isVisible}>
            <View style={styles.innerContainer}>

                {/* Reusable component */}
                <Amount style={{ marginTop: scale(72) }} amount={placeholder ? "0.00" : amount} />

                <View style={styles.actionBtns}>
                    {btns.map((item) => {
                        return (
                            <TouchableOpacity onPress={() => typeAmount(item)} key={item} style={styles.actionBtn}>
                                {item === "*"?<EraseIcon/>:<Text style={styles.actionBtnText}>{item}</Text>}
                            </TouchableOpacity>
                        )
                    })}
                </View>

                <Button style={{marginTop:scale(40)}} disabled={btnDisabled} action={sendMoney} type="filled" text="Send Money" />

                {/* Close icon */}
                <View style={styles.closeIcon}>
                    <TouchableOpacity onPress={toggle}>
                        <CloseIcon />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
export default EnterMoney;