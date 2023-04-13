import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import LoginPage from "./pages/LoginPage";
import HomeScreen from "./pages/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { Weather } from "@teamkeel/sdk";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login Page"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home Screen"
            component={HomeScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
        {/* <StatusBar style="auto" /> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
