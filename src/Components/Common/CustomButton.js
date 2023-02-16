import { LoadingButton } from '@mui/lab'
import React from 'react'

/* Whenever a button is needed in the project, we call CustomButton component.
 * CustomButton by default has the same styling as one of the most used buttons of our app.
 * If a button is required with different styling, we pass the changings props while calling this component to meet our button style needs
 * ADVANTAGES:
 *   1. Don't need to write the code that is common in all the buttons everytime a button is used
 */

const CustomButton = ({
    color = "#fff",
    backgroundColor = "secondary.main", // secondary.main is a short for theme.palette.secondary.main
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
    styleObj = {},
    textTransform = "capitalize",
    type = "button",
    disabledStyle = {},
    svgStyle = {},
    disabled = false,
    loading = false,
    loaderColor = "#fff",
    onClick = () => null,
    ...rest
}) => {
    return (
        <LoadingButton
            onClick={onClick}
            type={type}
            disabled={disabled}
            loading={loading}
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
                    boxShadow: "none",
                    ...styleObj
                },
                "&:hover": {
                    // backgroundColor: hoverBackground
                },
                "&.Mui-disabled": disabledStyle,
                "& svg": svgStyle,
                "& .MuiLoadingButton-loadingIndicator": {
                    color: loaderColor
                }
            }}
            {...rest}
        >
            {title}
        </LoadingButton>
    )
}

export default CustomButton
