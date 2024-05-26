import * as Location from "expo-location";
import { Alert } from "react-native";
import { WeatherService } from "./WeatherService";

export const getLocationData = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    Alert.alert("Permission to access location was denied");
    return null;
  }

  const location = await Location.getCurrentPositionAsync();
  return location.coords;
};

export const fetchhWeatherData = async (
  latitude: number,
  longitude: number
) => {
  const service = new WeatherService(latitude, longitude);
  console.log(service);
  return await service.FetchAll();
};
