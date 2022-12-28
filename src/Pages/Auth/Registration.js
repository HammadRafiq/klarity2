import { Box, Grid, Paper } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div style={{padding: "20px"}}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box sx={{backgroundColor: "#ddd"}}>
            item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{backgroundColor: "#ddd"}}>
            item 2
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Registration
