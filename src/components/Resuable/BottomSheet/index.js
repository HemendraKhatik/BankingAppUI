import { View,  } from 'react-native';
import { styles } from './styles';

function BottomSheet({children,style}) {
  return (
    <View style={[styles.container,style]}>
      <View style={styles.innerContainer}>
        <View style={styles.line}></View>
      </View>
       {children}
    </View>
  );
}
export default BottomSheet;
