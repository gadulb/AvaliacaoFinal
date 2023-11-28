import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import MyHeader from "./components/MyHeader";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F45AAF",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 25,
  },
  button: {
    backgroundColor: "#00D3F5",
    width: 120,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  gifContainer: {
    borderColor: "#00D3F5",
    borderWidth: 5,
    borderRadius: 5,
    marginTop: 16,
  },
  gifImage: {
    width: 200,
    height: 200,
  },
});

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <MyHeader title={"Menu"} />
      <Text style={styles.headerText}>sekai de ichiban OHIME-SAMA</Text>
      <View style={styles.gifContainer}>
        <Image
          source={require("../assets/img/miku-the-world-is-mine.gif")}
          style={styles.gifImage}
        />
      </View>
      <Button
        style={styles.button}
        labelStyle={styles.buttonText}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        INÍCIO
      </Button>
      <Button
        style={styles.button}
        labelStyle={styles.buttonText}
        onPress={() => navigation.navigate("BussolaScreen")}
      >
        BUSSOLA
      </Button>
    </View>
  );
}
