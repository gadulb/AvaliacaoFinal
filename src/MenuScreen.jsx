import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  boldText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  botao: {
    backgroundColor: "#B0E0E6",
    width: 300,
    height: 50,
    border: 0,
    padding: 0,
    marginBottom: 20,
    boxShadow: 0,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    alignContent: "center",
  },
});

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Menu</Text>
      <Button
        style={styles.botao}
        title="INÍCIO"
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Button
        style={styles.botao}
        title="BUSSOLA"
        onPress={() => navigation.navigate("BussolaScreen")}
      />
    </View>
  );
}
