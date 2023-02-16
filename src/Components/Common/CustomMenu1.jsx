import { Box, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react'
import { ReactComponent as VerticalDots } from '../../Assets/vertical-dots.svg'

const CustomMenu1 = ({
    renderUI = <VerticalDots />,
    options = [],
    padding = "2px 8px"
}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClose = (e) => {
        e.stopPropagation()
        setAnchorEl(null)
    }


    return (
        <Box sx={{ overflow: "visible"}}>
            <Box
                onClick={event => {
                    event.stopPropagation()
                    setAnchorEl(event.currentTarget)
                }}
                sx={{ padding: padding, cursor: "pointer"}}
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
                        <Box>
                            {item.children}
                        </Box>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default CustomMenu1
