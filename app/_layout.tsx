import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function RootLayout () {
    return (
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen name="index" />
                {/* <Drawer.Screen name="vendas" /> */}
            </Drawer>
        </GestureHandlerRootView>
    )
} 