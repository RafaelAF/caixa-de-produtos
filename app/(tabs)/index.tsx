import { Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { MainCard } from "../../components/MainCard";
import { BoxCategory } from "../../components/BoxCategory";
import { ListItem } from "../../components/ListItem";

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <MainCard />
            <View style={styles.cards}>
                <BoxCategory title="Produtos" link="" /> 
                <BoxCategory title="Vendas" link="" /> 
                <BoxCategory title="Relatósrios" link="" /> 
            </View>
            <View style={styles.trasactions}>
                <Text style={styles.trasactionsTitle}>Transações recentes</Text>
                <ScrollView>
                    <ListItem type="sell" paymentMethod="pix" />
                    <ListItem type="sell" paymentMethod="cash" />
                    <ListItem type="sell" paymentMethod="creditCard" />
                    <ListItem type="sell" paymentMethod="pix" />
                    <ListItem type="sell" paymentMethod="cash" />
                    <ListItem type="sell" paymentMethod="creditCard" />
                    <ListItem type="sell" paymentMethod="pix" />
                    <ListItem type="sell" paymentMethod="cash" />
                    <ListItem type="sell" paymentMethod="creditCard" />
                </ScrollView>
            </View>
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
        // justifyContent: 'centser'
    },
    cards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginHorizontal: 9,
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
    }
})