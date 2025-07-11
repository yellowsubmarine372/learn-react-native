import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export function useUser() {
    const context = useContext(UserContext) /*can use all the provided by userContext */

    if (!context) {
        throw new Error('useUser must be used within a UserProvider')
    } /* if outside of UserProvider, throw error */

    return context
}