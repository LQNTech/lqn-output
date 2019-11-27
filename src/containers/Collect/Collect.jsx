import React from 'react';

import { Container, Title, Address } from './collectStyles';
import { Pink } from '../../globalStyles';

import Deliver from '../../assets/deliver.svg';

const Collect = () => {
  return (
    <Container>
      <Title>
        Trae tus documentos a <Pink>nuestra oficina</Pink> <br /> y recibe{' '}
        <Pink>asesoría</Pink>
        sobre tu solicitud
      </Title>
      <Address>
        <img src={Deliver} />
        <div>
          <span>Dirección</span>
          <p>Cra 14 # 79 78 · Oficina 401</p>
          <p>Barrio El Lago</p>
        </div>
      </Address>
    </Container>
  );
};

export default Collect;
