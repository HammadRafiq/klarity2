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
    ...otherProps
}) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = (evt) => {
        const { value } = evt.target;
        setFieldValue(name, value);
        onChange && onChange(evt.target);
    };

    const configSelect = {
        ...field,
        ...otherProps,
        fullWidth: true,
        onChange: handleChange,
    };

    return (
        <Box position="relative" className="form">
            <FormControl fullWidth size={size} error={!!(meta.touched && meta.error)}>
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
                >
                    {options.map((data) => {
                        return (
                            <MenuItem
                                sx={{
                                    "&.MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
                                        { border: "1px solid #625E66", borderRadius: "8px" },
                                    "&.MuiPaper-root": {
                                        boxShadow: "none",
                                    },
                                    transition: "all 0.25s ease-in-out",
                                    "&:hover": {
                                        paddingLeft: "30px",
                                        fontWeight: 600,
                                    },
                                    paddingBottom: dropdownPaddingBottom,
                                    paddingTop: dropdownPaddingTop,
                                }}
                                value={data?.value}
                                key={data?.key}
                            >
                                {data?.value}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            {meta.touched && meta.error ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        position: "absolute",
                        right: "5px",
                    }}
                >
                    <ErrorMessage
                        component="div"
                        name={field.name}
                        className="error font-size-12 font-weight-500 dark-washed-red font-family-poppins"
                    />
                    <Box sx={{ ml: 1 }}>
                        <img src={infoerror} alt="info" />
                    </Box>
                </Box>
            ) : null}
        </Box>
    );
};

export default CustomSelect
