import { StyleSheet } from "react-native";
import { scale } from 'react-native-size-matters';
import { fonts } from "../../../constants";

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: "#4E589F",
    marginHorizontal: scale(16),
    borderRadius: scale(5),
    marginBottom: scale(20),
  },
  dropdownOption: {
    color: "#000000",
    fontSize: scale(18),
    padding: scale(10)
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(16),
    marginBottom: scale(24)
  },
  heading: {
    color: "#ffffff",
    fontSize: scale(16),
    fontFamily: fonts.medium.name,
    fontWeight: fonts.medium.weight
  },
  sortBy: {
    color: "#4E589F",
    marginRight: scale(9),
    fontSize: scale(14),
    fontFamily: fonts.regular.name,
    fontWeight: fonts.regular.weight
  },
  recent: {
    color: "#DDD9D9",
    fontSize: scale(14),
    fontFamily: fonts.regular.name,
    fontWeight: fonts.regular.weight
  }
});

export { styles };