import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles';

function Button({ type, text, action, style,disabled,textStyle }) {
    if (type === "filled") {
        return (
            <TouchableOpacity disabled={disabled} onPress={action} style={[styles.btn, style,{opacity:disabled?0.6:1}]}>
                <Text style={[styles.btnText,textStyle]}>{text}</Text>
            </TouchableOpacity>
        )
    } else {

        return (
            <TouchableOpacity onPress={action} style={[styles.btn,styles.btnTwo, style]}>
                <Text style={[styles.btnText,textStyle]}>{text}</Text>
            </TouchableOpacity>
        )
    }

}

export default Button;

