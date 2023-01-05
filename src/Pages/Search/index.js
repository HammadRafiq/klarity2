import { Autocomplete, Box, InputAdornment, TextField, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { TextFieldWrapper } from '../../Components/Common/TextFieldWrapper'
import Layout from '../../Layout'
import { ReactComponent as SearchIcon } from '../../Assets/input-prefix-search.svg'
import { apiGetRequest, apiPostRequest } from '../../Helpers'
import { endpoints } from '../../Config/endpoints'
import { useParams } from 'react-router-dom'

// const top100Films = [
//     { label: 'The Shawshank Redemption', year: 1994 },
//     { label: 'The Godfather', year: 1972 },
//     { label: 'The Godfather: Part II', year: 1974 },
//     { label: 'The Dark Knight', year: 2008 },
//     { label: '12 Angry Men', year: 1957 },
//     { label: "Schindler's List", year: 1993 },
//     { label: 'Pulp Fiction', year: 1994 }
// ]


const Search = () => {
    const [options, setOptions] = useState([])

    const { libraryId } = useParams() // Get libraryId from the URL

    const getDocumentsArray = (search) => { // This function deals with calling the "documentView/loadSearchResults" API to populate the search results in the dropdown of search field
        let data = {
            readStatus: -1,
            ratings: [],
            library: libraryId,
            page: 1,
            maxResults: 20,
            detectedFilter: [],
            searchTerms: search
        }
        apiPostRequest(endpoints.loadSearchResults, data).then(res => { // Calling the "documentView/loadSearchResults" API here
            if (res?.data?.data) {
                setOptions(res?.data?.data?.map(item => item.filename))
            }
        })
    }

    useEffect(() => {
        getDocumentsArray("") // Call the "documentView/loadSearchResults" API when user visits the Search screen initially by providing empty string in the search field to get the default results from the backend to display in the dropdown
    }, [])

    return (
        <Layout>
            <Box>
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
                        <Autocomplete
                            className="primary-autocomplete"
                            id="combo-box-demo"
                            options={options}
                            renderInput={(params) => {
                                params.InputProps.disableUnderline = true
                                params.InputProps.startAdornment = (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                                return (
                                    <TextField
                                        sx={{
                                            border: "1px solid #CED4DA",
                                            padding: "5px 10px",
                                            borderRadius: "4px",
                                        }}
                                        variant="standard"
                                        // onChange={handleSearch}
                                        {...params}
                                    />
                                )
                            }
                            }
                        />
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}

export default Search
