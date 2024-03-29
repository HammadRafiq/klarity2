import { Box, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react'
import { ReactComponent as VerticalDots } from '../../Assets/vertical-dots.svg'

const CustomMenu = ({
    renderUI = <VerticalDots />,
    options = [],
    padding = "5px 13px",
    styleObj = {}
}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClose = (e) => {
        e.stopPropagation()
        setAnchorEl(null)
    }


    return (
        <Box sx={{ overflow: "visible" }}>
            <Box
                onClick={event => {
                    event.stopPropagation()
                    setAnchorEl(event.currentTarget)
                }}
                sx={{
                    padding: padding,
                    cursor: "pointer",
                    ...styleObj
                }}
            >
                {renderUI}
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    ".MuiMenu-paper": {
                        backgroundColor: "#fff"
                    }
                }}
            >
                {options?.map(item => (
                    <MenuItem onClick={e => {
                        handleClose(e)
                        item.onClickHandler()
                    }}>
                        <Box style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                            {item.icon}
                            <Typography variant='body2'>
                                {item.title}
                            </Typography>
                        </Box>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default CustomMenu
