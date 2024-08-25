// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Drawer } from 'expo-router/drawer';
// import { Text } from 'react-native';

import { Stack } from "expo-router";

export default function RootLayout () {
    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="(tabs)" />
        </Stack>
    )
} 