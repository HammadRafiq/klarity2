import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FilterHeader from '../../Components/Filter/FilterHeader'
import FilterFooter from '../../Components/Filter/FilterFooter'
import { ReactComponent as GridIcon } from '../../Assets/grid-icon.svg'
import { ReactComponent as TrashIcon } from '../../Assets/trash-icon2.svg'
import { ReactComponent as DownloadIcon } from '../../Assets/download-icon.svg'
import Layout from '../../Layout'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import EntityTable from '../../Components/Filter/EntityTable'

const validationSchemaAuth = Yup.object({
    first: Yup.string()
        .required("Field required"),
});


const Filter = () => {
    return (
        <Layout>
            <Box className="filter-main">
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
                            <Box sx={{ padding: "30px 40px", backgroundColor: "background.paper"}}>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Box sx={{ backgroundColor: "background.default", borderRadius: "4px", minHeight: 230 }}>
                                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderBottom: "1px solid #DEE2E6"}}>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <GridIcon />
                                                    <Typography variant="subtitle1" sx={{paddingLeft: "8px"}}>
                                                        Person
                                                    </Typography>
                                                </Box>
                                                <Box sx={{display:  "flex", alignItems: "center"}}>
                                                    <DownloadIcon style={{marginRight: "10px"}} />
                                                    <TrashIcon />
                                                </Box>
                                            </Box>
                                            <EntityTable />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        item
                                    </Grid>
                                    <Grid item xs={4}>
                                        item
                                    </Grid>
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
