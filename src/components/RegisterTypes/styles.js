import styled from 'styled-components/native';

export const RegisterContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 5%;
  padding-right: 5%;
  width: 100%;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.checked ? '#FFF' : '#e7e7e7'};
  align-items:center;
  border-width: 1.5px;
  height: 45px;
  border-radius: 4px;
  width: 47%;
  border-color: ${props => props.checked ? '#3b3dbf' : 'transparent'};
  margin-bottom: 14px;
`;

export const RegisterLabel = styled.Text`
  margin-left: 8px;
  font-size: 17px;
`;