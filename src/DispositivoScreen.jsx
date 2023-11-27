import { Button, Text, View } from "react-native";
import MyHeader from "./components/MyHeader";

export default function DispositivoScreen({navigation}) {
    return (
        <View>
            <MyHeader title={"Dispositivo"}/>
            <Text>Dispositivo</Text>
            <Button title={"VOLTAR AO MENU"} onnPress={() => navigation.navigate("Menu")}/>
        </View>
    );
}