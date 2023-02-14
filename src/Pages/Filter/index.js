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
import FilterContent from '../../Components/Filter/FilterContent'

const Filter = () => {

    return (
        <Layout>
            <Box className="filter-main" sx={{ position: "relative", height: "100%" }} >
                <FilterHeader /> {/* Separate component created for the header */}
                <FilterContent />
                <FilterFooter /> {/* Separate component created for the footer of Filter index screen */}
            </Box>
        </Layout>
    )
}

export default Filter
