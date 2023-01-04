import { createTheme } from '@mui/material';
import React from 'react'

export const theme = createTheme({
    palette: {
        common: {
            white: "#fff",
            black: "#000"
        },
        primary: {
            main: '#122841',
        },
        secondary: {
            main: '#D955C3',
        },
        text: {
            primary: "#122841",
            secondary: "#7B8794",
            white: "#fff",
            disabled: "#D955C3",
            primaryChannel: "#D955C3",
            secondaryChannel: "#D955C3"
        },
        background: {
            paper: "#F5F5F5",
            default: "#FFF",
            dark: "#34495E"
        },
        grey: {
            100: "#DEE2E6",
            200: "#F9F9F9"
        }
    },
    typography: {
        fontFamily: "Fira Sans",
        h1: {
            fontSize: "28px",
            fontWeight: 700,
        },
        h2: {
            fontSize: "20px",
            fontWeight: 700,            
        },
        h3: {
            fontSize: "12px",
            fontWeight: 700,            
        },
        subtitle1: {
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: 1.3
        },
        subtitle2: {
            fontSize: "14px",
            fontWeight: 600
        },
        body1: {
            fontSize: "12px",
            fontWeight: 500,
            color: "#122841"
        },
        body2: {
            fontSize: "12px",
            fontWeight: 400,
            color: "#122841"
        },
        body3: {
            fontFamily: "Fira Sans",
            fontSize: "14px",
            fontWeight: 400,
            color: "#7B8794"
        } // custom body for test
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: "0px 0px 35px rgba(154, 161, 171, 0.15)"
                }
            }
        }
    }
});

// color1: #122841
// color2: #D955C3
