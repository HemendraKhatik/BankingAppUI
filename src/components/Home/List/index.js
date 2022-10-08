import * as React from "react";
import { View, Text, Image } from "react-native";
import { FlashList } from "@shopify/flash-list";

import Currency from '../../../assets/icons/currency.svg';
import Received from '../../../assets/icons/received.svg';
import Sent from '../../../assets/icons/sent.svg';
import Failed from '../../../assets/icons/failed.svg';
import { styles } from "./styles";
import { scale } from 'react-native-size-matters';
import { TransactionsData } from "../../../constants";



const renderItem = ({ item, index }) => {

  const rowColor = index % 2 === 0 ? "#192259" : "#10194E";

  let statusColor = "#FE4A54";
  let Icon = ()=> <Failed/>;

  switch (item.status) {
    case "received":
      statusColor = "#1DC7AC"
      Icon =  ()=> <Received/>;
      break
    case "sent":
      statusColor = "#FAAD39"
      Icon =  ()=> <Sent/>;
      break
    default:
      statusColor = "#FE4A54"
     Icon = ()=> <Failed/>;
  }
  return (
    <View style={[{ backgroundColor: rowColor }, styles.container]}>

      <Image resizeMode="cover" source={item.img} style={styles.img}/>

      <View style={{ flex: 1, paddingLeft: scale(16),alignItems:"flex-start" }}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={[styles.status, { backgroundColor: statusColor }]}>
          <Icon width={scale(16)} height={scale(16)}/>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Currency width={scale(16)} height={scale(12)} fill={statusColor}/>
        <Text style={[styles.amount,{color:statusColor}]}>{item.amount}</Text>
      </View>
    </View>
  )
}

const List = () => {
  return (
    <FlashList
      data={TransactionsData}
      renderItem={renderItem}
      estimatedItemSize={20}
    />
  );
};

export default List;