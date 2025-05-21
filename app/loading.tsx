"use client"

import { useEffect, useRef } from "react"

export default function Loading() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resizeCanvas = () => {
      if (!containerRef.current) return

      // Get the smallest dimension for a perfect square
      const size = Math.min(containerRef.current.offsetWidth, containerRef.current.offsetHeight)

      // Set canvas dimensions to be square
      canvas.width = size
      canvas.height = size
    }

    const createRadialGradient = () => {
      // Create a radial gradient for the fade effect
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = canvas.width / 2

      return ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.618, // Inner circle
        centerX,
        centerY,
        radius, // Outer circle
      )
    }

    const drawHalftoneWave = () => {
      // Clear the canvas with a transparent black to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const gridSize = 20
      const rows = Math.ceil(canvas.height / gridSize)
      const cols = Math.ceil(canvas.width / gridSize)

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const centerX = x * gridSize
          const centerY = y * gridSize
          const distanceFromCenter = Math.sqrt(
            (centerX - canvas.width / 2) ** 2 + (centerY - canvas.height / 2) ** 2,
          )
          const maxDistance = Math.sqrt((canvas.width / 2) ** 2 + (canvas.height / 2) ** 2)
          const normalizedDistance = distanceFromCenter / maxDistance

          const waveOffset = Math.sin(normalizedDistance * 10 - time) * 0.5 + 0.5
          const size = gridSize * waveOffset * 0.8

          // Apply fade effect based on distance from center
          const fadeIntensity = Math.max(0, 1 - normalizedDistance * 1.2)

          ctx.beginPath()
          ctx.arc(centerX, centerY, size / 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${waveOffset * 0.5 * fadeIntensity})`
          ctx.fill()
        }
      }

      // Apply a radial gradient overlay to create faded edges
      const gradient = createRadialGradient()
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)") // Transparent in center
      gradient.addColorStop(0.7, "rgba(0, 0, 0, 0)") // Start fade at 70%
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.8)") // Dark at edges

      ctx.globalCompositeOperation = "source-over"
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const animate = () => {
      drawHalftoneWave()
      time += 0.05
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 flex justify-center items-center">
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full bg-background rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}
