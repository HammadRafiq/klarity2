import { Box, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as KlarityIcon } from '../Assets/klarity_logo.svg'
import { ReactComponent as PuzzleIcon } from '../Assets/puzzle-icon.svg'
import { ReactComponent as GraphIcon } from '../Assets/graph.svg'
import { ReactComponent as SettingsIcon } from '../Assets/admin-settings.svg'
import { ReactComponent as ArrowBack } from '../Assets/arrow-back.svg'
import { sidebarConstants } from '../Constants/sidebar'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

// The Layout consists of the common Layout (mainly sidebar) of the app. Every component being wrapped by this component means the Left Sidebar
// will be shown for that page/screen/component.
// For example, we wrap Filter screen component with this Layout component because we need Left Sidebar for Filter screen but
// we dont wrap Overview screen component with this Layout component because we dont need Left Sidebar for overview screen.

const Layout = ({ children }) => {

    const location = useLocation();
    const navigate = useNavigate()
    const { libraryId } = useParams()

    return (
        <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", minHeight: "100vh", backgroundColor: "background.default", padding: "0 15px", width: "200px", boxShadow: "2px 0px 22px rgba(51, 49, 60, 0.06)" }}>
                <Box>
                    <KlarityIcon style={{ marginTop: "10px" }} />
                    <Box sx={{ display: "flex", padding: "10px 0", borderTop: "1px solid #DEE2E6", borderBottom: "1px solid #DEE2E6", marginTop: "10px", marginBottom: "15px" }}>
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
                        {
                            sidebarConstants?.map(item => {
                                let isActiveMenu = location?.pathname?.includes(item?.title?.toLowerCase()) // Active menu is the one on which user clicks
                                let link = item?.libraryVariable ? `${item.link}/${libraryId}` : item.link // Link to be called when user clicks on some item of the left sidebar
                                return (
                                    <Box
                                        sx={{ display: "flex", marginBottom: "4px", padding: "6px 8px 4px 8px", borderRadius: "4px", cursor: "pointer", backgroundColor: isActiveMenu && "background.dark" }}
                                        onClick={() => navigate(link)}
                                    >
                                        <Box sx={{
                                            width: "30px",
                                            "& svg": {
                                                path: {
                                                    fill: isActiveMenu && "#fff"
                                                }
                                            }
                                        }}>
                                            {item.icon}
                                        </Box>
                                        <Typography variant="body3" sx={{ color: isActiveMenu ? "text.white" : "text.primary" }}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ display: "flex", marginBottom: "4px", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}>
                        <Box sx={{ width: "30px" }}>
                            <GraphIcon />
                        </Box>
                        <Typography variant="body3">
                            Show Statistics
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", marginBottom: "4px", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}>
                        <Box sx={{ width: "30px" }}>
                            <SettingsIcon />
                        </Box>
                        <Typography variant="body3">
                            Admin Settings
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", marginBottom: "4px", marginTop: "10px", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}
                        onClick={() => navigate("/overview")}
                    >
                        <Box sx={{ width: "30px" }}>
                            <ArrowBack />
                        </Box>
                        <Typography variant="body3" sx={{ color: "secondary.main" }}>
                            Back to Overview
                        </Typography>
                    </Box>
                    <Box sx={{ borderTop: "1px solid", borderTopColor: "grey.100", margin: "0 -15px", background: "#F9F9F9", padding: "10px 15px" }}>
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
            </Box>
            <Box sx={{ flex: 1, height: "100vh", overflowY: "scroll" }}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout
