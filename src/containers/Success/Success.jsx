import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import successQuery from './successQuery';

import { resolveNodes } from '../../services/Helper';

import {
  Container,
  Text,
  Pink,
  Card,
  Description,
  Name,
  Call
} from './successStyles';

import imgSuccess from '../../assets/success.svg';

const Success = ({ leadCode }) => {
  const { loading, data } = useQuery(successQuery, {
    variables: { code: leadCode }
  });
  if (loading) return null;

  const { lastAssignedExpert } = resolveNodes(data.myLead)[0];

  return (
    <Container>
      <img src={imgSuccess} />
      <Text>
        Gracias por completar tu proceso, <br /> Estamos validando tus
        documentos para iniciar el <Pink>estudio de crédito</Pink>,<br /> pronto
        te contactaremos.
      </Text>
      <Card>
        <Description>te hemos asignado un experto</Description>
        <Name>{lastAssignedExpert.fullName}</Name>
        <Call
          href={`https://api.whatsapp.com/send?phone=57${lastAssignedExpert.phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Escríbele ahora ›
        </Call>
      </Card>
    </Container>
  );
};

export default Success;
