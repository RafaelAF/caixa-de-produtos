import { Text, View, SafeAreaView, StyleSheet, ScrollView, Button, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { ListItem } from "../../../components/ListItem";
import { Search } from "../../../components/Search";
import { router } from "expo-router";

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Search />
            <View style={styles.trasactions}>
                <Text style={styles.trasactionsTitle}>Transações recentes</Text>
                <ScrollView>
                    <ListItem type="product" data={{id: "asd", name: "Pastel de Flango", price: 1000}} />
                    <ListItem type="product" data={{id: "asd", name: "Sopa de Macaco", price: 1500}} />
                    <ListItem type="product" data={{id: "asd", name: "Arroz Doce", price: 850}} />
                    <ListItem type="product" data={{id: "asd", name: "Batata Frita", price: 350}} />
                    <ListItem type="product" data={{id: "asd", name: "Chá de amendoim", price: 1090}} />
                    <ListItem type="product" data={{id: "asd", name: "Quentão", price: 1000}} />
                    <ListItem type="product" data={{id: "asd", name: "Bolo de Muranguh", price: 1000}} />
                    <ListItem type="product" data={{id: "asd", name: "Pastel de Flango", price: 1000}} />
                    <ListItem type="product" data={{id: "asd", name: "Sopa de Macaco", price: 1500}} />
                    <ListItem type="product" data={{id: "asd", name: "Arroz Doce", price: 850}} />
                    <ListItem type="product" data={{id: "asd", name: "Batata Frita", price: 350}} />
                    <ListItem type="product" data={{id: "asd", name: "Chá de amendoim", price: 1090}} />
                    <ListItem type="product" data={{id: "asd", name: "Quentão", price: 1000}} />
                    <ListItem type="product" data={{id: "asd", name: "Bolo de Muranguh", price: 1000}} />
                    
                </ScrollView>
            </View>
            <Pressable style={styles.newProduct} onPress={()=>{
                router.navigate("(tabs)/(products)/newproduct")
            }}>
                <AntDesign name="pluscircleo" size={64} color="#12A454" />
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        paddingTop: 47,
        paddingHorizontal: 28,
        gap: 42,
        position: "relative"
        // justifyContent: 'centser'
    },
    trasactions: {
        flex: 1,
        width: '100%',
        // backgroundColor: '#f00'
    },
    trasactionsTitle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    newProduct: {
        position: "absolute",
        bottom: 18,
        right: 27,
        backgroundColor: "#fff",
    }
})