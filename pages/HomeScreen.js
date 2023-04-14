import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Geolocation from "react-native-geolocation-service";

const HomeScreen = ({ navigation }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude, longitude);
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  const lat = latitude;
  const lng = longitude;
  // Bondi lat and long
  //   const lat = -33.890842;
  //   const lng = 151.274292;
  const params = "waveHeight,airTemperature";

  fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
    {
      headers: {
        Authorization:
          "411512a6-b996-11ea-9409-0242ac130002-41151364-b996-11ea-9409-0242ac130002",
      },
    }
  )
    .then((response) => response.json())
    .then((jsonData) => {
      const temperatureValue = jsonData.hours[0].airTemperature.sg;
      setTemperature(temperatureValue);
      console.log(jsonData);
      console.log(temperatureValue);
    });

  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  )
    .then((response) => response.json())
    .then((data) => {
      const locationString = data.address.suburb;
      setLocation(locationString);
      console.log(locationString);
    })
    .catch((error) => {
      console.log(error);
    });

  const renderLocation = () => {
    if (latitude && longitude) {
      return (
        <View>
          {/* <Text>Latitude: {latitude}</Text>
          <Text>Longitude: {longitude}</Text> */}
          <Text>{location}</Text>
        </View>
      );
    } else {
      return <Text>Loading location...</Text>;
    }
  };

  return (
    <>
      <View>
        <View>
          {temperature ? (
            <Text>Air temperature: {temperature}°C</Text>
          ) : (
            <Text>Loading temperature...</Text>
          )}
        </View>
        <Text>Hello, {renderLocation()}</Text>
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
