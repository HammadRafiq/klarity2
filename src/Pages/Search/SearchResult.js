import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchResultHeader from '../../Components/Search/SearchResultHeader'
import Layout from '../../Layout'
import CustomButton from '../../Components/Common/CustomButton'
import { ReactComponent as GridViewIcon } from '../../Assets/grid-view.svg'
import { ReactComponent as ListViewIcon } from '../../Assets/list-view.svg'
import { ReactComponent as FilterIcon } from '../../Assets/filter-circle.svg'
import { ReactComponent as PdfIcon } from '../../Assets/pdf.svg'
import { ReactComponent as TickIcon } from '../../Assets/tick.svg'
import { ReactComponent as CommentIcon } from '../../Assets/comment.svg'
import { ReactComponent as FileIcon } from '../../Assets/file.svg'
import { ReactComponent as InfoIcon } from '../../Assets/info-circle.svg'

const SearchResult = () => {
    const [activeView, setActiveView] = useState("list")

    return (
        <Layout>
            <SearchResultHeader />
            <Box sx={{ padding: "30px 100px" }}>
                <Box> {/* Logical container */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "20px"}}>
                        <Box sx={{ display: "flex", gap: "12px" }}>
                            <Typography variant='subtitle1'>
                                Search result
                            </Typography>
                            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                                100
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <CustomButton
                                padding="4px 5px"
                                minWidth="auto"
                                height="auto"
                                backgroundColor="background.default"
                                border="1px solid"
                                borderColor='#C1C7D0'
                                title={<FilterIcon />}
                                marginRight="10px"
                            />
                            <CustomButton
                                padding="4px 5px"
                                minWidth="auto"
                                height="auto"
                                backgroundColor={activeView === "grid" ? "#D955C3" : "background.default"}
                                border="1px solid"
                                borderColor={activeView === "grid" ? "#D955C3" : "#C1C7D0"}
                                title={<GridViewIcon />}
                                onClick={() => setActiveView("grid")}
                                svgStyle={activeView === "grid" && {
                                    path: {
                                        fill: "white"
                                    }
                                }
                                }
                            />
                            <CustomButton
                                padding="4px 5px"
                                minWidth="auto"
                                height="auto"
                                title={<ListViewIcon />}
                                border="1px solid"
                                backgroundColor={activeView === "list" ? "#D955C3" : "background.default"}
                                borderColor={activeView === "list" ? "#D955C3" : "#C1C7D0"}
                                onClick={() => setActiveView("list")}
                                svgStyle={activeView === "list" && {
                                    path: {
                                        fill: "white"
                                    }
                                }
                                }
                            />
                        </Box>
                    </Box>
                    <Grid container rowSpacing={1.8}>
                        {["1", "2", "3", "4", "5", "6"].map(item => (
                            <Grid item xs={12}>
                                <Box sx={{ backgroundColor: "background.default", padding: "15px 20px", borderRadius: "4px", boxShadow: "0px 0px 35px rgba(154, 161, 171, 0.15)"}}>
                                    <Box sx={{ display: "flex", alignItems: "center", paddingBottom: "8px" }}>
                                        <PdfIcon />
                                        <Typography variant="subtitle2" sx={{ marginTop: "2px", marginLeft: "5px" }}>
                                            Alcohol inventory form
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2">
                                        ”... Lorem ipsum dolor sit amet, Thomas consetetur sadipscing elitr, sed diam ... nonumy eirmod tempor invidunt ut Thomas labore et dolore magna aliquyam ... erat, sed diam voluptua. At Thomas vero eos et accusam ... et justo duo dolores et Thomas ea rebum. Stet clita ... "
                                    </Typography>
                                    <Box sx={{ borderTop: "1px solid #DEE2E6", display: "flex", justifyContent: "space-between", paddingTop: "5px", marginTop: "10px" }}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography variant="body2" sx={{ color: "primary.main" }}>
                                                Created date: &nbsp;
                                            </Typography>
                                            <Typography variant="h3" sx={{ color: "primary.main" }}>
                                                2022-05-05
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", gap: "5px" }}>
                                            <InfoIcon />
                                            <FileIcon />
                                            <CommentIcon />
                                            <TickIcon />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Layout>
    )
}

export default SearchResult
