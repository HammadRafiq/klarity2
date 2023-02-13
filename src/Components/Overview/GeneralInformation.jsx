import { Box, Typography } from "@mui/material"
import { Form, Formik } from "formik"
import CustomButton from "../Common/CustomButton"
import CustomCheckbox from "../Common/CustomCheckbox"
import { TextFieldWrapper } from "../Common/TextFieldWrapper"
import TestImg from '../../Assets/test.png'

const GeneralInformation = () => {

    return (
        <Formik
            initialValues={{
                ocr: true
            }}
        >
            {() => (
                <Form>
                    <Box sx={{ display: "flex", gap: "30px" }}>
                        <Box>
                            <Box width={70} height={70}>
                                <label style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                                    <input
                                        style={{ display: "none" }}
                                        type="file"
                                        id="upload-file"
                                        name="upload-file"
                                    />
                                    <img src={TestImg} style={{ height: "100%", width: "100%", backgroundSize: "cover" }} />
                                </label>
                            </Box>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle1" sx={{ marginBottom: "15px" }}>
                                General Information
                            </Typography>
                            <TextFieldWrapper
                                name="libraryName"
                                label="Library name"
                                marginBottom="20px"
                            />
                            <TextFieldWrapper
                                name="description"
                                label="Description"
                                marginBottom="20px"
                                multiline={true}
                                rows={4}
                            />
                            <CustomCheckbox
                                label="Enable OCR"
                                name="ocr"
                            />
                        </Box>
                    </Box>
                </Form>
            )}
        </Formik>
    )
}

export default GeneralInformation
