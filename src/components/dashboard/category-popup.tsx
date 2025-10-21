import { Dialog } from "../ui/dialog"
import EditCategoryForm from "./edit-category-form"
import NewCategoryForm from "./new-category-form"

interface Category {
  id: string
  name: string
  slug: string
  type: string
  description: string
  createdAt: Date
  updatedAt: Date
}

export default function CategoryPopup({ type, category }: { type: string, category: Category }) {

  if (type === 'edit') {
    return (
      <Dialog>
        <EditCategoryForm category={category} />
      </Dialog>
    )
  }

  if (type === 'new') {
    return (
      <Dialog>
        <NewCategoryForm />
      </Dialog>
    )
  }
}

