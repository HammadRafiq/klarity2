import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import React from 'react'
import { TextFieldWrapper } from '../../Components/Common/TextFieldWrapper'
import Layout from '../../Layout'
import { ReactComponent as SearchIcon } from '../../Assets/input-prefix-search.svg'

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 }
]

const index = () => {

    return (
        <Layout>
            <Box>
                <Formik
                    initialValues={{
                        username: ""
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
                        <Box sx={{ backgroundColor: "background.default", padding: "80px 120px", boxShadow: "0px 0px 35px rgba(154, 161, 171, 0.15)", borderRadius: "4px" }}>
                            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
                                <Typography variant='h1'>
                                    What are you&nbsp;
                                </Typography>
                                <Typography variant='h1' sx={{ color: "secondary.main" }}>
                                    looking for
                                </Typography>
                            </Box>
                            <TextFieldWrapper
                                startIcon={<SearchIcon />}
                                name="search"
                                placeholder="Search"
                            />
                        </Box>
                    </Box>
                </Formik>
            </Box>
        </Layout>
    )
}

export default index
