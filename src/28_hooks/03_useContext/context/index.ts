import { createContext } from "react";

const UserContext = createContext({ name: 'zs', age: 23})

const ThemeContext = createContext({ color: 'red', fontSize: 16 })

export { UserContext, ThemeContext }
