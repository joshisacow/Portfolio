"use client"

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
      {resolvedTheme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  )

}