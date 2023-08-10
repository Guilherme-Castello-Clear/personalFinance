import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import api from "../../services/api";
import { Background, ListBalance, Title, Area, List } from "./styles";
import Header from "../../components/Header";
import { format } from "date-fns";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import HistoricoList from "../../components/HistoricoList";

function Home(){

    const isFocus = useIsFocused();
    const [listBalance, setListBalance] = useState([])
    const [dateMovements, setDateMovements] = useState(new Date())
    const { signOut, user } = useContext(AuthContext)
    const [movements, setMovements] = useState([])
    
    useEffect(() => {
        let isActive = true;
        
        async function getMovements(){
            let dateFormated = format(dateMovements, 'dd/mm/yyyy')
            
            const receives = await api.get('/receives', {
                date: dateFormated
            })

            const balance = await api.get('/balance', {
                params:{
                    date: dateFormated
                }
            })
            if(isActive){
                console.log(balance.data)
                setListBalance(balance.data)
                setMovements(receives.data)
            }
        }
        getMovements()

        return () => isActive = false;
    }, [isFocus, dateMovements])

    async function handleDelete(id){
        try{
            await api.delete('/receives/delete', {
                params:{
                    item_id: id
                }
            })
            setDateMovements(new Date())
        }catch(e){
            console.error(e)
        }
    }

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
            <Area>
                <TouchableOpacity>
                    <Icon name="event" color="#FFF"/>
                </TouchableOpacity>
                <Title>Utilmas Movimentações</Title>
            </Area>

            <List
                data={movements}
                contentContainerStyle={{paddingBottom: 20}}
                keyExtractor={item => item.id}
                renderItem={({item}) => (<HistoricoList data={item} deleteItem={handleDelete}/>)}
            />

        </Background>
    )
}

export default Home