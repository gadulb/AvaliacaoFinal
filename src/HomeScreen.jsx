import { Button, Text, View } from "react-native";

export default function HomeScreen({navigation}) {
    return (
        <View>
            <Text>Seja Bem-Vindo!</Text>
            <Text>Equipe:</Text>
            <Text>Adriano Ramos</Text>
            <Text>Nina Carolina Lima Barater</Text>
            <Button title={"MENU"} onPress={() => navigation.navigate("MenuScreen")}/>
        </View>
    );
}