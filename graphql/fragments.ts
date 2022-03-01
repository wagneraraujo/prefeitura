import { gql } from 'graphql-request'

export const GRAPHQL_FRAGMENTS = gql`
  fragment image on UploadFile {
    alternativeText
    url
  }
  fragment noticia on Noticia {
    Titulo
    slug
    createdAt
    Capa {
      data {
        attributes {
          ...image
        }
      }
    }
    Resumo
    Conteudo
    categorias {
      data {
        attributes {
          ...categorias
        }
      }
    }
    tags {
      data {
        attributes {
          ...tags
        }
      }
    }
    autor {
      data {
        attributes {
          ...autor
        }
      }
    }
  }

  fragment tags on Tag {
    slug
    Nome
  }
  fragment categorias on Categoria {
    Nome
    slug
  }
  fragment autor on Autor {
    Nome
    slug
  }
`
