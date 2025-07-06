import { createContext, useState } from 'react'

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    /*evoke function to login*/
    async function login(email, password) {

    }

    async function register(email, password) {

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