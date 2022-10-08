import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Home/Header';
import Main from '../components/Home/Main';
import Transactions from '../components/Home/Transanctions';
import BottomSheet from '../components/Resuable/BottomSheet';
import { scale } from 'react-native-size-matters';
import { STATUSBAR_HEIGHT } from '../utils/helper';
import SystemNavigationBar from 'react-native-system-navigation-bar';


function HomeScreen({ navigation }) {

  useEffect(() => {
    // Removing default bottom navigation bar
    SystemNavigationBar.immersive();
    navigation.addListener('beforeRemove', (e) => {
      // user can not go back from here to previos visited screen
      e.preventDefault();
    })
  }, [navigation])
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Header />
        <Main />
      </View>

      <BottomSheet style={{ flex: 1 }}>
        <Transactions />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: '#010A43',
  },
  innerContainer: {
    paddingHorizontal: scale(16),
  },

});

export default HomeScreen;
