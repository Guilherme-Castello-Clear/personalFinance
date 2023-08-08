import React, {createContext, useState} from 'react'
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
export const AuthContext = createContext({});

function AuthProvider({children}){
    const navigate = useNavigation()
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)

    async function signUp(nome, email, password){
        setLoadingAuth(true)
        try{
            const response = await api.post('/users', {
                name: nome,
                password: password,
                email: email
            })
            setLoadingAuth(false)
            navigate.goBack()
        }
        catch(err){
            console.log(err)
            setLoadingAuth(false)
        }
    }

    return(
        <AuthContext.Provider value={{user, signUp, loadingAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider