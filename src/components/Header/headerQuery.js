import { gql } from 'apollo-boost';

export const me = gql`
  query me($id: ID!) {
    user(id: $id) {
      id
      fullName
    }
  }
`;
