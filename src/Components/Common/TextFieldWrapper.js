import { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import { ErrorMessage, useField } from "formik";
import { Box } from "@mui/system";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

/* Whenever an input field is needed, we make use of this Common Text Field Component
 * TextFieldWrapper by default has the same styling as the most used input field of our app
 * If a Text Field is required with different styling or functionality, we pass the changings props while calling this component to meet our Text Field style needs
 * For example, when we need an input field for password, we simply pass type="password" while calling this component and rest of the logic and functionality is handled in this common component. Everytime we need a password field, we wont have to write the same logic again
 * ADVANTAGES:
 *   1. Don't need to write the code that is common in all the input fields everytime an input field is used
 */

export const TextFieldWrapper = ({
  hint,
  icon,
  type,
  label,
  border = "1px solid #CED4DA",
  borderRadius = "4px",
  padding = "5px 15px",
  fontSize = "14px",
  color = "text.secondary",
  width = "auto",
  fontWeight = 400,
  marginBottom = "0px",
  handleKeyDown,
  ...props
}) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const onKeyDown = (e) => {
    if(handleKeyDown){
      handleKeyDown(e)
    }
  }

  const commonInputProps = {
    disableUnderline: true,
    sx: {
      padding: padding,
      border: border,
      borderRadius: borderRadius,
      fontSize: fontSize,
      fontWeight: fontWeight,
      color: color,
      width: width,
      marginBottom: marginBottom
    }
  }

  return (
    <div>
      <Typography variant="body3" sx={{ color: "text.primary" }}>
        {label}
      </Typography>
      <TextField
        fullWidth
        sx={{
          mt: 1,
        }}
        {...field}
        {...props}
        variant="standard"
        error={!!(meta.touched && meta.error)}
        autoComplete
        onFocus={() => null}
        size={props.size}
        disabled={props.disabled}
        type={showPassword ? "text" : type}
        onKeyDown={onKeyDown}
        InputProps={
          props.startIcon ? {
            ...commonInputProps,
            startAdornment: (
              <InputAdornment position="start">
                {props.startIcon}
              </InputAdornment>
            ),
          } :
            props.endIcon ? {
              ...commonInputProps,
              endAdornment: (
                <InputAdornment position="start">
                  {props.endIcon}
                </InputAdornment>
              ),
            } :
              type === "password"
                ? {
                  ...commonInputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ color: "secondary.main" }}
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
                : {
                  ...commonInputProps,
                }
        } />
      <Box position="relative">
        <Box sx={{ position: "absolute", left: "10px" }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "text.secondary",
            }}
          >
            {hint}
          </Typography>
        </Box>
        {meta.error && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <ErrorMessage
              component="div"
              name={field.name}
            />
          </Box>
        )}
      </Box>
    </div>
  );
};
