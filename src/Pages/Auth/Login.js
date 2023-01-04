import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { TextFieldWrapper } from '../../Components/Common/TextFieldWrapper'
import LoginImage from '../../Assets/login_img.png'
import CustomButton from '../../Components/Common/CustomButton'
import { ReactComponent as KlarityLogo } from '../../Assets/klarity_logo.svg'
import { apiPostRequest } from '../../Helpers'
import { endpoints } from '../../Config/endpoints'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useAuthContext } from '../../Context/AuthContext'
import axios from 'axios'

const Login = () => {

    const [loading, setLoading] = useState(false)
    const [companies, setCompanies] = useState([])
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();

    const { login } = useAuthContext() // Context API used to access login function

    // Once the submit button is clicked, call the login API and navigate the user to the Overview page if the provided credentials are valid
    const onFinish = async (input) => {
        console.log("input: ", input)
        setLoading(true)
        apiPostRequest(
            endpoints.getAccessToken,
            input
        ).then(response => {
            if (response?.data?.status !== "ERROR") {
                login(response?.data?.token)
                navigate('/overview')
            }
            else {
                enqueueSnackbar("Something went wrong",
                    {
                        variant: "error"
                    })
            }
        }).finally(res => {
            setLoading(false)
        })
    }

    // Part of Proflow project, Company input field is not part of the Klarity project's Login screen so it has been commented out
    // useEffect(() => {
    //     axios.get(`${URL.domain}/rest/api/getLoginCompanies`, {
    //     }).then(response => {
    //         setCompanies(response?.data?.companies)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }, [])


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
            <Formik // Formik library is being used to handle the forms. All the validations implemented on the input fields (e.g required input) is done using Formik. 
                initialValues={{
                    username: "",
                    password: "",
                    companyId: ""
                }}
                onSubmit={onFinish} // Function called once user clicks submit button, onSubmit will only run when all the input fields are valid. (For example if username is required and user leaves username field empty, onFinish function wont be called and hence the login API wont be called unless fields are valid)
            >
                {() => (
                    <Form>
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
                                            loading={loading}
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
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default Login
