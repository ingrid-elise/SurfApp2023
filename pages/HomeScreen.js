import { Text, View, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <Text>Temperature</Text>
        <Text>Hello, Bondi Beach</Text>
      </View>
      <View>
        <Text>Today</Text>
        <View style={styles.todayBlock}>
          <View style={styles.todayIndividualBlocks}>
            <Text style={styles.conditionText}>Now</Text>
            <Text>Wave Height</Text>
            <Text>Wind direction</Text>
            <Text>Wind speed</Text>
          </View>
          <View style={styles.todayIndividualBlocks}>
            <Text style={styles.conditionText}>2 hours ahead</Text>
            <Text>Wave Height</Text>
            <Text>Wind direction</Text>
            <Text>Wind speed</Text>
          </View>
          <View style={styles.todayIndividualBlocks}>
            <Text style={styles.conditionText}>4 hours ahead</Text>
            <Text>Wave Height</Text>
            <Text>Wind direction</Text>
            <Text>Wind speed</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  todayBlock: {
    // backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  todayIndividualBlocks: {
    backgroundColor: "#1D577D",
    borderRadius: 10,
    marginLeft: 5,
    padding: 5,
  },
  conditionText: {
    color: "white",
  },
});
