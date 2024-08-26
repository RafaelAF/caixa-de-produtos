import MaterialCommunityIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function (){
    return(
        <Tabs screenOptions={{
            headerTitleAlign: 'center',
            tabBarShowLabel: false,
        }}>
            <Tabs.Screen name="index" options={{
                headerShown: true,
                headerTitle: "Caixa",
                tabBarIcon: ({color}) => <Component color={color} text="Home" />
            }} />
            <Tabs.Screen name="vendas" options={{
                headerTitle: "Vendas",
                tabBarIcon: ({color}) => <Component color={color} text="Vendas" />
            }} />
            <Tabs.Screen name="(products)" options={{
                headerShown: false,
                headerTitle: "Produtos",
                tabBarIcon: ({color}) => <Component color={color} text="Produtos" />
            }} />
        </Tabs>
    )
}

const Component = ({color, text}: any) => {
    return (
        <Text style={{color: color}}>{text}</Text>
    )
}