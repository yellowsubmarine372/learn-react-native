import { StyleSheet, Text } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { useBooks } from "../../../hooks/useBooks"

import ThemedText from "../../../components/ThemedText"
import Spacer from "../../../components/Spacer"
import ThemedCard from "../../../components/ThemedCard"
import ThemedView from "../../../components/ThemedView"
import ThemedLoader from "../../../components/ThemedLoader"
import ThemedButton from "../../../components/ThemedButton"

import { Colors } from "../../../constants/Colors"

const BookDetails = () => {
    const [book, setBook] = useState(null)

    const { id } = useLocalSearchParams()
    const { fetchBookbyId, deleteBook } = useBooks()
    const router = useRouter()

    useEffect(() => {
        setBook(null)

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

    const handleDelete = async () => {
        await deleteBook(id)
        setBook(null)
        router.replace('/books')
    }

    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedCard style={styles.card}>
                <ThemedText title={true} style={styles.title}>{book?.title}</ThemedText>
                <ThemedText>Writen by {book?.author}</ThemedText>
                <Spacer />

                <ThemedText title={true}>Book description</ThemedText>
                <Spacer height={10} />

                <ThemedText>{book.description}</ThemedText>
            </ThemedCard>

            <ThemedButton style={styles.delete} onPress={handleDelete}>
                <Text style={{color: '#fff', textAlign: 'center'}}>
                    Delete Book
                </Text>
            </ThemedButton>
        </ThemedView>
    )
}
export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
    },
    card: {
        margin: 20,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    delete: {
        marginTop: 40,
        backgroundColor: Colors.warning,
        width: 200,
        alignSelf: "center",
    }
})