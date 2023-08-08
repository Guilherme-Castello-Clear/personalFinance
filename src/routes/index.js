import React, { useContext } from "react";
import { View, ActivityIndicator} from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { AuthContext } from "../contexts/auth";

export default function Routes(){
    const { user, loading } = useContext(AuthContext);
    console.log(user)
    if(loading){
        return(
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center', backgroundColor: '#F0F4FF'}}>
                <ActivityIndicator size="large" color="#131313"/>
            </View>
        )
    }

    return(
        user ? <AppRoutes/> : <AuthRoutes/>

    )
}