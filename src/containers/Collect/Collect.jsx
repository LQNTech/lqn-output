import React from 'react';

import { Container, Title, Address } from './collectStyles';
import { Pink } from '../../globalStyles';

import Deliver from '../../assets/deliver.svg';

const Collect = () => {
  return (
    <Container>
      <Title>
        Trae tus documentos a <Pink>LQN</Pink> <br /> y recibe{' '}
        <Pink>asesoría</Pink>
        sobre tu solicitud
      </Title>
      <Address>
        <img src={Deliver} />
        <div>
          <span>Dirección</span>
          <p>Calle 71 B # 99 C – 32 Piso 3</p>
          <p>Barrio Álamos</p>
        </div>
      </Address>
    </Container>
  );
};

export default Collect;
