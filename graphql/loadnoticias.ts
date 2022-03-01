import { GRAPHQL_QUERY } from './queries'
import { request } from 'graphql-request'
import config from '../config'
export type LoadNoticiasVariables = {
  categoriaSlug?: string
  noticiaSlug?: string
  autorSlug?: string
  tagSlug?: string
  sort?: string
  start?: number
  limit?: number
}

export const loadNoticias = async () => {
  const data = await request(config.graphqlUrl, GRAPHQL_QUERY)
  return data
}
