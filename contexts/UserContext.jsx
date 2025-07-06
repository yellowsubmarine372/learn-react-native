import { createContext, useState } from 'react'
import { account } from '../lib/appwrite'
import { ID } from 'appwrite'

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    /*evoke function to login*/
    async function login(email, password) {
        try {
            await account.createEmailPasswordSession(email, password)
            const response = await account.get()
            setUser(response)
        } catch (error) {
            console.error(error.message)
        }
    }

    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password)
            await login(email, password)
        } catch (error) {
            console.error(error.message)
        }
    }

    /*don't need email, password, just logout*/
    async function logout() {

    }

    return (
        <UserContext.Provider value={{ user, login, register, logout}}>
            {children}
        </UserContext.Provider>
    )
}