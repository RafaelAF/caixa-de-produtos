import MaterialCommunityIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function (){
    return(
        <Stack screenOptions={{
            // headerShown: true,
            headerTitleAlign: 'center',
        }}>
            <Stack.Screen name="produtos" options={{
                headerTitle: "Produtos",
                headerShown: true,
            }} />
            <Stack.Screen name="editproduct" options={{
                headerTitle: "Editar Produto",
                headerShown: true,
            }} />
            <Stack.Screen name="newproduct" options={{
                headerTitle: "Cadastrar Produto",
                headerShown: true,
            }} />
        </Stack>
    )
}

