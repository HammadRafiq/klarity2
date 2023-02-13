import { CloseOutlined } from '@mui/icons-material'
import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../Common/CustomButton';
import { CustomTabs } from '../Common/CustomTabs'
import GeneralInformation from './GeneralInformation';

const tabdata = [
    {
        label: "General Information",
        content: <GeneralInformation />,
    },
    {
        label: "Upload Files",
        content: <div>I am tab 2 content</div>,
    },
];

const ManageLibraryModal = ({ open = false, setOpen }) => {

    const handleCancel = (e) => {
        e.stopPropagation()
        setOpen(false)
    }


    return (
        <Box>
            <Modal
                open={open}
                onClose={handleCancel}
                aria-labelledby="modal-modal-title1"
                aria-describedby="modal-modal-description1"
            >
                <Box className='primary-modal' onClick={e => e.stopPropagation()}>
                    <Box sx={{ padding: "15px 20px", display: "flex", justifyContent: "space-between", boxShadow: "0px 0px 35px rgba(154, 161, 171, 0.15)", marginBottom: "25px" }}>
                        <Typography variant='h2'>
                            Manage Library
                        </Typography>
                        <CloseOutlined sx={{ color: "#7B8794", cursor: "pointer"}} onClick={handleCancel} />
                    </Box>
                    <CustomTabs
                        mapperObjProp={tabdata}
                        justifyContentTab="left"
                        paddingTab="0px 20px"
                        paddingPanel="20px 22px"
                        tabsWidth={"100%"}
                        tabsShadow={0}
                        tabsBorderRadius={0}
                        tabsContainerPadding={0}
                    />
                    <Box sx={{ padding: "20px 22px", filter: "drop-shadow(0px 0px 35px rgba(154, 161, 171, 0.15))", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
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
                                title="Save"
                                styleObj={{
                                    marginLeft: "10px"
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default ManageLibraryModal