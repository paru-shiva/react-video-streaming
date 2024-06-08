import React from 'react'

const ThemeContext = React.createContext({isDark: true, updateTheme: () => {}})

export default ThemeContext
