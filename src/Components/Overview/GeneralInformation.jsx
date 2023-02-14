import { Box, Typography } from "@mui/material"
import { Form, Formik } from "formik"
import CustomButton from "../Common/CustomButton"
import CustomCheckbox from "../Common/CustomCheckbox"
import { TextFieldWrapper } from "../Common/TextFieldWrapper"
import TestImg from '../../Assets/test.png'
import { BaseURL } from "Config"
import axios from "axios"
import { apiPostRequest } from "Helpers"
import { useSnackbar } from "notistack"
import { useState } from "react"


const GeneralInformation = ({ handleCancel, isEdit, data, refetch }) => {
    const [loading, setLoading] = useState(false)
    const { enqueueSnackbar } = useSnackbar()

    const onSubmit = (input) => {
        setLoading(true)
        input.ocrLibrary = input.ocrLibrary === true ? 1 : 0

        isEdit ?
            apiPostRequest(`${BaseURL}/rest/api/updateLibrary`, {
                ...input,
                indexname: data?.indexname
            })
                .then(res => {
                    enqueueSnackbar("Library updated successfully", {
                        variant: "success"
                    })
                    handleCancel()
                    refetch()
                })
                .catch(err => {
                    enqueueSnackbar(err?.message || "Something went wrong", {
                        variant: "error"
                    })
                })
                .finally(() => {
                    setLoading(false)
                })
            :
            apiPostRequest(`${BaseURL}/rest/api/createLibrary`, input)
                .then(res => {
                    enqueueSnackbar("Library created successfully", {
                        variant: "success"
                    })
                    handleCancel()
                    refetch()
                })
                .catch(err => {
                    enqueueSnackbar(err?.message || "Something went wrong", {
                        variant: "error"
                    })
                })
                .finally(() => {
                    setLoading(false)
                })
    }

    return (
        <Formik
            initialValues={{
                title: data?.displayName || "",
                description: data?.description || "",
                ocrLibrary: data?.ocr === "on" ? true : false
            }}
            onSubmit={onSubmit}
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
                                name="title"
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
                                name="ocrLibrary"
                            />
                        </Box>
                    </Box>
                    <Box sx={{ filter: "drop-shadow(0px 0px 35px rgba(154, 161, 171, 0.15))", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "40px" }}>
                        <CustomButton
                            title="Delete"
                            backgroundColor="transparent"
                            border="1px solid"
                            borderColor="#fff"
                            color="text.error"
                            styleObj={{
                                marginLeft: "-20px"
                            }}
                        />
                        <Box>
                            <CustomButton
                                title="Cancel"
                                backgroundColor="#fff"
                                border="1px solid"
                                borderColor="#fff"
                                color="text.secondary"
                                onClick={handleCancel}
                            />
                            <CustomButton
                                title="Import data from server"
                                backgroundColor="#fff"
                                border="1px solid"
                                borderColor="#C1C7D0"
                                color="text.secondary"
                            />
                            <CustomButton
                                title={isEdit ? "Save" : "Create"}
                                type="submit"
                                loading={loading}
                                styleObj={{
                                    marginLeft: "10px"
                                }}
                            />
                        </Box>
                    </Box>
                </Form>
            )}
        </Formik>
    )
}

export default GeneralInformation
