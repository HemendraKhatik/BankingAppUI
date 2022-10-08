import { StyleSheet } from "react-native";
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    marginTop: scale(20),
    borderTopRightRadius: scale(40),
    borderTopLeftRadius: scale(40),
    backgroundColor: "#10194E",
  },
  innerContainer: {
    alignItems: "center",
    paddingTop: scale(16),
    marginBottom: scale(32)
  },
  line: {
    height: scale(7),
    width: scale(64),
    backgroundColor: "#4E589F",
    borderRadius: scale(10)
  }
});

export { styles };