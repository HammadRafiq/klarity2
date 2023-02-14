import React, { useMemo, useState } from 'react'
import { Box, ClickAwayListener, Grid, Menu, MenuItem, Paper, Tooltip, tooltipClasses, Typography } from '@mui/material'
import { ReactComponent as PuzzleIcon } from '../../Assets/puzzle-icon.svg'
import { ReactComponent as VerticalDots } from '../../Assets/vertical-dots.svg'
import { ReactComponent as SettingsIcon } from '../../Assets/settings.svg'
import { ReactComponent as UploadIcon } from '../../Assets/upload2.svg'
import { ReactComponent as EditIcon } from '../../Assets/edit2.svg'
import { ReactComponent as TrashIcon } from '../../Assets/trash2.svg'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { ClickableTooltip } from '../Common/ClickableTooltip'
import CustomMenu from '../Common/CustomMenu'
import CommonDeleteModal from '../Common/CommonDeleteModal'
import ManageLibraryModal from './ManageLibraryModal'
import { useQueryClient } from '@tanstack/react-query'
import { updateFilteredData, updateSelectedDashboard } from '../../Pages/Filter/filterSlice'
import { useDispatch } from 'react-redux'
import { apiGetRequest } from 'Helpers'
import { useSnackbar } from "notistack"
import { BaseURL } from 'Config'

// Mapping the API data with the titles shown in the UI.
const dataMap = {
    lastIndexDate: "Last",
    filesize: "File size",
    readDocsCounter: "Read",
    inPipeline: "In pipeline",
    notesDocsCounter: "Notes",
    firstIndexDate: "Start",
    duplicates: "Duplicates",
    taggedDocsCounter: "Tagged",
    ocrDone: "OCR",
    pageCounter: "Pages",
    problems: "Problems"
}

const LibraryItem = ({ obj, refetch }) => {
    const [loading, setLoading] = useState(false)
    const [settingsVisible, setSettingsVisible] = useState(false)
    const [deleteVisible, setDeleteVisible] = useState(false)

    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const queryClient = useQueryClient()

    const libraryHandler = () => {
        queryClient.removeQueries({ queryKey: ['dashboardTemplates'] }) // Delete the existing cached data
        dispatch(updateSelectedDashboard("")) // Reset to initial state
        dispatch(updateFilteredData([])) // Reset to initial state
        localStorage.setItem("libraryName", obj.displayName)
        navigate(`/filter/${obj.indexname}`) // When clicked on a specific library, navigate to the Filter screen with libraryId in the URL
    }

    const options = useMemo(() => (
        [
            {
                title: "Manage",
                icon: <SettingsIcon />,
                onClickHandler: () => setSettingsVisible(true)
            },
            {
                title: "Upload",
                icon: <UploadIcon />
            },
            {
                title: "Change",
                icon: <EditIcon />
            },
            {
                title: "Delete",
                icon: <TrashIcon />,
                onClickHandler: () => setDeleteVisible(true)
            },
        ]

    ), [])

    const deleteLibraryHandler = async () => {
        return apiGetRequest(`${BaseURL}/rest/api/removeLibrary`, { indexname: obj.indexname })
            .then(res => {
                enqueueSnackbar("Library deleted successfully", {
                    variant: "success"
                })
                refetch()
            })
            .catch(error => {
                enqueueSnackbar(error?.message || "Something went wrong", {
                    variant: "success"
                })
            })
    }


    return (
        <Grid xs={3} item>
            <Paper sx={{ backgroundColor: "common.white", padding: "15px", cursor: "pointer", height: "100%" }} onClick={libraryHandler} >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px", marginBottom: "10px", borderBottom: "1px solid #DEE2E6" }}>
                    <Box sx={{ display: "flex" }}>
                        <PuzzleIcon />
                        <Box sx={{ marginLeft: "10px" }}>
                            <Typography variant='subtitle1'>
                                {obj.displayName}
                            </Typography>
                            <Typography variant='body2' sx={{ color: "text.secondary" }}>
                                Docs: 7/37
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <CustomMenu options={options} />
                    </Box>
                </Box>
                <Grid container columnSpacing={2}>
                    {Object.entries(obj)?.map((item, index) => { // Applying the loop on the individual object of the array to populate all the key/value pairs in the grid
                        return dataMap[item[0]] && (
                            <Grid item xs={6} key={index}>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography variant='body2'>
                                        {dataMap[item[0]]}
                                    </Typography>
                                    <Typography variant='body1'>
                                        {item[1]}
                                    </Typography>
                                </Box>
                            </Grid>
                        )
                    })
                    }
                </Grid>
                <CommonDeleteModal
                    open={deleteVisible}
                    setOpen={setDeleteVisible}
                    onDelete={deleteLibraryHandler}
                />
                <ManageLibraryModal
                    open={settingsVisible}
                    setOpen={setSettingsVisible}
                    data={obj}
                    refetch={refetch}
                    isEdit={true}
                />
            </Paper>
        </Grid>
    )
}

export default LibraryItem
