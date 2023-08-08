import React, {createContext, useState} from 'react'
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
export const AuthContext = createContext({});

function AuthProvider({children}){
    const navigate = useNavigation()
    const [user, setUser] = useState({
        nome: 'Castello Teste'
    })

    async function signUp(nome, email, password){
        try{
            const response = await api.post('/users', {
                name: nome,
                password: password,
                email: email
            })
            navigate.goBack()
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <AuthContext.Provider value={{user, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider