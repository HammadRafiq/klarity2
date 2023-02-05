import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { TextFieldWrapper } from '../../Components/Common/TextFieldWrapper'
import CustomButton from '../../Components/Common/CustomButton'
import { ReactComponent as EmailIcon } from '../../Assets/email.svg'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import axios from 'axios'
import AuthLayout from '../../Layout/AuthLayout'
import { BaseURL } from '../../Config'

const PasswordReset = () => {

    const [loading, setLoading] = useState(false)
    const [showMsg, setShowMsg] = useState(false)
    const navigate = useNavigate()

    const { enqueueSnackbar } = useSnackbar()

    /* Once the submit button is clicked, call the login API and navigate the user to the Overview page ifs
     * the provided credentials are valid
     */
    const onFinish = (input) => {
        setLoading(true)
        axios({
            method: 'post',
            url: `${BaseURL}/rest/api/forgotPassword`,
            data: input,
        })
            .then(response => {
                // form.resetFields()
                setShowMsg(prev => !prev)
            })
            .catch(error => {
                enqueueSnackbar(error?.message || "Something went wrong", {
                    variant: "error"
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <AuthLayout>
            {!showMsg ?
                <Formik
                    initialValues={{ // Refer to documentation > 1.2
                        username: "",
                        password: "",
                        // companyID: ""
                    }}
                    onSubmit={onFinish} // Refer to documentation > 1.1
                >
                    {() => (
                        <Form>
                            <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
                                <Typography variant='h1'>
                                    Password Reset
                                </Typography>
                                <Box sx={{ marginTop: "10px" }}>
                                    <Typography variant='body3'>
                                        We will send you a link to reset your password
                                    </Typography>
                                </Box>
                            </Box>
                            <Grid container>
                                <Grid xs={12}>
                                    <TextFieldWrapper
                                        label="Email"
                                        name="email"
                                        placeholder="Enter your email address"
                                    />
                                </Grid>
                            </Grid>
                            <Box sx={{ marginTop: "25px", textAlign: "center" }} >
                                <CustomButton
                                    title='Reset your password'
                                    type="submit"
                                    loading={loading}
                                />
                            </Box>
                        </Form>
                    )}
                </Formik> :
                <Box sx={{ textAlign: "center" }}>
                    <EmailIcon style={{marginBottom: "20px"}} />
                    <Typography variant='h1'>
                        Sent!
                    </Typography>
                    <Box sx={{ marginTop: "10px" }}>
                        <Typography variant='body3'>
                            Please check your email address and follow the instructions.
                        </Typography>
                    </Box>
                </Box>
            }
        </AuthLayout>
    )
}

export default PasswordReset
