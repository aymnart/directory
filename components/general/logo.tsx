"use client"
import { cn } from "@/lib/utils"
import { type VariantProps, cva } from "class-variance-authority"
import Link from "next/link"
import type { ComponentProps } from "react"
import { useState } from "react"
import "@/css/glitch.css"
import { tiny5 } from "@/font.config"

/**
 * Logo link wrapper variants using CVA
 */
const logoLinkVariants = cva(
  [
    // Base styles
    "block size-fit transition-colors duration-200",
    "hover:opacity-90",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "focus-visible:outline-blue-500 focus-visible:rounded-sm",
    "wrapper",
  ],
  {
    variants: {
      size: {
        sm: "text-lg",
        md: "text-2xl",
        lg: "text-3xl",
        xl: "text-4xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

/**
 * Logo text variants using CVA
 */
const logoTextVariants = cva(
  [
    "select-none", // Base styles for the text
  ],
  {
    variants: {
      glitchActive: {
        true: "glitch",
        false: "",
      },
    },
    defaultVariants: {
      glitchActive: true,
    },
  },
)

/**
 * Props for the Logo component.
 * - Inherits Next.js Link props except href (which is fixed to "/")
 * - Includes CVA variant props
 */
type LogoProps = Omit<ComponentProps<typeof Link>, "href"> &
  VariantProps<typeof logoLinkVariants> & {
    /** Additional class names for the link wrapper */
    className?: string
    /** Type of logo to display */
    type?: "word" | "letter"
    /** Enable glitch effect on hover only (default: false - always active) */
    enableOnHover?: boolean
    /** Custom aria-label for accessibility (default: "Navigate to home") */
    ariaLabel?: string
  }

/**
 * A component that renders the ROAD3 logo as a link to the homepage.
 * Features a glitch effect that can be always active or triggered on hover.
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <Logo />
 *
 * // With hover-only glitch effect
 * <Logo enableOnHover />
 *
 * // Letter variant with custom size
 * <Logo type="letter" size="lg" />
 *
 * // With custom styling
 * <Logo className="my-4" enableOnHover size="xl" />
 * ```
 *
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS classes to apply to the logo wrapper
 * @param {"word" | "letter"} [props.type="word"] - The type of logo to display
 * @param {boolean} [props.enableOnHover=false] - Whether to enable glitch effect only on hover
 * @param {string} [props.ariaLabel="Navigate to home"] - Custom aria-label for accessibility
 * @param {"sm" | "md" | "lg" | "xl"} [props.size="md"] - Size variant for the logo
 * @param {ComponentProps<typeof Link>} props.props - Additional props spread to the Link component
 * @returns {JSX.Element} A Link component containing the ROAD3 logo with optional glitch effect
 */
function Logo({
  className,
  type = "word",
  enableOnHover = false,
  ariaLabel = "Navigate to home",
  size = "md",
  ...props
}: LogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  const logoText = type === "word" ? "ROAD3" : "3"

  // Determine if glitch should be active
  const shouldShowGlitch = enableOnHover ? isHovered : true

  const handleMouseEnter = () => {
    if (enableOnHover) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (enableOnHover) {
      setIsHovered(false)
    }
  }

  return (
    <Link
      href="/"
      aria-label={ariaLabel}
      className={cn(logoLinkVariants({ size }), className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <h1
        className={cn(logoTextVariants({ glitchActive: shouldShowGlitch }), tiny5.className)}
        aria-level={1}
      >
        {logoText}
      </h1>
    </Link>
  )
}

export default Logo
