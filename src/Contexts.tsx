import { createContext } from "react";

export const SettingsContext = createContext<{
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}>(null!);
