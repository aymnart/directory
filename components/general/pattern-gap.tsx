import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef } from "react"

type PatternDividerProps = ComponentPropsWithoutRef<"div"> & {
  fullwidth?: boolean
}

/**
 * A component that renders a decorative pattern gap/divider with optional full width.
 *
 * @component
 * @param {Object} props - The component props
 * @param {boolean} [props.fullwidth=false] - Whether the gap should span the full viewport width
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.HTMLAttributes<HTMLDivElement>} props.rest - Additional HTML attributes
 *
 * @returns {JSX.Element} A div element with pattern styling and screen line decorations
 */
function PatternGap({ fullwidth = false, className, ...props }: PatternDividerProps) {
  return (
    <div
      className={cn(
        fullwidth ? "w-screen" : "w-full",
        "h-14 diagonal-pattern screen-line-after screen-line-before",
        className,
      )}
      aria-hidden="true"
      {...props}
    />
  )
}

export default PatternGap
