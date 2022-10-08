import { Text, View } from 'react-native';
import Hamburger from '../../../assets/icons/hamburger.svg';
import Button from '../../Resuable/Button';
import { styles } from './styles';


function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Hamburger />
                <Text style={styles.name}>Hello Sandra,</Text>
            </View>
            <Button type="filled" action={() => alert("Coming soon...")} style={styles.btn} textStyle={styles.btnText} text="Add money"/>
        </View>
    );
}
export default Header;
