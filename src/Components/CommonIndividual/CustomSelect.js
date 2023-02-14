import { ErrorMessage, useField, useFormikContext } from "formik";
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import infoerror from "../../Assets/infoerror.svg";
import { useState } from "react";
// import "./Inputs.scss";


export const CustomSelect = ({
    name,
    options,
    label,
    state,
    setState,
    size,
    notRequired,
    dropdownPaddingBottom,
    dropdownPaddingTop,
    onChange,
    disabled,
    padding = "7px 10px",
    fontWeight = "400",
    fontSize = "14px",
    styleObj = {},
    value = "",
    setValue,
    ...otherProps
}) => {

    const handleChange = (evt) => {
        const { value } = evt.target;
        setValue(value)
        onChange && onChange(value)
    }

    const configSelect = {
        ...otherProps,
        fullWidth: true,
        onChange: handleChange,
    };

    return (
        <Select
            labelId={label}
            id={label}
            className="dropdown-icon"
            IconComponent={KeyboardArrowDownIcon}
            {...configSelect}
            MenuProps={{
                PaperProps: { sx: { maxHeight: 300 } },
            }}
            disabled={disabled}
            value={value}
            sx={{
                ".MuiSelect-select": {
                    padding: padding,
                    fontWeight: fontWeight,
                    fontSize: fontSize,
                },
                ...styleObj
            }}
        >
            {options.map((data) => {
                return (
                    <MenuItem
                        sx={{
                            "&.MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
                                { border: "1px solid #CED4DA", borderRadius: "4px" },
                            "&.MuiPaper-root": {
                                boxShadow: "none",
                            },
                            transition: "all 0.25s ease-in-out",
                            "&:hover": {
                                paddingLeft: "20px",
                                fontWeight: 600,
                            },
                            paddingBottom: dropdownPaddingBottom,
                            paddingTop: dropdownPaddingTop,
                        }}
                        value={data?.value}
                        key={data?.value}
                    >
                        {data?.label}
                    </MenuItem>
                );
            })}
        </Select>
    );
};

export default CustomSelect
