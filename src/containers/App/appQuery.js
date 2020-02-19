import { gql } from 'apollo-boost';

export default gql`
  query appQuery($code: String) {
    me {
      edges {
        node {
          id
          fullName
          email
          codePhoneNumber
          phoneNumber
          requirementSet(first: 1){
            edges{
              node{
                id
                code
                lastAssignedExpert{
                  id
                  fullName
                  codePhoneNumber
                  phoneNumber
                  relationship
                  email
                  imageprofileSet{
                    edges{
                      node{
                        id
                        file{
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
