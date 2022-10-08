import { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import BG from '../assets/bg.png';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Indicator from '../assets/icons/indicator.svg';
import {scale} from "react-native-size-matters";
import { fonts } from '../constants';

function LandingScreen({ navigation }) {

  useEffect(() => {
    // Removing default bottom navigation bar
    SystemNavigationBar.immersive();
  }, [])
  return (
    <ImageBackground resizeMode='cover' source={BG} style={styles.bg}>
      <View style={styles.bottomContainer}>
        <Indicator/>
        <Text style={styles.heading}>Transfer That Is Safe</Text>
        <Text style={styles.subHeading}>
          You have nothing to be scared about, we got you covered.
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.btn}>
          <Text style={styles.btnText}>Start banking</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  bg: {
    flex: 1,
    paddingRight: scale(52),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0E164D',
  },
  bottomContainer: {
    padding: scale(32),
    width: '100%',
    height: scale(224),
    marginTop: 'auto',
    borderTopEndRadius: scale(70),
    backgroundColor: '#17288E',
  },
  heading: {
    fontSize: scale(18),
    lineHeight: scale(30),
    fontFamily:fonts.bold.name,
    fontWeight:fonts.bold.weight,
    marginTop:scale(16),
    color: '#FFFFFF',

  },
  subHeading: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontFamily:fonts.regular.name,
    fontWeight:fonts.regular.weight,
    color: '#FAFAFA',
  },
  btn: {
    backgroundColor: '#fafafa',
    width: scale(155),
    paddingHorizontal: scale(23),
    paddingVertical: scale(10),
    borderRadius: scale(10),
    marginTop: scale(24),
  },
  btnText: {
    color: '#17288E',
    fontSize: scale(16),
    lineHeight: scale(30),
    fontFamily:fonts.medium.name,
    fontWeight:fonts.medium.weight,
  },
});

export default LandingScreen;
