import { gql } from 'apollo-boost';

export default gql`
  query appQuery($code: String) {
    me {
      edges {
        node {
          id
          fullName
        }
      }
    }
    allDocumentsLeadCredit(lead_Code: $code) {
      edges {
        node {
          id
          documentBank {
            id
            name
          }
        }
      }
    }
  }
`;
