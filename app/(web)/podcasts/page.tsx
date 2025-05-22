import { readFileSync } from "node:fs"
import { join } from "node:path"
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
    variant: "pink" | "indigo" | "orange"
  }
  starred?: boolean
  episodes: Episode[]
  href: string
}

const badgeVariants = {
  pink: "bg-pink-500/10 text-pink-600 dark:bg-pink-400/10 dark:text-pink-300",
  indigo: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-300",
  orange: "bg-orange-500/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-300",
}

export default async function Page() {
  const filePath = join(process.cwd(), "public", "podcasts.json")
  const json = readFileSync(filePath, "utf8")
  const items: ListItem[] = JSON.parse(json)
  return (
    <div
      className={cn(
        "w-full max-w-2xl mx-auto p-4",
        "bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl",
        "rounded-3xl border border-white/20 dark:border-zinc-800/50",
        "shadow-sm",
      )}
    >
      <div className="space-y-3">
        {items.map(item => (
          <Link
            href={`/podcasts/${item.href}`}
            key={item.id}
            className={cn(
              "group relative flex items-start gap-4 p-4",
              "bg-white/50 dark:bg-zinc-800/50",
              "hover:bg-white/80 dark:hover:bg-zinc-700/50",
              "backdrop-blur-lg",
              "transition-all duration-300 ease-out",
              "rounded-2xl",
              "border border-white/20 dark:border-zinc-700/50",
              "shadow-xs hover:shadow-sm",
            )}
          >
            <div className="flex-1 min-w-0 pt-0.5">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-base font-semibold ">{item.title}</h3>
                {item.badge && (
                  <span
                    className={cn(
                      "px-2.5 py-0.5 rounded-full text-xs font-medium",
                      "transition-colors duration-300",
                      "shadow-xs",
                      badgeVariants[item.badge.variant as keyof typeof badgeVariants],
                    )}
                  >
                    {item.badge.text}
                  </span>
                )}
              </div>
              {item.description && (
                <p className="text-[15px]  leading-relaxed line-clamp-2">{item.description}</p>
              )}
              <span className="text-xs font-medium mt-2 block">{item.time}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
