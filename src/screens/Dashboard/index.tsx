import React from 'react';

import {
  Container,
  Header,
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
        </UserWrapper>
      </Header>
    </Container>
  );
}

export { Dashobard };
