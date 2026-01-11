import { ArrowUpRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { FaServer } from "react-icons/fa6"
import Link from "next/link"

export default function ServersPage() {

  const servers = false

  if (!servers) {
    return (
      <Empty className="border-2">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FaServer />
          </EmptyMedia>
          <EmptyTitle>No Servers Yet</EmptyTitle>
          <EmptyDescription>
            You have no active servers at the moment. This could be because you do not have an active project
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

