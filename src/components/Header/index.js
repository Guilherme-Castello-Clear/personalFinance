import React from 'react';
import { ButtonMenu, Container, Title } from './styles';

import Iconn from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Header({title = 'Titulo'}){

    const navigation = useNavigation();

    return(
        <Container>
            <ButtonMenu onPress={() => navigation.openDrawer()}>
                <Iconn name="menu" size={35} color="#121212"/>
            </ButtonMenu>
            <Title>{title}</Title>
        </Container>
    )
}