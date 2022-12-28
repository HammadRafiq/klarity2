import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({
    color = "#fff",
    backgroundColor = "secondary.main",
    hoverBackground = "red",
    borderRadius = "4px",
    fontWeight = 500,
    height = "38px",
    padding = "0 15px",
    border = "1px solid",
    borderColor = "secondary.main",
    minWidth = "100px",
    title = "Button",
    fontSize = "14px",
    textTransform = "capitalize",
    type = "button",
    disabledStyle = {},
    svgStyle = {},
    disabled = false,
    onClick = () => null,
    ...rest
}) => {
    return (
        <Button
            onClick={onClick}
            type={type}
            disabled={disabled}
            sx={{
                "&, &:hover": {
                    color: color,
                    backgroundColor: backgroundColor,
                    borderRadius: borderRadius,
                    fontWeight: fontWeight,
                    fontSize: fontSize,
                    height: height,
                    padding: padding,
                    border: border,
                    borderColor: borderColor,
                    minWidth: minWidth,
                    textTransform: textTransform,
                    ...rest,
                },
                "&:hover": {
                    // backgroundColor: hoverBackground
                },
                "&.Mui-disabled": disabledStyle,
                "& svg": svgStyle
            }}
        >
            {title}
        </Button>
    )
}

export default CustomButton
