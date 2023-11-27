import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import MenuScreen from "./MenuScreen";
import DispositivoScreen from "./BussolaScreen";
import MyHeader from "./components/MyHeader";
import BussolaScreen from "./BussolaScreen";


const Stack = createNativeStackNavigator();

export default function RootNavigation({navigation}) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="MenuScreen"
                    component={MenuScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="BussolaScreen"
                    component={BussolaScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="MyHeader"
                    component={MyHeader}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
