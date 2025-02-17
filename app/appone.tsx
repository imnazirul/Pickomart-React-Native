import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const App = () => {
//   useEffect(() => {
//     router.replace("/app");
//   }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
      }}
    >
      <Image
        style={{ width: "100%" }}
        source={require("../assets/images/splash.png")}
        resizeMode="contain"
      />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
