import { gql } from 'apollo-boost';

export default gql`
  query myLead($code: String!) {
    myLead(code: $code) {
      edges {
        node {
          id
          lastAssignedExpert {
            id
            fullName
            phoneNumber
            imageprofileSet(last: 1) {
              edges {
                node {
                  id
                  file {
                    id
                    file
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
