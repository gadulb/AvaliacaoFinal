import { Button, Text, View } from "react-native";
import MyHeader from "./components/MyHeader";

export default function BussolaScreen({navigation}) {
    return (
        <View>
            <MyHeader title={"Bussola"} />
            <Text>Bussola com pontos cardeais</Text>
            <Button title={"VOLTAR AO MENU"} onPress={() => navigation.navigate("MenuScreen")}/>
        </View>
    );
}