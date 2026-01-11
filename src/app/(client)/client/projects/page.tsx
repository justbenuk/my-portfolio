import { ArrowUpRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { FaDisplay } from "react-icons/fa6"
import Link from "next/link"

export default function ProjectsPage() {

  const projects = false

  if (!projects) {
    return (
      <Empty className="border-2">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FaDisplay />
          </EmptyMedia>
          <EmptyTitle>No Projects Yet</EmptyTitle>
          <EmptyDescription>
            You have no active projects at the moment. If you are a new customer. Your project will be added shortly
          </EmptyDescription>
        </EmptyHeader>
        <Button
          variant="link"
          asChild
          className="text-muted-foreground"
          size="sm"
        >
          <Link href="/contact">
            Need Help <ArrowUpRightIcon />
          </Link>
        </Button>
      </Empty>

    )
  }

  return (
    <div className="space-y-8">
      <div>header</div>
    </div>
  )
}

