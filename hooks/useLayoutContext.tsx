import { useContext } from "react";
import { LayoutContext } from "@/context/LayoutContext";

// Wrapper to eliminate need to call/import useContext everytime you want to use this data.
export default function useLayoutContext() {
  const {layout, setLayout, toggleTheme, toggleNotificationsPanel } = useContext(LayoutContext)

  return {
    layout,
    setLayout,
    toggleTheme,
    toggleNotificationsPanel
  }
}