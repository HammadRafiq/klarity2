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
import AuthLayout from '../../Layout/AuthLayout'
import { BaseURL } from '../../Config'


const Login = () => {

    const [loading, setLoading] = useState(false)
    const [companies, setCompanies] = useState([])
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();

    const { login } = useAuthContext() // Context API used to access login function

    /* Once the submit button is clicked, call the login API and navigate the user to the Overview page ifs
     * the provided credentials are valid
     */
    const onFinish = async (input) => {
        setLoading(true)
        axios({
            method: 'post',
            url: `${BaseURL}/rest/api/getAccessToken`,
            data: input,
        })
            .then(response => {
                if (response?.data?.status !== "ERROR") { // If credentials are valid, navigate the user to overview screen
                    login(response?.data?.token)
                    navigate('/overview')
                }
                else { // If the credentials are invalid, show error message
                    enqueueSnackbar("Something went wrong",
                        {
                            variant: "error"
                        })
                }
            }).finally(res => {
                setLoading(false) // Once we get the response successfully from the API called, set loading status of buttont to false. The loading status of button should only be true once the API is hit from frontend but we didnt get any response (success or error) from the server.
            })

    }

    return (
        <AuthLayout>
            <Formik
                initialValues={{ // Refer to documentation > 1.2
                    username: "",
                    password: ""
                }}
                onSubmit={onFinish} // Refer to documentation > 1.1
            >
                {() => (
                    <Form>
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
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    )
}

export default Login
