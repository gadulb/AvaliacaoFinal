import { Button, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: "#6495ED",
        flex: 1,
    },
});

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Seja Bem-Vindo!</Text>
            <Text>Equipe:</Text>
            <Text>Adriano Ramos</Text>
            <Text>Gabrieli Eduarda Lembeck</Text>
            <Text>Nina Carolina Lima Barater</Text>
            <Button title={"MENU"} onPress={() => navigation.navigate("MenuScreen")}/>
        </View>
    );
}