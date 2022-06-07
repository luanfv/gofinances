import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { AnyStyledComponent } from 'styled-components';

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px ${RFValue(42)}px;
  margin-right: 24px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

const Icon = styled(Feather as unknown as AnyStyledComponent)`
  font-size: ${RFValue(40)}px;
`;

const Footer = styled.View``;

const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-top: 38px;
`;

const LastTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
};
