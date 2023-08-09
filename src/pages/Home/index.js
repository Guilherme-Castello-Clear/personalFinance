import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../contexts/auth";
import api from "../../services/api";
import { Background } from "./styles";
import Header from "../../components/Header";
import { format } from "date-fns";
function Home(){

    const [listBalance, setListBalance] = useState([])
    const [dateMovements, setDateMovements] = useState(new Date())
    const { signOut, user } = useContext(AuthContext)

    useEffect(() => {
        let isActive = true;
        async function getMovements(){
            let dateFormated = format(dateMovements, 'dd/mm/yyyy')
            const balance = await api.get('/balance', {
                params:{
                    date: dateFormated
                }
            })
            if(isActive){
                setListBalance(balance.data)
            }
        }
        getMovements()

        return () => isActive = false;
    }, [])

    return(
        <Background>
            <Header title="Minhas Movimentações"/>
        </Background>
    )
}

export default Home