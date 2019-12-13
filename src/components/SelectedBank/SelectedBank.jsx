import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import selectedBankQuery from './selectedBankQuery';

import { resolveNodes, getBankImage } from '../../services/Helper';

import { Container, SubTitle, Title } from './selectedBankStyles';

const SelectedBank = () => {
  const params = new URLSearchParams(global.location.search);

  const { loading, data } = useQuery(selectedBankQuery, {
    variables: { code: params.get('code') }
  });

  if (loading) return null;

  const lead = resolveNodes(data.myLead)[0];
  const simulators = resolveNodes(lead.simulatorSet);
  const selectedBank = simulators.filter(simulator => simulator.selected)[0];

  return (
    <Container>
      <img src={getBankImage(selectedBank.bank.code)} alt="Bank" />
      <div>
        <SubTitle>Tasa de interés</SubTitle>
        <Title>{selectedBank.nmvRate.toFixed(2)}%</Title>
      </div>
    </Container>
  );
};

export default SelectedBank;
