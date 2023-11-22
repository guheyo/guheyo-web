import { gql } from '@apollo/client';

export const FIND_GUILDS = gql`
  query FindGuilds($cursor: ID, $skip: Int! = 1, $take: Int!) {
    findGuilds(cursor: $cursor, skip: $skip, take: $take) {
      edges {
        node {
          id
          name
          productCategories {
            id
            name
            position
          }
        }
      }
      pageInfo {
        endCursor
      }
    }
  }
`;
