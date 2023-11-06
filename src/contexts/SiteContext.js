import { createContext } from "react";
import { useState } from "react";
export const SiteContext = createContext();

export const SiteContextProvider = ({ children }) => {
  const [lang, setLang] = useState("tr");
  const [theme, setTheme] = useState("light");

  const localizedTexts = {
    tr: { searchPage: { search_text: "Arama" } },
    en: { searchPage: { search_text: "Search" } },
  };

  const texts = localizedTexts[lang];

  return (
    <SiteContext.Provider value={{ lang, setLang, theme, setTheme, texts }}>
      {children}
    </SiteContext.Provider>
  );
};
