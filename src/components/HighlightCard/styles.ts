import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { AnyStyledComponent } from 'styled-components';

interface IPropsHighlightCardStyle {
  type: 'up' | 'down' | 'total';
};

const Container = styled.View<IPropsHighlightCardStyle>`
  background-color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px ${RFValue(42)}px;
  margin-right: 24px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text<IPropsHighlightCardStyle>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

const Icon = styled(Feather as unknown as AnyStyledComponent)<IPropsHighlightCardStyle>`
  font-size: ${RFValue(40)}px;

  ${(props: IPropsHighlightCardStyle) => props.type === 'up' && css`
    color: ${({ theme }) => theme.colors.success};
  `}

  ${(props: IPropsHighlightCardStyle) => props.type === 'down' && css`
    color: ${({ theme }) => theme.colors.attention};
  `}

  ${(props: IPropsHighlightCardStyle) => props.type === 'total' && css`
    color: ${({ theme }) => theme.colors.shape};
  `}
`;

const Footer = styled.View``;

const Amount = styled.Text<IPropsHighlightCardStyle>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
  margin-top: 38px;
`;

const LastTransaction = styled.Text<IPropsHighlightCardStyle>`
  font-family: ${({ theme, type }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text};
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
