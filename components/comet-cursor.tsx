"use client"

import { useEffect, useState, useRef } from "react"

interface Point {
  x: number
  y: number
  age: number
}

export function CometCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const trailRef = useRef<Point[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
      
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0
      })
      
      if (trailRef.current.length > 50) {
        trailRef.current.shift()
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      trailRef.current = trailRef.current.filter(point => {
        point.age += 1
        return point.age < 30
      })

      if (trailRef.current.length > 1) {
        for (let i = 1; i < trailRef.current.length; i++) {
          const point = trailRef.current[i]
          const prevPoint = trailRef.current[i - 1]
          const progress = i / trailRef.current.length
          const opacity = progress * (1 - point.age / 30)
          const width = progress * 8

          const gradient = ctx.createLinearGradient(
            prevPoint.x, prevPoint.y,
            point.x, point.y
          )
          
          const cyan = `rgba(0, 210, 211, ${opacity})`
          const green = `rgba(102, 255, 178, ${opacity * 0.8})`
          const yellow = `rgba(178, 255, 102, ${opacity * 0.5})`
          
          gradient.addColorStop(0, cyan)
          gradient.addColorStop(0.5, green)
          gradient.addColorStop(1, yellow)

          ctx.beginPath()
          ctx.moveTo(prevPoint.x, prevPoint.y)
          ctx.lineTo(point.x, point.y)
          ctx.strokeStyle = gradient
          ctx.lineWidth = width
          ctx.lineCap = "round"
          ctx.stroke()

          if (progress > 0.3) {
            ctx.beginPath()
            ctx.arc(point.x, point.y, width * 0.5, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(0, 210, 211, ${opacity * 0.3})`
            ctx.fill()
          }
        }

        const lastPoint = trailRef.current[trailRef.current.length - 1]
        if (lastPoint) {
          ctx.beginPath()
          ctx.arc(lastPoint.x, lastPoint.y, 6, 0, Math.PI * 2)
          const headGradient = ctx.createRadialGradient(
            lastPoint.x, lastPoint.y, 0,
            lastPoint.x, lastPoint.y, 12
          )
          headGradient.addColorStop(0, "rgba(255, 255, 255, 1)")
          headGradient.addColorStop(0.3, "rgba(0, 210, 211, 0.8)")
          headGradient.addColorStop(1, "rgba(0, 210, 211, 0)")
          ctx.fillStyle = headGradient
          ctx.fill()

          ctx.beginPath()
          ctx.arc(lastPoint.x, lastPoint.y, 20, 0, Math.PI * 2)
          const glowGradient = ctx.createRadialGradient(
            lastPoint.x, lastPoint.y, 0,
            lastPoint.x, lastPoint.y, 20
          )
          glowGradient.addColorStop(0, "rgba(0, 210, 211, 0.4)")
          glowGradient.addColorStop(1, "rgba(0, 210, 211, 0)")
          ctx.fillStyle = glowGradient
          ctx.fill()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        a, button, [role="button"], input, textarea, select {
          cursor: none !important;
        }
      `}</style>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9999]"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s ease"
        }}
      />
      {isVisible && (
        <div
          className="fixed pointer-events-none z-[10000] w-2 h-2 rounded-full bg-white"
          style={{
            left: position.x - 4,
            top: position.y - 4,
            boxShadow: "0 0 10px 4px rgba(0, 210, 211, 0.8), 0 0 20px 8px rgba(0, 210, 211, 0.4)"
          }}
        />
      )}
    </>
  )
}
