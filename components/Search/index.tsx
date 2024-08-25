import { useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';


export const Search = () => {
    const [search, setSearch] = useState<string>("")
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                value={search}
                onChangeText={setSearch}
                keyboardType="default"
            />
            <Pressable style={styles.icon} onPress={()=> {
                alert(search)
            }}>
                <Ionicons name="search" size={24} color="#868C9F" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
    },
    searchBar: {
        borderColor: "f00",
        maxHeight: 55,
        borderWidth: 1,
        fontSize: 18,
        paddingVertical: 16,
        paddingHorizontal: 22,
        borderRadius: 10
    },
    icon: {
        position: "absolute",
        right: 20,
        top: 17,
        color: "#868C9F"
    }
})