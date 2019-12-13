import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import selectedBankQuery from './selectedBankQuery';

const SelectedBank = () => {
  const params = new URLSearchParams(global.location.search);

  const { loading, data } = useQuery(selectedBankQuery, {
    variables: { code: params.get('code') }
  });

  if (loading) return null;

  console.log(data);

  return <div></div>;
};

export default SelectedBank;
