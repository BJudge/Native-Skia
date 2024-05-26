import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeBackground from "../HomeBackground";
import WeatherInfo from "./WeatherInfo";
import ForecastSheet from "../sheet/ForecastSheet";
import WeatherTabBar from "../tabbar/WeatherTabBar";
import { currentWeather } from "../../data/CurrentWeather";
import { ForecastSheetProvider } from "../../context/ForecastSheetContext";

const Home = () => {
  return (
    <ForecastSheetProvider>
      <HomeBackground />
      <WeatherInfo />
      <ForecastSheet />
      <WeatherTabBar />
    </ForecastSheetProvider>
  );
};

export default Home;

const styles = StyleSheet.create({});
