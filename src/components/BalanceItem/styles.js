import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #${props => props.bg};
  margin-right: 14px;
  margin-left: 14px;
  border-radius:4px;
  justify-content: center;
  align-items: flex-start;
  padding-left: 14px;
  width: 300px;
`;

export const Label = styled.Text`
  color: #FFF;
  font-size: 19px;
  font-weight: bold;
`;

export const Balance = styled.Text`
color: #FFF;
  margin-top: 5px;
  font-size: 30px;
`;