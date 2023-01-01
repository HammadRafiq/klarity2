import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchResultHeader from '../../Components/Search/SearchResultHeader'
import Layout from '../../Layout'
import { ReactComponent as GridViewIcon } from '../../Assets/grid-view.svg'
import { ReactComponent as ListViewIcon } from '../../Assets/list-view.svg'
import { ReactComponent as FilterIcon } from '../../Assets/filter-circle.svg'
import CustomButton from '../../Components/Common/CustomButton'


const SearchResult = () => {
    const [activeView, setActiveView] = useState("list")

    return (
        <Layout>
            <SearchResultHeader />
            <Box sx={{ padding: "30px 100px" }}>
                <Box> {/* Logical container */}
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
                </Box>
            </Box>
        </Layout>
    )
}

export default SearchResult
