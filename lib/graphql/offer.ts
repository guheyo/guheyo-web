import { gql } from '@apollo/client';

export const FIND_OFFERS = gql`
  query findOffers(
    $productCategoryId: ID!
    $cursor: ID
    $skip: Int!
    $take: Int!
  ) {
    findOffers(
      productCategoryId: $productCategoryId
      cursor: $cursor
      skip: $skip
      take: $take
    ) {
      edges {
        node {
          id
          createdAt
          updatedAt
          name
          description
          price
          priceCurrency
          businessFunction
          status
          images {
            id
            createdAt
            name
            url
            contentType
            description
            height
            width
            position
            type
            refId
            userId
            source
          }
          guildId
          productCategoryId
          seller {
            id
            createdAt
            username
            avatarURL
            members {
              id
              createdAt
              userId
              guildId
              roles {
                id
                name
                position
                hexColor
                guildId
              }
            }
          }
          brandId
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
