"use client";
import { ThemeProvider } from "next-themes";
export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="light"
      value={{
        light: "light", 
        dark: "dark",
      }}
    >
      {children}
    </ThemeProvider>
  );
}
