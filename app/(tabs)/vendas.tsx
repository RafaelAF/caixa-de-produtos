import { Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { MainCard } from "../../components/MainCard";
import { BoxCategory } from "../../components/BoxCategory";
import { ListItem } from "../../components/ListItem";
import { PaymentMethod } from "../../components/PaymentMethod";

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <PaymentMethod />
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