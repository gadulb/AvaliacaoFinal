import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

const styles = StyleSheet.create({
    header: {
        padding: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: "#6495ED",

    },
    text: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
    },

});
export default function MyHeader({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    );
}