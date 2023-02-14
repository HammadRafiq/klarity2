import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FilterHeader from 'Components/Filter/FilterHeader'
import FilterFooter from 'Components/Filter/FilterFooter'
import { ReactComponent as GridIcon } from 'Assets/grid-icon.svg'
import { ReactComponent as TrashIcon } from 'Assets/trash-icon2.svg'
import { ReactComponent as DownloadIcon } from 'Assets/download-icon.svg'
import Layout from 'Layout'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import EntityTable from 'Components/Filter/EntityTable'
import { apiGetRequest } from 'Helpers'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { endpoints } from 'Config/endpoints'


const FilterContent = () => {
    const [data, setData] = useState([])
    const { libraryId } = useParams() // Get libraryId from the URL

    const filteredData = useSelector(state => state.filter.filteredData)

    const getEntityTypes = async () => {
        const { data } = await apiGetRequest(endpoints.getEntityTypes, { library: libraryId }, null)
        setData(data)
    }

    useEffect(() => { // Refer to documentation 2.0
        getEntityTypes() // Call the "dashboard/getLibraryEntityTypes" API to get Entity Types against which tables data is to be populated when user visits the screen
    }, [])


    return (
        <Box sx={{ padding: "30px 40px", backgroundColor: "background.paper" }}>
            <Grid container spacing={2}>
                {filteredData?.map((item, index) => ( // UI is same for all the tables on filter screen so here we are applying a loop on the HTML code below so that we don't have to write the same HTML code 6 times. This is the power of React Javascript.
                    <Grid item xs={filteredData.length === 1 ? 12 : (filteredData.length === 2 || filteredData.length === 3 || filteredData.length === 4) ? 6 : 4} key={index}>
                        <Box sx={{ backgroundColor: "background.default", borderRadius: "4px"}}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderBottom: "1px solid #DEE2E6" }}>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <GridIcon />
                                    <Typography variant="subtitle1" sx={{ paddingLeft: "8px" }}>
                                        {item?.entityType}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <DownloadIcon style={{ marginRight: "10px" }} />
                                    <TrashIcon />
                                </Box>
                            </Box>
                            {/* EntityTable below is a separate component created to deal with the table UI and respective functionality i.e pagination */}
                            <EntityTable
                                libraryId={libraryId}
                                item={item}
                                numOfTables={filteredData.length}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default FilterContent
