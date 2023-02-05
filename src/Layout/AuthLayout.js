import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import LoginImage from '../Assets/login_img.png'
import { ReactComponent as KlarityLogo } from '../Assets/klarity_logo.svg'

const AuthLayout = ({ children }) => {

    return (
        <Box sx={{
            position: "relative"
        }}>
            <Box sx={{
                position: "absolute",
                top: "30px",
                left: "70px",
                zIndex: 99,
            }}>
                <KlarityLogo />
            </Box>
            <Grid container>
                <Grid xs={6} sx={{
                    height: "100vh",
                    position: "relative",
                    backgroundColor: "background.default"
                }}>
                    <Box sx={{
                        width: "100%",
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        padding: "100px 150px"
                    }}>
                        {children}
                    </Box>
                </Grid>
                <Grid xs={6}>
                    <Box sx={{ backgroundColor: "#50667F", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Box sx={{ flex: 1, textAlign: "center" }}>
                            <img src={LoginImage} width="70%" />
                            <Typography variant='h2' sx={{ color: "background.default", paddingBottom: "12px" }}>
                                Welcome to Klarity
                            </Typography>
                            <Typography variant='body3' sx={{ color: "background.default" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AuthLayout
