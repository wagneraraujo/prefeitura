import { Tag } from './tag'
import { Categoria } from './categoria'
import { Autor } from './autor'

export type NoticiaStrapi = {
  tags: Tag[]
  slug: string
  titulo: string
  resumo: string
  conteudo: string
  createAt: string
  categorias: Categoria[]
  autor: Autor
}
