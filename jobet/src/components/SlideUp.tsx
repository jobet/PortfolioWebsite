"use client" // this is a client component

import React, { useEffect, useRef, ReactNode, useState } from "react"

interface Props {
  offset?: string
  children?: ReactNode
  // any props that come into the component
}

export default function SlideUpDown({ children, offset = "0px" }: Props) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            setIsScrollingUp(entry.boundingClientRect.top >= 0)
          } else {
            setIsVisible(false)
          }
        })
      },
      { rootMargin: offset }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, offset])

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-1000 ${
        isVisible
          ? isScrollingUp
            ? "opacity-100 animate-slideUpCubiBezier"
            : "opacity-100 animate-slideDownCubiBezier"
          : "opacity-0"
      }`}
    >
      {children}
    </div>
  )
}