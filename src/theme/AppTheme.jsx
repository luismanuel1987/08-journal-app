import React from 'react'
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { purpleTheme } from './purpleTheme';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}
