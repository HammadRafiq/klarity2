import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FilterHeader from '../../Components/Filter/FilterHeader'
import FilterFooter from '../../Components/Filter/FilterFooter'
import { ReactComponent as GridIcon } from '../../Assets/grid-icon.svg'
import { ReactComponent as TrashIcon } from '../../Assets/trash-icon2.svg'
import { ReactComponent as DownloadIcon } from '../../Assets/download-icon.svg'
import Layout from '../../Layout'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import EntityTable from '../../Components/Filter/EntityTable'
import { apiGetRequest } from '../../Helpers'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../../Context/AuthContext'
import { endpoints } from '../../Config/endpoints'

const validationSchemaAuth = Yup.object({
    first: Yup.string()
        .required("Field required"),
});


const Filter = () => {

    const [data, setData] = useState([])
    const { libraryId } = useParams()

    // const allRecords = useSelector(state => state.filter.allRecords)

    const getEntityTypes = async () => {
        const { data } = await apiGetRequest(endpoints.getEntityTypes, null, { library: libraryId })
        setData(data)
    }

    useEffect(() => {
        getEntityTypes()
    }, [])


    return (
        <Layout>
            <Box className="filter-main" sx={{ position: "relative", height: "100%" }} >
                <Formik
                    initialValues={{
                        globalSearch: ""
                    }
                    }
                    validationSchema={validationSchemaAuth}
                    onSubmit={(values) => {
                        console.log("values submitted")
                    }
                    }
                >
                    {() => (
                        <Form>
                            <FilterHeader />
                            <Box sx={{ padding: "30px 40px", backgroundColor: "background.paper" }}>
                                <Grid container spacing={2}>
                                    {data?.slice(0, 6)?.map((item, index) => (
                                        <Grid item xs={4}>
                                            <Box sx={{ backgroundColor: "background.default", borderRadius: "4px", minHeight: 230 }}>
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
                                                <EntityTable
                                                    libraryId={libraryId}
                                                    key={index}
                                                    item={item}
                                                />
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <FilterFooter />
                        </Form>
                    )}
                </Formik>
            </Box>
        </Layout>
    )
}

export default Filter
