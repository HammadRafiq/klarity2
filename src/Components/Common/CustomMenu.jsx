import { Box, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react'
import { ReactComponent as VerticalDots } from '../../Assets/vertical-dots.svg'

const CustomMenu = ({
    renderUI = <VerticalDots />,
    options = []
}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClose = (e) => {
        e.stopPropagation()
        setAnchorEl(null)
    }


    return (
        <Box>
            <Box onClick={event => {
                event.stopPropagation()
                setAnchorEl(event.currentTarget)
            }} sx={{ padding: "2px 8px" }}>
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
