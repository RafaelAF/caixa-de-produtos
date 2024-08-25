import { Image, StyleSheet, Text, View } from "react-native"
import { PaymentMethodsType } from "../../types/payment";
import { useState } from "react";


type Props = {
    type: 'sell' | 'product' | 'viewProduct';
    paymentMethod?: PaymentMethodsType;
}

type SellProps = {
    paymentMethod: PaymentMethodsType;
}

export const ListItem = (props: Props) => {
    

    switch (props.type) {
        case "sell":
            if(props.paymentMethod === undefined) return <></>
            return (
                <View style={styles.container}>
                    <SellItem paymentMethod={props.paymentMethod} />
                </View>
            )
        case "product":
            return (
                <View style={styles.container}>
                    <ProductItem />
                </View>
            )
        case "viewProduct":
            return (
                <View style={styles.container}>
                    <ViewProductItem />
                </View>
            )
        default:
            return <></>
    }
}


const SellItem = (props: SellProps) => {
    return (
        <View style={styles.content}>
            {props.paymentMethod === "cash" && <Image source={require(`../../assets/Cash.png`)} />}
            {props.paymentMethod === "creditCard" && <Image source={require(`../../assets/Credit-Card.png`)} />}
            {props.paymentMethod === "pix" && <Image source={require(`../../assets/Pix.png`)} />}
            <View>
                <Text style={styles.titleItem}>5x Pasteis, 1x suco...</Text>
                <Text style={styles.priceItem}>R$ 53,00</Text>
            </View>
        </View>
    )
}

const ProductItem = () => {
    return (
        <View>
            {/* <Image source={require("assets/")} /> */}
            <Text>Titulo Product</Text>
            <Text>Descrição</Text>
        </View>
    )
}

const ViewProductItem = () => {
    return (
        <View>
            {/* <Image source={require("assets/")} /> */}
            <Text>Titulo Views</Text>
            <Text>Descrição</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: 13,
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 19
    },
    titleItem: {
        fontSize: 18,
        fontWeight: 'medium',
        color: '#000'
    },
    priceItem: {
        fontSize: 14,
        fontWeight: 'light',
        color: '#47C654'
    }
})