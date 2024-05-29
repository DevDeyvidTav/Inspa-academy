"use client"

import { createContext, useState } from "react";


interface LangContextProps {
        lang: string;
        setLang: (lang: string) => void;
    }

export const LangContext = createContext({} as LangContextProps);

export const LangProvider = ({ children }: any) => {
    const [lang, setLang] = useState("pt");  
    return (
      <LangContext.Provider  value={{ lang, setLang }}>
        {children}
      </LangContext.Provider>
    );
  };
  


  