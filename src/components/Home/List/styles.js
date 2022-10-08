import { StyleSheet } from "react-native";
import { scale } from 'react-native-size-matters';
import { fonts } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    padding: scale(16),
    flexDirection: "row",
    alignItems: "center"
  },
  img: {
    width: scale(48),
    height: scale(48),
    borderRadius: scale(100),
  },
  status: {
    paddingHorizontal: scale(8),
    paddingVertical: scale(5),
    backgroundColor: "green",
    borderRadius: scale(20),
    marginTop: scale(4),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  statusText: {
    color: "#ffffff",
    fontSize: scale(12),
    lineHeight: scale(18),
    fontFamily: fonts.regular.name,
    fontWeight: fonts.regular.weight,
    marginLeft: scale(5),
  },
  amount: {
    fontFamily: fonts.bold.name,
    fontWeight: fonts.bold.weight,
    fontSize: scale(16),
    lineHeight: scale(24),
  },
  name: {
    color: "#858EC5",
    fontSize: scale(16),
    lineHeight: scale(24),
    fontFamily: fonts.bold.name,
    fontWeight: fonts.bold.weight,
    lineHeight: scale(24),
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  }
})


export { styles }