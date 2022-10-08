import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import List from "../List";
import DownArrow from '../../../assets/icons/downArrow.svg';
import { styles } from "./styles";

function Transactions() {
  const [dropdown, setDropdown] = useState(false);
  const options = ["Option one", "Option two", "Option three"]
  return (
    <React.Fragment>

      <View style={styles.row}>
        <Text style={styles.heading}>All Transactions</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.sortBy}>Sort By:</Text>
          <TouchableOpacity onPress={() => setDropdown(!dropdown)}>
            <Text style={styles.recent}>Recent <DownArrow /> </Text>
          </TouchableOpacity>
        </View>
      </View>

      {dropdown && <View style={styles.dropdown}>
        {options.map((option, index) => {
          const even = index % 2 === 0;
          return (
            <TouchableOpacity key={index} style={{ backgroundColor: even ? "#f2f2f2" : "#d2d2d2" }} onPress={() => setDropdown(!dropdown)}>
              <Text style={styles.dropdownOption}>{option}</Text>
            </TouchableOpacity>
          )
        })}
      </View>}
      <List />
    </React.Fragment>
  );
}
export default Transactions;
