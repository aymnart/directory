"use client"

import Image from "next/image"

interface BookItemProps {
  src: string
}

export default function BookItem({ src }: BookItemProps) {
  return (
    <div className="relative cursor-default p-4 break-inside-avoid grid">
      <div className="relative">
        <div className="absolute w-[90%] h-[96%] top-[1%] left-4 border rounded bg-white shadow-[10px_40px_40px_-10px_rgba(0,0,0,0.2),inset_-2px_0_0_gray,inset_-3px_0_0_#dbdbdb,inset_-4px_0_0_white,inset_-5px_0_0_#dbdbdb,inset_-6px_0_0_white,inset_-7px_0_0_#dbdbdb,inset_-8px_0_0_white,inset_-9px_0_0_#dbdbdb]" />
        <div className="relative rounded shadow-[6px_6px_18px_-2px_rgba(0,0,0,0.2),24px_28px_40px_-6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out transform perspective-[2000px] hover:rotate-y-[-15deg] hover:-translate-x-2.5 hover:scale-x-[0.94] hover:shadow-[6px_6px_12px_-1px_rgba(0,0,0,0.1),20px_14px_16px_-6px_rgba(0,0,0,0.1)] cursor-pointer">
          <Image src={src} alt="book" width={100} height={1000} className="w-full rounded" />
          <div className="absolute top-0 left-4 w-5 h-full border-l border-black/5 bg-gradient-to-r from-white/15 to-transparent transition-all duration-500 ease z-10 group-hover:ml-[14px]" />
          <div className="absolute top-0 right-0 w-[90%] h-full rounded bg-gradient-to-r from-transparent to-white/15 opacity-10 z-0 pointer-events-none transition-all duration-500 ease" />
        </div>
      </div>
    </div>
  )
}
