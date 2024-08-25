import Fontawesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native"


type Props = {
    title: string;
    iconName?: string;
    link: string;
}

export const BoxCategory = ({ title, iconName, link }: Props) => {
    return (
        <View style={styles.container}>
            <Link href={link}  asChild>
                <View style={styles.box}>
                    <Fontawesome name="home" size={24} color="#868C9F" />
                </View>
            </Link>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    },
    title: {
        fontSize: 14,
    },
    box: {
        maxWidth: 54,
        maxHeight: 54,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    }
})