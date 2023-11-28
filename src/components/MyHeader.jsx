import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

const styles = StyleSheet.create({
    header: {
        alignSelf: 'stretch',
        padding: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: "#00D3F5",


    },
    text: {
        marginTop: 20,
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