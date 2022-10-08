import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Keyboard } from 'react-native';
import BottomSheet from '../components/Resuable/BottomSheet';
import CircularResults from '../components/Search/CircularSearch';
import Header from '../components/Search/Header';
import EnterMoney from '../components/Search/EnterMoney';
import { dummyData, fonts } from '../constants';
import Button from '../components/Resuable/Button';
import { scale } from "react-native-size-matters";
import { STATUSBAR_HEIGHT } from '../utils/helper';
import SystemNavigationBar from 'react-native-system-navigation-bar';


function SearchScreen() {

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [sendToUser, setSendToUser] = useState("");
  const [users, setUsers] = useState([]);

  // here deafault value is -1 to show and hide the bottom sheet
  const [selectedUser, setSelectedUser] = useState(-1);
  // here -1 means hide else show the bottom sheet
  const hideSheet = () => setSelectedUser(-1);


  const selectUser = (index) => {
    setSelectedUser(index);
    setSendToUser(users[index]);
    Keyboard.dismiss()

  }

  const searchUser = (value) => {
    setSearch(value);

    if (value !== "") {
      // Here we will call api also we would need to optimize apis calls here 
      const findUsers = dummyData.filter((user) => user.name.toLowerCase().includes(value.toLowerCase()));
      setUsers(findUsers);
    } else {
      setUsers([]);
    }
  }

  const toggle = () => setOpenModal(!openModal);

  useEffect(() => {
    // Removing default bottom navigation bar
    SystemNavigationBar.immersive();
  }, [])

  return (
    <View style={styles.container}>
      <Header hideSheet={hideSheet} search={search} searchUser={searchUser} />

      {users.length > 0 && <CircularResults users={users} selectUser={selectUser} selectedUser={selectedUser} />}

      {selectedUser !== -1 &&
        <BottomSheet style={{ height: "40%" }}>
          <View style={styles.center}>

            <Image
              source={sendToUser.img}
              style={styles.userImg}
            />

            <Text style={styles.username}>{sendToUser?.name}</Text>
            <Text style={styles.number}>{sendToUser?.phoneNumber}</Text>

            <Button style={{ marginTop: scale(32) }} action={toggle} type="filled" text="Continue" />

          </View>
        </BottomSheet>
      }

      <EnterMoney user={sendToUser} isVisible={openModal} toggle={toggle} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: '#010A43',
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  username: {
    color: "#ffffff",
    marginVertical: scale(16),
    fontSize:scale(20),
    lineHeight:scale(20),
    fontFamily:fonts.medium.name,
    fontWeight:fonts.medium.weight,
  },
  userImg: {
    width: scale(72),
    height: scale(72),
    borderRadius: scale(100)
  },
  number: {
    color: "#ffffff",
    fontSize:scale(14),
    lineHeight:scale(21),
    fontFamily:fonts.regular.name,
    fontWeight:fonts.regular.weight,
  },
});

export default SearchScreen;