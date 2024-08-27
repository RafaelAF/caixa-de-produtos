import { useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";

export const Search = () => {
    const [search, setSearch] = useState<string>("")
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.searchBarContainer}>
                    <TextInput
                        style={styles.searchBar}
                        value={search}
                        onChangeText={setSearch}
                        keyboardType="default"
                        placeholder="Pesquisar produto"
                    />
                    <Pressable onPress={()=> {
                        alert(search)
                    }}>
                        <Ionicons style={styles.icon} name="search" size={24} color="#868C9F" />
                    </Pressable>
                </View>

                <Pressable  style={styles.btnNewProduct} onPress={()=>{
                    router.navigate("(tabs)/(products)/newproduct")
                }}>
                    <AntDesign name="plus" size={32} color="#fff" />
                    {/* <AntDesign name="pluscircleo" size={64} color="#12A454" /> */}
                </Pressable>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // position: "relative",
        width: "100%",
    },
    searchBar: {
        borderColor: "f00",
        maxHeight: 55,
        borderWidth: 1,
        fontSize: 18,
        paddingVertical: 16,
        paddingHorizontal: 22,
        borderRadius: 10,
        width: "100%",
        position: "relative",
    },
    icon: {
        position: "absolute",
        right: 20,
        top: -40,
        color: "#868C9F"
    },
    content: {
        flexDirection: "row",
        gap: 20,
    },
    searchBarContainer: {
        flex: 1,
        position: "relative",
    },
    btnNewProduct: {
        backgroundColor: "#12A454",
        borderWidth: 1,
        borderColor: "#868C9F",
        flex: 1,
        maxHeight: 55,
        maxWidth: 63,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    }
})