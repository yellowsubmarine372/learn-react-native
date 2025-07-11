import { StyleSheet } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import { useBooks } from "../../../hooks/useBooks"

import ThemedText from "../../../components/ThemedText"
import Spacer from "../../../components/Spacer"
import ThemedCard from "../../../components/ThemedCard"
import ThemedView from "../../../components/ThemedView"
import ThemedLoader from "../../../components/ThemedLoader"

const BookDetails = () => {
    const [book, setBook] = useState(null)

    const { id } = useLocalSearchParams()
    const { fetchBookbyId } = useBooks()

    useEffect(() => {
        async function loadBook() {
            const bookData = await fetchBookbyId(id)
            setBook(bookData)
        }

        loadBook()
    }, [id])

    if (!book) {
        return (
            <ThemedView safe={true} style={styles.container}>
                <ThemedLoader />
            </ThemedView>
        )
    }

    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedCard style={styles.card}>
                <ThemedText title={true} style={styles.title}>{book?.title}</ThemedText>
                <ThemedText>Writen by {book?.author}</ThemedText>
                <Spacer />

                <ThemedText title={true}>Book description</ThemedText>
                <Spacer height={10} />

                <ThemedText>{book?.description}</ThemedText>
            </ThemedCard>
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