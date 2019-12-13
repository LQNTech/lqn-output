import { gql } from 'apollo-boost';

export default gql`
  query myLead($code: String!) {
    myLead(code: $code) {
      edges {
        node {
          id
          code
          simulatorSet {
            edges {
              node {
                id
                cxcSaving
                bank {
                  id
                  name
                  code
                }
                monthlyFee
                annualRate
                nmvRate
                selected
              }
            }
          }
        }
      }
    }
  }
`;
