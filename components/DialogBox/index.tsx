import { Pressable, StyleSheet, Text, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";


type Props = {
    setShowEditOptions: (value: boolean) => void
    editOption: {
        id: string,
        name: string,
        price: number
    }
}

export const DialogBox = (props: Props) => {

    const editPage = () => {
        router.navigate("(tabs)/(products)/editproduct")
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={editPage}>
                <AntDesign name="edit" size={24} color="#000" />
            </Pressable>
            <Pressable >
                <AntDesign name="delete" size={24} color="#f00" />
            </Pressable>
            <Pressable onPress={()=>{
                props.setShowEditOptions(false)
            }}>
                <AntDesign name="close" size={24} color="black" />
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: -10,
        right: -10,
        padding: 10,
        width: 157,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})