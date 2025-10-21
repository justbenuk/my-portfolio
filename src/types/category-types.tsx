export type CategoryProps = {
  id: string
  name: string
  slug: string
  type: string
  description: string | null
  createdAt: Date,
  updatedAt: Date
}

export type CategoryListProps = {
  categories: CategoryProps[]
}
