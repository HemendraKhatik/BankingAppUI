import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from "./src/screens/LandingScreen";
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import RequestScreen from './src/screens/RequestScreen';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          options={{
            header: () => null
          }}
          component={LandingScreen}
        />
        <Stack.Screen
          options={{
            header: () => null,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerTransparent: true,
            gestureEnabled: true,
          }}
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          options={{
            header: () => null,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerTransparent: true,
            gestureEnabled: true,
          }}
          name="Search"
          component={SearchScreen}
        />

        <Stack.Screen
          options={{
            header: () => null,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerTransparent: true,
            gestureEnabled: true,
          }}
          name="Request"
          component={RequestScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
