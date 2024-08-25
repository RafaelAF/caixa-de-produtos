import { StyleSheet, Text, View } from "react-native"

export const MainCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cardsection1}>
                <Text>Vendas</Text>
            </View>
            <View style={styles.cardsection2}>
                <Text style={styles.sellingsLength}>10 Vendas</Text>
                <Text style={styles.value}>R$ 53,00</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: -10,
            height: 10,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        borderRadius: 10,
        paddingHorizontal: 22,
        paddingVertical: 9,
    },
    sellingsLength: {
        fontSize: 32,
        color: "#363F5F"
    },
    value: {
        fontSize: 14,
        color: "#47C654",
        
    },
    cardsection1: {
        marginBottom: 40
    },
    cardsection2: {
        marginBottom: 32
    },
})