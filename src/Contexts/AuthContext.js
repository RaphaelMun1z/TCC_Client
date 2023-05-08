import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

function AuthProvider ({children}) {
    const [auth, setAuth] = useState(false)
    const [username, setUsername] = useState()

    return (
        <AuthContext.Provider value={{auth, setAuth, username, setUsername}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider