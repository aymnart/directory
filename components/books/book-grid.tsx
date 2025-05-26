import BookItem from "@/components/books/book"
import { H } from "../general/heading"

const books = [
  "https://i.imgur.com/SPv9Rg7.png",
  "https://i.imgur.com/UIPQEwk.png",
  "https://i.imgur.com/nwzWCgm.png",
  "https://i.imgur.com/YdfU4Bw.png",
  "https://i.imgur.com/sVNy4Ct.png",
  "https://i.imgur.com/SPv9Rg7.png",
  "https://i.imgur.com/UIPQEwk.png",
  "https://i.imgur.com/nwzWCgm.png",
  "https://i.imgur.com/YdfU4Bw.png",
  "https://i.imgur.com/sVNy4Ct.png",
  "https://i.imgur.com/SPv9Rg7.png",
  "https://i.imgur.com/UIPQEwk.png",
  "https://i.imgur.com/nwzWCgm.png",
  "https://i.imgur.com/YdfU4Bw.png",
  "https://i.imgur.com/sVNy4Ct.png",
  "https://i.imgur.com/SPv9Rg7.png",
  "https://i.imgur.com/UIPQEwk.png",
  "https://i.imgur.com/nwzWCgm.png",
]

export default function BookGrid() {
  return (
    <section className="mt-18 flex p-6 flex-col w-full">
      <H as="h3" className="flex gap-1 justify-center items-center p-6 font-semibold">
        Books
      </H>

      <div className="w-full mx-auto columns-2 sm:columns-[130px] gap-4 *:mb-4">
        {books.map((src, i) => (
          <BookItem key={i} src={src} />
        ))}
      </div>
    </section>
  )
}
