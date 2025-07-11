import { createContext, useState } from "react"
import { ID, Permission } from "react-native-appwrite"
import { databases } from "../lib/appwrite"
import { useUser } from "../hooks/useUser"
import { Role } from "appwrite"

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID

export const BooksContext = createContext()

export function BooksProvider( {children} ) {
    const [books, setBooks] = useState([])
    const { user } = useUser()

    async function fetchBooks() {
        try {


        } catch (error) {
            console.error(error)
        }
    }

    async function fetchBookbyId(id) {
        try {

        } catch (error) {
            console.error(error)
        }
    }

    async function createBook(data) {
        try {
            const newBook = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data, userId: user.$id},
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.write(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                ]
            )
        } catch (error) {
            console.error(error)
        }
    }

    async function deleteBook(id) {
        try {

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <BooksContext.Provider 
        value={{
            books,
            fetchBooks,
            fetchBookbyId,
            createBook,
            deleteBook
        }}
        >
            {children}
        </BooksContext.Provider>
    )
}