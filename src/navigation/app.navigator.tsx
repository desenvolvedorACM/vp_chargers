import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import HomeRTKQuery from "../screens/HomeRTKQuery";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="HomeRTK"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeRTK" component={HomeRTKQuery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
