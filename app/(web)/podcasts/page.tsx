import { readFileSync } from "node:fs"
import { join } from "node:path"
import { H } from "@/components/general/heading"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
export type Episode = {
  id: string
  title: string
  duration: string
  date: Date
}
export interface ListItem {
  id: string
  title: string
  description?: string
  icon: LucideIcon
  iconStyle: string
  time: string
  badge?: {
    text: string
    variant: "pink" | "indigo" | "orange" | "blue"
  }
  starred?: boolean
  episodes: Episode[]
  href: string
}

const badgeVariants = {
  pink: "bg-pink-500/10 text-pink-600 dark:bg-pink-400/10 dark:text-pink-300",
  indigo: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-300",
  orange: "bg-orange-500/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-300",
  blue: "bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300",
}

export default async function Page() {
  const filePath = join(process.cwd(), "public", "podcasts.json")
  const json = readFileSync(filePath, "utf8")
  const items: ListItem[] = JSON.parse(json)
  return (
    <div className={cn("w-full my-12", "backdrop-blur-xl", "shadow-sm")}>
      <H as="h3" className="m-6 font-semibold">
        Podcasts
      </H>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-2 p-2",
          "diagonal-pattern screen-line-before screen-line-after",
        )}
      >
        {items.map(item => (
          <Link
            href={`/podcasts/${item.href}`}
            key={item.id}
            className={cn(
              "group relative flex items-start gap-4 p-4",
              "bg-background",
              "hover:bg-card",
              "backdrop-blur-lg",
              "transition-all duration-300 ease-out",
              "shadow-xs hover:shadow-sm",
              "border",
            )}
          >
            <div className="flex-1 min-w-0 pt-0.5">
              <div className="flex items-center gap-2 mb-1">
                <H as="h6" className="font-semibold ">
                  {item.title}
                </H>
                {item.badge && (
                  <Badge
                    className={cn(
                      "px-2.5 py-0.5 rounded-full text-xs font-medium",
                      "transition-colors duration-300",
                      "shadow-xs border-0",
                      badgeVariants[item.badge.variant as keyof typeof badgeVariants],
                    )}
                  >
                    {item.badge.text}
                  </Badge>
                )}
              </div>
              {item.description && (
                <p className="text-sm leading-relaxed line-clamp-2 text-muted-foreground">
                  {item.description}
                </p>
              )}
              <span className="text-xs font-medium mt-2 block ">{item.time}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
