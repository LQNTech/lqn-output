import { gql } from 'apollo-boost';

export default gql`
  query documents($code: String) {
    allDocumentsLeadCredit(lead_Code: $code) {
      edges {
        node {
          id
          description
          agreed
          rejected
          onRevision
          file {
            id
            file
          }
          documentBank {
            id
            name
            code
            description
            customerType
            urlS3Document
          }
        }
      }
    }
  }
`;
