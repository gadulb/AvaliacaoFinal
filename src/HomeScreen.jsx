import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import MyHeader from "./components/MyHeader";

const styles = StyleSheet.create({
  container: {
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#F45AAF",
    flex: 1,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 25,
    
  },
  normalText: {
    fontSize: 18,
    marginBottom: 8,
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
    borderRadius: 5, // Adicione isso para cantos arredondados, se desejar
    marginTop: 16,
  },
  gifImage: {
    width: 200,
    height: 200,
  },
});

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <MyHeader title={"Home"} />
      <Text style={styles.headerText}>Seja Bem-Vindo!</Text>
      <View style={styles.gifContainer}>
        <Image
          source={require("../assets/img/miku-dance.gif")}
          style={styles.gifImage}
        />
      </View>
      <Text style={styles.headerText}>Equipe:</Text>
      <Text style={styles.normalText}>Adriano Ramos</Text>
      <Text style={styles.normalText}>Nina Carolina Lima Barater</Text>
      <Button
        style={styles.button}
        labelStyle={styles.buttonText}
        mode="contained"
        onPress={() => navigation.navigate("MenuScreen")}
      >
        MENU
      </Button>
    </View>
  );
}
