import acercasa from '../assets/acercasa.png';
import cajaSocial from '../assets/banco-caja-social.png';
import popular from '../assets/banco-popular.png';
import bbva from '../assets/bbva.png';
import avvillas from '../assets/avvillas.png';
import colpatria from '../assets/colpatria.png';
import credifamilia from '../assets/credifamilia.png';
import itau from '../assets/itau.png';

export const resolveNodes = list => {
  if (list) {
    const { edges } = list;
    if (edges) {
      const nodes = [];
      edges.map(edge => nodes.push(edge.node));
      return nodes;
    }
    return list;
  }
  return [];
};

export const fileExtension = filename => filename.split('.').pop();

export const generateFileName = () =>
  Math.random()
    .toString(6)
    .substring(2, 6) +
  Math.random()
    .toString(36)
    .substring(2, 4);

export const validateGQLResponse = (
  gql,
  errorFn,
  okFn,
  hideNotification = false
) => {
  if (gql && gql.error) {
    const { errors } = gql;
    if (!hideNotification) {
      notify({
        type: 'error',
        message: errorDict[errors].title,
        description: errorDict[errors].message
      });
    }
    return errorFn(errors);
  }
  return okFn();
};

export const getBankImage = bankCode => {
  const banks = {
    BBVA_BANK: bbva,
    AVVILLAS_BANK: avvillas,
    ITAU_BANK: itau,
    CAJA_SOCIAL_BANK: cajaSocial,
    POPULAR_BANK: popular,
    ACERCASA_BANK: acercasa,
    COLPATRIA_BANK: colpatria,
    CREDIFAMILIA_BANK: credifamilia
  };
  return banks[bankCode];
};
