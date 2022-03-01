import { gql } from 'graphql-request'

import { GRAPHQL_FRAGMENTS } from './fragments'

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}
  query GET_PREFEITURA {
    prefeitura {
      data {
        id
        attributes {
          NomePrefeitura
          DescricaoPrefeitura
          Logo {
            data {
              attributes {
                ...image
              }
            }
          }
        }
      }
    }
  }

  query GET_POSTS {
    noticias {
      data {
        id
        attributes {
          ...noticia
        }
      }
    }
  }
`
