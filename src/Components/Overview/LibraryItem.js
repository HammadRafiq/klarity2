import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { ReactComponent as PuzzleIcon } from '../../Assets/puzzle-icon.svg'
import { ReactComponent as VerticalDots } from '../../Assets/vertical-dots.svg'


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


const LibraryItem = ({ obj }) => {
    return (
        <Grid xs={3} item>
            <Paper sx={{ backgroundColor: "common.white", padding: "15px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px", marginBottom: "10px", borderBottom: "1px solid #DEE2E6" }}>
                    <Box sx={{ display: "flex" }}>
                        <PuzzleIcon />
                        <Box sx={{ marginLeft: "10px" }}>
                            <Typography variant='subtitle1'>
                                Companytone
                            </Typography>
                            <Typography variant='body2' sx={{ color: "text.secondary" }}>
                                Docs: 349/377
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <VerticalDots />
                    </Box>
                </Box>
                <Grid container columnSpacing={2}>
                    {Object.entries(obj)?.map((item, index) => (
                        <Grid item xs={6}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant='body2'>
                                    {dataMap[item[0]] ?? item[0]}
                                </Typography>
                                <Typography variant='body1'>
                                    {item[1]}
                                </Typography>
                            </Box>
                        </Grid>
                    ))
                    }
                </Grid>
            </Paper>
        </Grid>
    )
}

export default LibraryItem
