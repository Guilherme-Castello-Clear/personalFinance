import React, { useContext } from "react";
import { View, ActivityIndicator} from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { AuthContext } from "../contexts/auth";

export default function Routes(){
    const signed = useContext(AuthContext);
    const loading = false;
    console.log(signed.user)
    return(
        signed.user ? <AppRoutes/> : <AuthRoutes/>

    )
}