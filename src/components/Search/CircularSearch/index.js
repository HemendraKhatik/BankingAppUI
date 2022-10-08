import { useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, Animated } from 'react-native';
import { styles } from './styles';
import { scale } from "react-native-size-matters";

function CircularResults({ users, selectUser, selectedUser }) {

  // We can use better approach here it's just for demo purpose and please ignore the image quality will be better in production
  const U1 = users[5]?.img;
  const U2 = users[4]?.img;
  const U3 = users[3]?.img;
  const U4 = users[2]?.img;
  const U5 = users[1]?.img;
  const U6 = users[0]?.img;

  // Scale animation
  const _scale = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(_scale, { toValue: 0.5, useNativeDriver: true }),
      Animated.spring(_scale, { toValue: 1, useNativeDriver: true })
    ]).start();
  }, [])

  return (
    <Animated.View style={[styles.container, { transform: [{ scale: _scale }] }]}>
      <View style={styles.center}>
        <View style={styles.circle}>
          <View style={[styles.circle, { transform: [{ rotate: "60deg" }],padding:44 }]}>

            {
              users[5] !== undefined &&
              <TouchableOpacity onPress={() => selectUser(5)} style={[styles.u1, styles.user, { width: selectedUser === 5 ? scale(60) : scale(40), height: selectedUser === 5 ? scale(60) : scale(40), borderColor: selectedUser === 5 ? "#1DC76B" : "#ffffff" }]}>
                <Text style={styles.username}>{users[5]?.name}</Text>

                <Image
                  source={U1}
                  style={{ width: "100%", height: "100%" }} />
              </TouchableOpacity>
            }


            {
              users[4] !== undefined &&
              <TouchableOpacity onPress={() => selectUser(4)} style={[styles.u2, styles.user, { width: selectedUser === 4 ? scale(60) : scale(40), height: selectedUser === 4 ? scale(60) : scale(40), borderColor: selectedUser === 4 ? "#1DC76B" : "#ffffff" }]}>
                <Text style={[styles.username, { color: selectedUser === 4 ? "#1DC76B" : "#ffffff" }]}>{users[4]?.name}</Text>
                <Image
                  source={U2}
                  style={{ width: "100%", height: "100%" }} />
              </TouchableOpacity>
            }

            {
              users[3] !== undefined &&
              <TouchableOpacity onPress={() => selectUser(3)} style={[styles.u3, styles.user, { width: selectedUser === 3 ? scale(60) : scale(40), height: selectedUser === 3 ? scale(60) : scale(40), borderColor: selectedUser === 3 ? "#1DC76B" : "#ffffff" }]}>
                <Text style={[styles.username, { color: selectedUser === 3 ? "#1DC76B" : "#ffffff" }]}>{users[3]?.name}</Text>
                <Image
                  source={U3}
                  style={{ width: "100%", height: "100%" }} />
              </TouchableOpacity>
            }
            {users[2] !== undefined &&
              <TouchableOpacity onPress={() => selectUser(2)} style={[styles.u4, styles.user, { width: selectedUser === 2 ? scale(60) : scale(40), height: selectedUser === 2 ? scale(60) : scale(40), borderColor: selectedUser === 2 ? "#1DC76B" : "#ffffff" }]}>
                <Text style={[styles.username, { color: selectedUser === 2 ? "#1DC76B" : "#ffffff" }]}>{users[2]?.name}</Text>
                <Image
                  source={U4}
                  style={{ width: "100%", height: "100%" }} />
              </TouchableOpacity>}

            <View style={[styles.circle, { transform: [{ rotate: "60deg" }], width: scale(165), height: scale(165) }]}>
              {
                users[0] !== undefined &&
                <TouchableOpacity onPress={() => selectUser(0)} style={[styles.u5, styles.user, { width: selectedUser === 0 ? scale(60) : scale(40), height: selectedUser === 0 ? scale(60) : scale(40), borderColor: selectedUser === 0 ? "#1DC76B" : "#ffffff" }]}>
                  <Text style={[styles.username, { color: selectedUser === 0 ? "#1DC76B" : "#ffffff" }]}>{users[0]?.name}</Text>
                  <Image
                    source={U6}
                    style={{ width: "100%", height: "100%" }} />
                </TouchableOpacity>
              }
              {
                users[1] !== undefined &&
                <TouchableOpacity onPress={() => selectUser(1)} style={[styles.u6, styles.user, { width: selectedUser === 1 ? scale(60) : scale(40), height: selectedUser === 1 ? scale(60) : scale(40), borderColor: selectedUser === 1 ? "#1DC76B" : "#ffffff" }]}>
                  <Text style={[styles.username, { color: selectedUser === 1 ? "#1DC76B" : "#ffffff" }]}> {users[1]?.name}</Text>
                  <Image
                    source={U5}
                    style={{ width: "100%", height: "100%" }} />
                </TouchableOpacity>
              }
            </View>
          </View>
        </View>
      </View>
    </Animated.View>
  );
}



export default CircularResults;