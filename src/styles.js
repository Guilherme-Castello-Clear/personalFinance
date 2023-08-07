import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: gray;
`;

export const Titulo = styled.Text`
  color: blue;
  font-size:50px;
`;

export const Nome = styled.Text`
    color: #121212;
    font-size: 30px;
`;

export const BotaoSujeito = styled.TouchableOpacity`
    background-color: black;
    padding: 5px;
    border-radius: 5px;
    width: 90px;
    justify-content: center;
    align-items: center;
`;

export const BotaoText = styled.Text`
    color: white;
    font-size: 20px;
`;