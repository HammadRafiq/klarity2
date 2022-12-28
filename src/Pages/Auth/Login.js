import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Formik } from 'formik'
import React from 'react'
import { TextFieldWrapper } from '../../Components/Common/TextFieldWrapper'
import LoginImage from '../../Assets/login_img.png'
import CustomButton from '../../Components/Common/CustomButton'

const Login = () => {
    return (
        <Box>
            <Formik
                initialValues={{
                    username: ""
                }}
            >
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
                            padding: "100px"
                        }}>
                            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "35px" }}>
                                <Typography variant='h1'>
                                    Sign in to&nbsp;
                                </Typography>
                                <Typography variant='h1' sx={{ color: "secondary.main" }}>
                                    Klarity
                                </Typography>
                            </Box>
                            <Grid container>
                                <Grid xs={12}>
                                    <TextFieldWrapper
                                        label="User name"
                                        name="username"
                                        placeholder="Enter your username"
                                    />
                                </Grid>
                                <Grid xs={12}>
                                    <Box sx={{ marginTop: "25px" }}>
                                        <TextFieldWrapper
                                            label="Password"
                                            name="password"
                                            placeholder="Enter your password"
                                            type="password"
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "25px" }} >
                                <Typography variant='body3' sx={{ color: "secondary.main" }}>
                                    <u>Forgot password?</u>
                                </Typography>
                                <CustomButton
                                    title='Login'
                                    type="submit"
                                />
                            </Box>
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
            </Formik>
        </Box>
    )
}

export default Login
