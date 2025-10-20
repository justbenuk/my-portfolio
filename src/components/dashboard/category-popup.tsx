import { Dialog } from "../ui/dialog"
import EditCategoryForm from "./edit-category-form"
import NewCategoryForm from "./new-category-form"

export default async function CategoryPopup({ type, id }: { type: string, id?: string }) {

  if (type === 'edit') {
    return (
      <Dialog>
        <EditCategoryForm />
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

