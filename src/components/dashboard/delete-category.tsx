import { deleteCateforyById } from "@/actions/category-actions"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { Trash2Icon } from "lucide-react"
import { Button } from "../ui/button"

export default function DeleteCategory({ categoryId }: { categoryId: string }) {

  async function handleDelete(categoryId: string) {
    await deleteCateforyById(categoryId)
  }


  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={'outline'} size={'sm'} className="text-red-500">
          <Trash2Icon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. The category will be perminantly deleted
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500" onClick={() => handleDelete(categoryId)}>delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

