import { Box, Button, Tooltip, tooltipClasses, Typography } from "@mui/material"
import { Form, Formik } from "formik"
import CustomButton from "../Common/CustomButton"
import CustomCheckbox from "../Common/CustomCheckbox"
import { TextFieldWrapper } from "../Common/TextFieldWrapper"
import TestImg from '../../Assets/test.png'
import { BaseURL } from "Config"
import axios from "axios"
import { apiGetRequest, apiPostRequest } from "Helpers"
import { useSnackbar } from "notistack"
import React, { useMemo, useState } from "react"
import CustomMenu from "Components/Common/CustomMenu"
import CustomMenu1 from "Components/Common/CustomMenu1"
import { ReactComponent as TrashIcon } from 'Assets/trash2.svg'
import { ReactComponent as ChevronDown } from 'Assets/chevron-down.svg'
import { ReactComponent as UploadIcon } from 'Assets/upload3.svg'
import { ReactComponent as DefaultImg } from 'Assets/default-image.svg'
import DummyImage from 'Assets/dummy.png'
import ThreeDots from 'Assets/three-dots_cropped.png'
import CommonDeleteModal from "Components/Common/CommonDeleteModal"
import styled from "@emotion/styled"

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

const GeneralInformation = ({ handleCancel, isEdit, data, refetch }) => {
    const [loading, setLoading] = useState(false)
    const [deleteLibrary, setDeleteLibrary] = useState(false)
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

    const deleteLibraryHandler = async () => {
        return apiGetRequest(`${BaseURL}/rest/api/removeLibrary`, { indexname: data.indexname })
            .then(res => {
                enqueueSnackbar("Library deleted successfully", {
                    variant: "success"
                })
                refetch()
            })
            .catch(error => {
                enqueueSnackbar(error?.message || "Something went wrong", {
                    variant: "success"
                })
            })
    }

    const options = useMemo(() => (
        [
            {
                title: "Delete documents",
                icon: <TrashIcon />,
            },
            {
                title: "Remove library from company",
                icon: <TrashIcon />
            },
            {
                title: "Delete library",
                icon: <TrashIcon />,
                onClickHandler: () => setDeleteLibrary(true)
            },
        ]

    ), [])

    const uploadOptions = useMemo(() => (
        [
            {
                title: "Upload image",
                icon: <UploadIcon />,
                onClickHandler: () => null
            },
            {
                title: "Use default",
                icon: <DefaultImg />,
                onClickHandler: () => null
            },
            {
                title: "Delete",
                icon: <TrashIcon />,
                onClickHandler: () => null
            },
        ]
    ), [])


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
                            <Box width={70} height={70} sx={{ position: "relative" }}>
                                <label style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <input
                                        style={{ display: "none" }}
                                        type="file"
                                        id="upload-file"
                                        name="upload-file"
                                    />
                                    <img src={DummyImage} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                                </label>
                                <CustomMenu
                                    options={uploadOptions}
                                    renderUI={(
                                        <img src={ThreeDots} style={{ position: "absolute", right: "-7px", bottom: "-7px" }} />
                                    )}
                                />
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
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "40px", paddingTop: "10px" }}>
                        <Box>
                            <CustomMenu
                                options={options}
                                renderUI={(
                                    <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                        <Typography sx={{ fontWeight: 500, fontSize: "14px", color: "text.error", marginRight: "8px" }}>
                                            Delete
                                        </Typography>
                                        <ChevronDown />
                                    </Box>
                                )}
                            />
                        </Box>
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
                    <CommonDeleteModal
                        open={deleteLibrary}
                        setOpen={setDeleteLibrary}
                        onDelete={deleteLibraryHandler}
                    />
                </Form>
            )}
        </Formik>
    )
}

export default GeneralInformation
