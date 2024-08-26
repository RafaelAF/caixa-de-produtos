import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { PaymentMethodsType } from "../../types/payment";
import { useState } from "react";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { DialogBox } from "../DialogBox";

type Props = {
    type: 'sell' | 'product' | 'viewProduct';
    paymentMethod?: PaymentMethodsType;
    data?: {
        id: string,
        name: string,
        price: number
    }
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
            if(!props.data) return <></>
            return (
                <View style={styles.container}>
                    <ProductItem id={props.data?.id} name={props.data.name} price={props.data.price} />
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

type ProductsProps = {
    id: string,
    name: string,
    price: number
}

const ProductItem = (props: ProductsProps) => {
    const [showEditOptions, setShowEditOptions] = useState(false)

    const { id, name, price } = props

    return (
        <View style={styles.productContainer}>
            {/* <Image source={require("assets/")} /> */}
            <View>
                <Text style={styles.titleItem}>{name}</Text>
                <Text style={styles.priceItem}>R$ {String((price / 100).toFixed(2)).replace(".", ",")}</Text>
            </View>
            <View style={styles.editOptionsContent}>
                <Pressable onPress={()=> setShowEditOptions(true)}>
                    <SimpleLineIcons name="options-vertical" size={24} color="#868C9F" />
                </Pressable>
                {showEditOptions && <DialogBox setShowEditOptions={setShowEditOptions} editOption={{id, name, price}} />}
            </View>
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
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    editOptionsContent: {
        position: "relative"
    }
})