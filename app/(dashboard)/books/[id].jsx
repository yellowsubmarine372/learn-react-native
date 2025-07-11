import { StyleSheet } from "react-native"
import { useLocalSearchParams } from "expo-router"

import ThemedText from "../../../components/ThemedText"
import ThemedInput from "../../../components/ThemedInput"
import ThemedButton from "../../../components/ThemedButton"
import Spacer from "../../../components/Spacer"
import ThemedCard from "../../../components/ThemedCard"
import ThemedView from "../../../components/ThemedView"

const BookDetails = () => {
    const { id } = useLocalSearchParams()

    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedText>Book Details - {id}</ThemedText>
        </ThemedView>
    )
}
export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
    }
})