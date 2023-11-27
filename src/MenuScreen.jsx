import { Button } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function MenuScreen({navigation}) {
    return (
        <View>
            <Text>Menu</Text>
            <Button title={"INÍCIO"} onPress={() => navigation.navigate("HomeScreen")}/>
            <Button title={"BUSSOLA"} onPress={() => navigation.navigate("BussolaScreen")}/>
        </View>
    );
}