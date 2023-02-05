import { useField } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


const CustomCheckbox = ({
    label,
    styleObj = {},
    ...rest
}) => {
    const [field] = useField({ ...rest, type: "checkbox" });

    return (
        <FormControlLabel
            label={label}
            control={
                <Checkbox
                    checked={field.checked}
                    onChange={field.onChange}
                    id={field.name}
                    value={field.value}
                    sx={{
                        ...styleObj
                    }}
                />
            }
        />
    );
};
export default CustomCheckbox
