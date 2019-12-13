import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'lqn-components';

import {
  SubTitle,
  Pink,
  List,
  ListItem,
  ListText,
  Spacer,
  Title,
  Cards
} from './homeStyles';

import Docs from '../../assets/docs.svg';
import Collect from '../../assets/collect.svg';
import Deliver from '../../assets/deliver.svg';

const Home = ({ user, documents }) => {
  const history = useHistory();

  return (
    <React.Fragment>
      <SubTitle>
        Necesitamos <Pink>los siguientes documentos</Pink> para hacer el <br />
        estudio de tu crédito
      </SubTitle>
      <List>
        {documents.map(({ id, documentBank }) => (
          <ListItem key={id}>
            <ListText>{documentBank.name}</ListText>
          </ListItem>
        ))}
      </List>
      <Spacer />
      <Title>
        ¿Cómo quieres continuar con <Pink>tus documentos?</Pink>
      </Title>
      <Cards>
        <Card
          width={33.3}
          spacing={10}
          label="Subir documentos ahora"
          icon={Docs}
          onClick={() =>
            history.push({
              pathname: '/documents',
              search: global.location.search
            })
          }
        />
        <Card
          width={33.3}
          spacing={10}
          label="Quiero que los recojan en mi domicilio"
          icon={Collect}
          onClick={() => {
            let Calendly = global.Calendly || [];
            user &&
              Calendly.initPopupWidget({
                url: `https://calendly.com/lqn?name=${user.fullName}&email=${user.email}`
              });
          }}
        />
        <Card
          width={33.3}
          spacing={10}
          label="Yo los llevo a LQN"
          icon={Deliver}
          onClick={() =>
            history.push({
              pathname: '/collect',
              search: global.location.search
            })
          }
        />
      </Cards>
    </React.Fragment>
  );
};

export default Home;
