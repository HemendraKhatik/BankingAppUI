import { useEffect, useRef } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';

function RequestScreen() {
  const progress = useRef(new Animated.Value(0.5)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animated.timing(progress, { toValue: 1, useNativeDriver: true }).start();
    // Animated.timing(scale, { toValue: 2, useNativeDriver: true }).start();

    // Animated.sequence([
    //   Animated.timing(progress, { toValue: 1, useNativeDriver: true }),
    //   Animated.timing(progress, { toValue: 0.5, useNativeDriver: true }),
    // ]).start();

    // Animated.sequence([
    //   Animated.timing(scale, { toValue: 2, useNativeDriver: true }),
    //   Animated.timing(scale, { toValue: 1, useNativeDriver: true })
    // ]).start();


    // Animated.parallel([
    //   Animated.sequence([
    //     Animated.timing(progress, { toValue: 1, useNativeDriver: true }),
    //     Animated.timing(progress, { toValue: 0.5, useNativeDriver: true }),
    //   ]),
    //   Animated.sequence([
    //     Animated.timing(scale, { toValue: 2, useNativeDriver: true }),
    //     Animated.timing(scale, { toValue: 1, useNativeDriver: true })
    //   ])
    // ]).start();

    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(progress, { toValue: 1, useNativeDriver: true }),
          Animated.timing(progress, { toValue: 0.5, useNativeDriver: true }),
        ]),
        Animated.sequence([
          Animated.timing(scale, { toValue: 2, useNativeDriver: true }),
          Animated.timing(scale, { toValue: 1, useNativeDriver: true })
        ])
      ]),{
        iterations:3
      }
    ).start();
  }, [])
  return (
    <View style={styles.container}>
      {/* <Text>Request screen</Text> */}
      <Animated.View style={[styles.box,
       {
        borderRadius: progress.interpolate({
          inputRange: [0.5, 1],
          outputRange: [0.5 * SIZE / 2, 1 * SIZE / 2]
        }),
        opacity: progress,
        transform: [
          { scale },
          {
            rotate: progress.interpolate({
              inputRange: [0.5, 1],
              outputRange: [`0deg`, `360deg`]
            })
          }
        ]
      }]}></Animated.View>
    </View>
  );
}

const SIZE = 100;

const styles = StyleSheet.create({
  container: {
    height:"30%",
    marginTop:"auto",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"green"
  },
  box: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "red"
  }
});

export default RequestScreen;