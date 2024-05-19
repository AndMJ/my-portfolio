import {createContext, useContext, useState} from "react";

const ThemeContext = createContext(null)

export const ThemeProvider = ({children}) => {
    const [ThemeMode, setThemeMode] = useState("light")

    const contextData = {
        ThemeMode,
        setThemeMode
    }

    return(
        <ThemeContext.Provider value={contextData}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => {
    return useContext(ThemeContext)
}
export default ThemeContext;