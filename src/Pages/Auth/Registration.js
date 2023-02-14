import { Box, Grid, Paper } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import CustomSelect from '../../Components/CommonIndividual/CustomSelect'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useDispatch, useSelector } from 'react-redux';

// Not yet part of the project

const Registration = () => {


  return (
    <Box sx={{
      padding: "100px"
    }}>
      Register goes here
    </Box>
  )
}

export default Registration
