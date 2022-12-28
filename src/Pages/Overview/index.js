import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as KlarityIcon } from '../../Assets/klarity_logo.svg'
import { ReactComponent as SettingsIcon } from '../../Assets/admin-settings.svg'
import { ReactComponent as UploadIcon } from '../../Assets/upload-icon.svg'
import LibraryItem from '../../Components/Overview/LibraryItem'

// In order for Grid Spacing to work:
// 1. dont use sx on both container and item grid
// 2. use container with parent and item with child grid
// 3. wrap child grid item in a Box

// Data map missing: Snippets,

const libraryData = [
  {
    pageCounter: 34,
    notesDocsCounter: 2,
    ocrDone: 21,
    snippets: 5,
    readDocsCounter: 5,
    inPipeline: 0,
    taggedDocsCounter: 349,
    duplicates: 17,
    filesize: 23,
    problems: 14,
    firstIndexDate: "15.05.2022",
    lastIndexDate: "15.05.2022"
  },
  {
    pageCounter: 34,
    notesDocsCounter: 2,
    ocrDone: 21,
    snippets: 5,
    readDocsCounter: 5,
    inPipeline: 0,
    taggedDocsCounter: 349,
    duplicates: 17,
    filesize: 23,
    problems: 14,
    firstIndexDate: "15.05.2022",
    lastIndexDate: "15.05.2022"
  },
  {
    pageCounter: 34,
    notesDocsCounter: 2,
    ocrDone: 21,
    snippets: 5,
    readDocsCounter: 5,
    inPipeline: 0,
    taggedDocsCounter: 349,
    duplicates: 17,
    filesize: 23,
    problems: 14,
    firstIndexDate: "15.05.2022",
    lastIndexDate: "15.05.2022"
  },
  {
    pageCounter: 34,
    notesDocsCounter: 2,
    ocrDone: 21,
    snippets: 5,
    readDocsCounter: 5,
    inPipeline: 0,
    taggedDocsCounter: 349,
    duplicates: 17,
    filesize: 23,
    problems: 14,
    firstIndexDate: "15.05.2022",
    lastIndexDate: "15.05.2022"
  },
  {
    pageCounter: 34,
    notesDocsCounter: 2,
    ocrDone: 21,
    snippets: 5,
    readDocsCounter: 5,
    inPipeline: 0,
    taggedDocsCounter: 349,
    duplicates: 17,
    filesize: 23,
    problems: 14,
    firstIndexDate: "15.05.2022",
    lastIndexDate: "15.05.2022"
  },

]

const Overview = () => {
  return (
    <Box>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "6px 50px",
        backgroundColor: "background.default"
      }}>
        <Box>
          <KlarityIcon />
        </Box>
        <Box sx={{
          display: "flex"
        }}>
          <Box sx={{ display: "flex", alignItems: "center", marginRight: "30px" }}>
            <SettingsIcon />
            <Typography variant='body3' sx={{ marginLeft: "8px" }}>
              Admin Settings
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ padding: "2px 4px", background: "#C1C7D0", borderRadius: "50%", marginRight: "8px" }}>
              <Typography sx={{ fontSize: "12px", color: "common.white", fontWeight: "400" }}>
                HR
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                Jane Cooper
              </Typography>
              <Typography sx={{ fontSize: "10px", fontWeight: 400, color: "text.secondary" }}>
                janecooper@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: "10px 50px"}}> {/* Background contatiner minHeight: "calc(100vh - 49px)"  */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#34495E", color: "common.white", borderRadius: "4px", padding: "15px 80px 15px 30px" }}> {/* Overview inner header */}
          <Box>
            <Typography variant='h1'>
              Welcome to Klarity, Jane
            </Typography>
            <Typography variant="subtitle2" sx={{ opacity: "0.7" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: "text.secondary", padding: "12px", borderRadius: "4px", minWidth: "180px" }}>
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: "10px", color: "common.white" }}>
                STATISTICS
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant='body1' sx={{ color: "common.white", opacity: "0.6", paddingBottom: "2px" }}>
                    Tagged
                  </Typography>
                  <Typography variant='body1' sx={{ color: "common.white", opacity: "0.6", paddingBottom: "2px" }}>
                    Tagged
                  </Typography>
                  <Typography variant='body1' sx={{ color: "common.white", opacity: "0.6", paddingBottom: "2px" }}>
                    Snippets
                  </Typography>
                  <Typography variant='body1' sx={{ color: "common.white", opacity: "0.6" }}>
                    In pipeline
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='subtitle1'>
                    356
                  </Typography>
                  <Typography variant='subtitle1'>
                    45
                  </Typography>
                  <Typography variant='subtitle1'>
                    346
                  </Typography>
                  <Typography variant='subtitle1'>
                    832
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Typography variant="h2" sx={{ margin: "22px 0 10px 0" }}>
          Libraries
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box height="100%" sx={{ border: "1px dashed rgba(123, 135, 148, 0.3)", backgroundColor: "#EEF2F7", borderRadius: "4px"}}>
              <label style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="upload-file"
                  name="upload-file"
                />
                <Box>
                  <UploadIcon />
                </Box>
              </label>
            </Box>
          </Grid>
          {libraryData?.map((obj, index) => (
            <LibraryItem key={index} obj={obj} />
          ))
          }
        </Grid>
      </Box>
    </Box>
  )
}

export default Overview
