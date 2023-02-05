import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { TextFieldWrapper } from '../../Components/Common/TextFieldWrapper'
import CustomButton from '../../Components/Common/CustomButton'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import axios from 'axios'
import AuthLayout from '../../Layout/AuthLayout'
import { BaseURL } from '../../Config'
import * as Yup from "yup"

const NewPassword = () => {

    const [loading, setLoading] = useState(false)
    const [showMsg, setShowMsg] = useState(false)

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
            {showMsg ?
                <Formik
                    initialValues={{ // Refer to documentation > 1.2
                        username: "",
                        password: "",
                        // companyID: ""
                    }}
                    onSubmit={onFinish} // Refer to documentation > 1.1
                    validationSchema={Yup.object({
                        password: Yup.string().required('Password is required'),
                        // confirmPassword: Yup.string()
                        //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    })}
                >
                    {() => (
                        <Form>
                            <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
                                <Typography variant='h1'>
                                    Enter a new password
                                </Typography>
                                <Box sx={{ marginTop: "10px" }}>
                                    <Typography variant='body3'>
                                        Log in to your account without risk by creating a new password
                                    </Typography>
                                </Box>
                            </Box>
                            <Grid container >
                                <Grid xs={12}>
                                    <TextFieldWrapper
                                        label="New password"
                                        name="password"
                                        placeholder="Enter new password"
                                        type="password"
                                    />
                                </Grid>
                                <Grid xs={12}>
                                    <Box sx={{ marginTop: "20px" }}>
                                        <TextFieldWrapper
                                            label="Confirm new password"
                                            name="confirmPassword"
                                            placeholder="Confirm new password"
                                            type="password"
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={{ marginTop: "30px", textAlign: "center" }} >
                                <Box>
                                    <CustomButton
                                        title='Change password'
                                        type="submit"
                                        loading={loading}
                                    />
                                </Box>
                                <Box sx={{ marginTop: "15px" }}>
                                    <Typography variant='body3'>
                                        Is something wrong?
                                    </Typography>
                                </Box>
                                <Box sx={{ marginTop: "3px" }}>
                                    <Typography variant='body3' color="secondary.main" sx={{ textDecoration: "underline", cursor: "pointer" }}>
                                        Reset the password again
                                    </Typography>
                                </Box>
                            </Box>
                        </Form>
                    )}
                </Formik> :
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant='h1'>
                        Confirm Email Address
                    </Typography>
                    <Box sx={{ marginTop: "10px" }}>
                        <Typography variant='body3'>
                            This e-mail confirmation link expired or is invalid. Please issue a&nbsp;
                        </Typography>
                        <Typography variant='body3' color="secondary.main" sx={{ cursor: "pointer" }}>
                            new e-mail confirmation request.
                        </Typography>
                    </Box>
                </Box>
            }
        </AuthLayout >
    )
}

export default NewPassword
