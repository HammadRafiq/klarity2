import { CloseOutlined } from '@mui/icons-material'
import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import { CustomTabs } from '../Common/CustomTabs'

const tabdata = [
    {
        label: "Application With DBS Result",
        content: <div>I am tab 1 content</div>,
    },
    {
        label: "Erased Applications",
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
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='primary-modal' onClick={e => e.stopPropagation()}>
                    <Box sx={{ padding: "15px 20px", display: "flex", justifyContent: "space-between", boxShadow: "0px 0px 35px rgba(154, 161, 171, 0.15)", marginBottom: "25px" }}>
                        <Typography variant='h2'>
                            Manage Library
                        </Typography>
                        <CloseOutlined sx={{ color: "#7B8794" }} />
                    </Box>
                    <CustomTabs
                        mapperObjProp={tabdata}
                        justifyContentTab="left"
                        paddingTab="0px 10px"
                        paddingPanel="10px 22px"
                        tabsWidth={"100%"}
                        tabsShadow={0}
                        tabsBorderRadius={0}
                        tabsContainerPadding={0}
                    />
                </Box>
            </Modal>
        </Box>
    )
}

export default ManageLibraryModal
