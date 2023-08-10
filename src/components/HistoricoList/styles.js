import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #F0F3FF;
    margin-bottom: 14px;
    margin-right: 10px;
    border-radius: 4px;
    margin-left: 10px;
    padding: 12px;
`;

export const Tipo = styled.View`
    flex-direction: row;
`;

export const TipoText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-style: italic;
`;

export const IconView = styled.View`
    padding-top: 4px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 4px;
    margin-bottom: 2px;
    padding-bottom: 4px;
    flex-direction: row;
    background-color: ${props => props.tipo === 'despesa' ? '#c62c36' : '#049301'};
`;

export const ValorText = styled.Text`
    color: #121212;
    font-size: 22px;
`;