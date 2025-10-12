'use client'
import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";

export default function CustomToastContainer() {
  const { theme } = useTheme()
  return <ToastContainer theme={theme} />
}

