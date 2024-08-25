import { useState } from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { PaymentMethodsType } from "../../types/payment"

export const PaymentMethod = () => {
    const [active, setActive] = useState({
        cash: false,
        creditCard: false,
        pix: false
    })

    const changeMethod = (method: PaymentMethodsType) => {
        switch (method) {
            case "cash":
                // console.log("cash", active)
                setActive(() => {
                    return {
                        creditCard: false,
                        pix: false,
                        cash: true
                    }
                })
                break
            case "creditCard":
                // console.log("credit card", active)
                setActive(() => {
                    return {
                        creditCard: true,
                        pix: false,
                        cash: false
                    }
                })
                break
            case "pix":
                // console.log("PIX", active)
                setActive(() => {
                    return {
                        creditCard: false,
                        pix: true,
                        cash: false
                    }
                })
                break
            default:
                break
        }
    }


    return(
        <View style={styles.container}>
            <Pressable style={active.cash ? styles.buttonLeftActive : styles.buttonLeftDefault } onPress={()=>{
                changeMethod("cash")
            }}>
                <Image source={require('../../assets/Cash.png')} />
            </Pressable>
            <Pressable style={active.creditCard ? styles.buttonActive : styles.buttonDefault } onPress={()=>{
                changeMethod("creditCard")
            }}>
                <Image source={require('../../assets/Credit-Card.png')} />
            </Pressable>
            <Pressable style={active.pix ? styles.buttonRightActive : styles.buttonRightDefault } onPress={()=>{
                changeMethod("pix")
            }}>
                <Image source={require('../../assets/Pix.png')} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginHorizontal: 9,
    },
    buttonDefault: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: '#868C9F',
        borderWidth: 1,
        paddingVertical: 16
    },
    buttonActive: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: '#FE4D18',
        borderWidth: 1,
        paddingVertical: 16
    },
    buttonLeftDefault: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: '#868C9F',
        borderWidth: 1,
        paddingVertical: 16,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    buttonLeftActive: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: '#FE4D18',
        borderWidth: 1,
        paddingVertical: 16,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    buttonRightDefault: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: '#868C9F',
        borderWidth: 1,
        paddingVertical: 16,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    buttonRightActive: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: '#FE4D18',
        borderWidth: 1,
        paddingVertical: 16,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    }
})