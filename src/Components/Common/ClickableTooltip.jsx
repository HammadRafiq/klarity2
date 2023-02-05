import styled from "@emotion/styled";
import { Box, Tooltip, tooltipClasses } from "@mui/material";

export const ClickableTooltip = styled(({ className, children, ...props }) => (
    <Tooltip
        classes={{ popper: className }}
        PopperProps={{
            disablePortal: true,
        }}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        {...props}
    >
        <Box>
            {children}
        </Box>
    </Tooltip>
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'transparent',
        padding: "0",
        margin: "0",
        color: 'unset',
    },
}))
