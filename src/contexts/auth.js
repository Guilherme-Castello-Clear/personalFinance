import React, {createContext, useState, useEffect} from 'react'
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});


function AuthProvider({children}){
    const navigate = useNavigation()
    const [user, setUser] = useState()
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function loadingStorage(){
            const storageUser = await AsyncStorage.getItem('@finToken');
            console.log(storageUser)
            if(storageUser){
                const response = await api.get('/me', {
                    headers: {
                        'Authorization': `Bearer ${storageUser}`
                    }
                }).catch(err => setUser(null))

                api.defaults.headers['Authorization'] = `Bearer ${storageUser}`
                setUser(response.data)
                setLoading(false)
            }
            setLoading(false)

        }

        loadingStorage()
    }, [])

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

    async function signIn(email, password){
        setLoadingAuth(true)
        try{
            const response = await api.post('/login', {
                email: email,
                password: password
            })

            const {id, name, token} = response.data;

            await AsyncStorage.setItem('@finToken', token)
            api.defaults.headers['Authorization'] = `Bearer ${token}`
            setUser({id, name, token})
            setLoading
        }
        catch(err){
            console.log(err)
            setLoadingAuth(false)
        }
    }

    async function signOut(){
        await AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }

    return(
        <AuthContext.Provider value={{user, signUp, signIn, signOut, loadingAuth, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider