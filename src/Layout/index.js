import { Box, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as KlarityIcon } from '../Assets/klarity_logo.svg'
import { ReactComponent as PuzzleIcon } from '../Assets/puzzle-icon.svg'
import { ReactComponent as GraphIcon } from '../Assets/graph.svg'
import { ReactComponent as SettingsIcon } from '../Assets/admin-settings.svg'
import { ReactComponent as ArrowBack } from '../Assets/arrow-back.svg'
import { sidebarConstants } from '../Constants/sidebar'
import { useLocation } from 'react-router-dom'


const Layout = ({children}) => {

    const location = useLocation();
    console.log("location.pathname: ", location?.pathname.includes("Filter".toLowerCase()))

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
                            sidebarConstants?.map(item => (
                                <Box className={location?.pathname?.includes(item?.title?.toLowerCase()) && "active-menu-item"} sx={{ display: "flex", marginBottom: "4px", padding: "4px 8px", borderRadius: "4px", cursor: "pointer"}}>
                                    <Box sx={{ width: "30px" }}>
                                        {item.icon}
                                    </Box>
                                    <Typography variant="body3" sx={{ color: "text.primary" }}>
                                        {item.title}
                                    </Typography>
                                </Box>
                            ))
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
                    <Box sx={{ display: "flex", marginBottom: "4px", marginTop: "10px", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}>
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
            <Box sx={{ flex: 1 }}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout
