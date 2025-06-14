import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("saylo-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("saylo-theme", theme);
    set({ theme });
  },
}));
