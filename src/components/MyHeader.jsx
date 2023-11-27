import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

const styles = StyleSheet.create({
    header: {
        height: 80,
        padding: 38,
        backgroundColor: "coral",
    },
    text: {
        color: "#fff",
        fontSize: 23,
        textAlign: "center",
    },
});
export default function MyHeader({navigation}) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    );
}