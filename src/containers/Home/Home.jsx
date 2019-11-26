import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'lqn-components';

import { useQuery } from '@apollo/react-hooks';
import { me } from './homeQuery';

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

const Home = () => {
  const history = useHistory();
  const { loading, data } = useQuery(me);
  if (loading) return null;

  const user = data ? data.user : null;

  return (
    <React.Fragment>
      <SubTitle>
        Necesitamos <Pink>los siguientes documentos</Pink> para hacer el <br />
        estudio de tu crédito
      </SubTitle>
      <List>
        <ListItem>
          <ListText>Cédula de ciudadanía</ListText>
        </ListItem>
        <ListItem>
          <ListText>Certificado laboral</ListText>
        </ListItem>
        <ListItem>
          <ListText>Certificado de ingresos y retenciones</ListText>
        </ListItem>
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
          label="Agendar cita para recogerlos"
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
          label="Entregar en oficina"
          icon={Deliver}
        />
      </Cards>
    </React.Fragment>
  );
};

export default Home;
