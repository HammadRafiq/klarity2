import React from 'react'
import { Box, ClickAwayListener, Grid, Paper, Tooltip, tooltipClasses, Typography } from '@mui/material'
import { ReactComponent as PuzzleIcon } from '../../Assets/puzzle-icon.svg'
import { ReactComponent as VerticalDots } from '../../Assets/vertical-dots.svg'
import { ReactComponent as SettingsIcon } from '../../Assets/settings.svg'
import { ReactComponent as UploadIcon } from '../../Assets/upload2.svg'
import { ReactComponent as EditIcon } from '../../Assets/edit2.svg'
import { ReactComponent as TrashIcon } from '../../Assets/trash2.svg'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { ClickableTooltip } from '../Common/ClickableTooltip'

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

const tooltipData = [
    {
        title: "Manage",
        icon: <SettingsIcon />
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
        icon: <TrashIcon />
    },
]

const LibraryItem = ({ obj }) => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()

    const libraryHandler = () => {
        navigate(`/filter/${obj.indexname}`) // When clicked on a specific library, navigate to the Filter screen with libraryId in the URL
    }

    const handleTooltipClose = (e) => {
        e.stopPropagation()
        setOpen(false);
    };

    const handleTooltipOpen = (e) => {
        e.stopPropagation()
        setOpen(true);
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
                        <ClickAwayListener onClickAway={handleTooltipClose}>
                            <div>
                                <ClickableTooltip
                                    title={(
                                        <Box sx={{ padding: "7px 11px", backgroundColor: "#fff", border: "1px solid #DEE2E6", boxShadow: "0px 0px 35px rgba(154, 161, 171, 0.15)", borderRadius: "4px"}}>
                                            {tooltipData.map(item => (
                                                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "7px" }}>
                                                    <Box>
                                                        {item.icon}
                                                    </Box>
                                                    <Typography variant='body2'>
                                                        {item.title}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>)}
                                    onClose={handleTooltipClose}
                                    open={open}
                                    children={(
                                        <Box onClick={handleTooltipOpen} sx={{padding: "2px 8px"}}>
                                            <VerticalDots/>
                                        </Box>
                                    )}
                                />
                            </div>
                        </ClickAwayListener>
                    </Box>
                </Box>
                <Grid container columnSpacing={2}>
                    {Object.entries(obj)?.map((item, index) => {
                        return dataMap[item[0]] && (
                            <Grid item xs={6}>
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
            </Paper>
        </Grid>
    )
}

export default LibraryItem

// dataMap[item[0]]
