import React from "react"

interface IThemeContext {
    color: string
    text: string
}

const ThemeContext = React.createContext<IThemeContext>({
    color: 'red',
    text: '我是来自默认的Text'
})

export default ThemeContext
