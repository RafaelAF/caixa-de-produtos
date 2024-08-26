import { router } from "expo-router";
import { Text, View, SafeAreaView, StyleSheet, ScrollView, Pressable, TextInput } from "react-native";

export default function NewProduct() {
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputs}>
                <TextInput
                    style={styles.inputText}
                    keyboardType="default"
                    placeholder="Nome do Produto"
                />
                <View style={styles.inputValueContainer}>
                    <View></View>
                    <TextInput
                        style={styles.inputText}
                        keyboardType="default"
                        placeholder="Valor"
                    />
                </View>
                <Pressable style={styles.button}>
                    <Text style={styles.editText}>Cadastrar</Text>
                </Pressable>
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
        justifyContent: 'center'
    },
    inputs: {
        width: '100%',
       gap: 35
    },
    inputText: {
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#868C9F',
        paddingVertical: 17,
        paddingHorizontal: 18,
        borderRadius: 10,
        color: '#868C9F',
        fontSize: 14,
        fontWeight: "medium"
    },
    inputValueContainer: {
        marginTop: 6,
    },
    button: {
        width: '100%',
        backgroundColor: '#47C654',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 4,
    },
    editText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold"
    }
})