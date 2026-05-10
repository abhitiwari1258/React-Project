import { createContext,useContext,useState } from "react";

// createContext
export const ThemeContext = createContext()

// useContext
export const useThemeContext = ()=>{
    return useContext(ThemeContext)
}

// provide context
export const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState('light')

    const toggleTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
