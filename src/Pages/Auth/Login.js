import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Formik } from 'formik'
import React from 'react'
import { TextFieldWrapper } from '../../Components/Common/TextFieldWrapper'
import LoginImage from '../../Assets/login_img.png'
import CustomButton from '../../Components/Common/CustomButton'
import { apiPostRequest } from '../../Helpers'
import { endpoints } from '../../Config/endpoints'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const Login = () => {

    const [loading, setLoading] = useState(false)
    const [companies, setCompanies] = useState([])
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();

    const { login } = useAuthContext()

    const onFinish = async (input) => {
        setLoading(true)
        let message = null;
        // axios({
        //     method: 'post',
        //     url: `${URL.domain}/rest/api/getAccessToken`,
        //     data: input,
        // }).then(response => {
        //     login(response?.data?.token)
        //     navigate('/overview')
        // }).catch(error => {
        //     message.error(error?.message)
        // }).then(() => {
        //     setLoading(false)
        // })

        try {
            const res = await apiPostRequest(
                endpoints.getAccessToken,
                input
            );
            const { data, status } = res;
            switch (status) {
                case 201:
                        login(data?.token)
                        navigate('/overview')
                    break;
                default:
                    message = data?.message || "Something Went Wrong";
                    enqueueSnackbar(message, {
                        variant: "error",
                    });
                    break;
            }
        } catch (error) {
            message = error;
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        axios.get(`${URL.domain}/rest/api/getLoginCompanies`, {
        }).then(response => {
            setCompanies(response?.data?.companies)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <Box>
            <Formik
                initialValues={{
                    username: ""
                }}
                onSubmit={onFinish}
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
            </Formik>
        </Box>
    )
}

export default Login
