import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import selectedBankQuery from './selectedBankQuery';

import { resolveNodes, getBankImage } from '../../services/Helper';

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
    <div>
      <img src={getBankImage(selectedBank.bank.code)} alt="Bank" />
    </div>
  );
};

export default SelectedBank;
