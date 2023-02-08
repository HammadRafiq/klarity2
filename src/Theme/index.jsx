import { createTheme } from '@mui/material';
import React from 'react'

// Theme: We have used MUI (Material UI) design framework in the app. It provides with an ability to define a
// theme for the app. Theme consists of all the colors and typography being used in the app.
// For example, subtitle1 (font-size, font-weight, line-height) has explicity been mentioned so that
// it can be reused throughout the project. Using theme makes the styling approach highly scalable,
// it will be easy to cater to different themes (light, dark) in the future.


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
            200: "#F9F9F9",
            700: "#7B8794"
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
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: "#D955C3",
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: "capitalize",
                    "&.Mui-selected": {
                        color: "#D955C3",
                    },
                },
            }
        },
    }
});

// color1: #122841
// color2: #D955C3
