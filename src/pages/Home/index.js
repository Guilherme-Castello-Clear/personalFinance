import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import api from "../../services/api";
import { Background, ListBalance } from "./styles";
import Header from "../../components/Header";
import { format } from "date-fns";
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
function Home(){

    const isFocus = useIsFocused();
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
                console.log(balance.data)
                setListBalance(balance.data)
            }
        }
        getMovements()

        return () => isActive = false;
    }, [isFocus])

    return(
        <Background>
            <Header title="Minhas Movimentações"/>
            <ListBalance
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={ item => item.tag }
                renderItem={ ({item}) => (<BalanceItem data={item}/>)}
            />
        </Background>
    )
}

export default Home