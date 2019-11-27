import { gql } from 'apollo-boost';

export default gql`
  mutation uploadDocumentLead($id: ID!, $fileId: ID!) {
    updateDocumentLeadCredit(
      documentLeadCreditData: { id: $id, fileId: $fileId }
    ) {
      errors
      error
      documentLeadCredit {
        id
      }
    }
  }
`;
