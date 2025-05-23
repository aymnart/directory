import { readFileSync } from "node:fs"
import { join } from "node:path"
import { EmptyList } from "@/components/general/empty-list"
import { H } from "@/components/general/heading"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowLeftIcon, Clock, Heart, MoreHorizontal, Play } from "lucide-react"
import Link from "next/link"
import type { ListItem } from "../page"

async function getStaticProps() {
  const filePath = join(process.cwd(), "public", "podcasts.json")
  const json = readFileSync(filePath, "utf8")
  const items: ListItem[] = JSON.parse(json)

  return { props: { items } }
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const podcast: ListItem | undefined = (await getStaticProps()).props.items.find(
    item => item.href === slug,
  )
  if (!podcast) {
    return (
      <main className="w-full h-screen flex justify-center items-center">
        <EmptyList>Podcast not found!</EmptyList>
      </main>
    )
  }
  return (
    <main className={cn("w-full mx-auto bg-background")}>
      <div
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=400&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative h-60 p-6"
      >
        <Button
          className="absolute top-0 left-0 z-10 m-2 text-foreground"
          size="default"
          variant="link"
          prefix={<ArrowLeftIcon />}
          hover={false}
          asChild
        >
          <Link href="/podcasts">Podcasts</Link>
        </Button>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="relative flex items-end h-full">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
                alt="Featured Album"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <H as="h3" className="mb-1 font-semibold">
                {podcast.title}
              </H>
              <p className="text-sm text-muted-foreground">{podcast.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button type="button" size="icon_lg" className="rounded-full transition-colors">
              <Play className="w-4 h-4 text-foreground fill-current" />
            </Button>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm dark:text-muted-foreground">
                {podcast.episodes.length} tracks
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="divide-y divide-border  diagonal-pattern space-y-2 screen-line-before">
        {podcast.episodes.map(episode => {
          return (
            <div
              key={episode.id}
              className="bg-background group flex cursor-pointer items-center gap-4 px-6 py-3 hover:bg-card transition-colors not-first:border-t"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
                  alt="Album cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <H as="h6" className="text-sm font-medium text-foreground truncate">
                  {episode.title}
                </H>
                <p className="text-xs text-muted-foreground">
                  {new Date(episode.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="w-4 h-4 text-muted-foreground hover:text-destructive transition-colors" />
                </button>
                <span className="text-sm tabular-nums text-muted-foreground">
                  {episode.duration}
                </span>
                <button
                  type="button"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Page
