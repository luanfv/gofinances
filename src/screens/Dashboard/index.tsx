import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import {
  Container,
  Header,
  HighlightCards,
  Icon,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserPhoto,
  UserWrapper,
} from './styles';

function Dashobard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserPhoto
              source={{
                uri: 'https://static.wikia.nocookie.net/naruto/images/3/33/Naruto_Uzumaki_%28Parte_I_-_HD%29.png/revision/latest?cb=20160316113315&path-prefix=pt-br'
              }}
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>

              <UserName>Naruto</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />

        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />

        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>
    </Container>
  );
}

export { Dashobard };
