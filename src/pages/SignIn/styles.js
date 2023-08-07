import styled from 'styled-components/native';

export const Background = styled.View`
  flex:1;
  background-color: #F0F4FF;
`;

export const Container = styled.KeyboardAvoidingView`
  flex:1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color: #FFF;
  padding: 10px;
  width: 90%;
  font-size: 17px;
  color: #121212;
  margin-bottom: 15px;
  border-radius: 8px;
`;

export const SubmitButton = styled.TouchableOpacity`
  border-radius: 8px;
  height: 45px;
  justify-content: center;
  margin-top: 10px;
  background-color: #3b3dbf;
  width: 90%;
  align-items: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #FFF;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled.Text`
  color: #171717;
`;