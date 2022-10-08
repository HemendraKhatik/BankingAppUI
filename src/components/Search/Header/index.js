import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import BackArrow from '../../../assets/icons/backArrow.svg';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

function Header(props) {
  const navigation = useNavigation();
  const back = ()=>navigation.goBack();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={back} style={styles.btn}>
        <BackArrow />
        <Text style={styles.btnText}> Back</Text>
      </TouchableOpacity>
      <TextInput
        onFocus={()=>props.hideSheet()}
        autoFocus={true}
        placeholderTextColor="#ffffff"
        placeholder='Search'
        value={props.search}
        onChangeText={props.searchUser}
        style={styles.search} />
    </View>
  )
}

export default Header;