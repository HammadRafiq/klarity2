import { Box, Button, Checkbox, FormControlLabel, Modal, Typography } from '@mui/material'
import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import CustomButton from './CustomButton';
import CustomCheckbox from './CustomCheckbox';

const style = {
    position: "absolute",
    backgroundColor: "common.white",
    boxShadow: "inset 0px 0px 8px rgba(193, 227, 255, 0.47)",
    borderRadius: "8px",
    top: { lg: "50%", md: "50%", sm: "50%", xs: "50%" },
    left: { lg: "50%", md: "50%", sm: "50%", xs: "50%" },
    transform: "translate(-50%, -50%)",
    width: { lg: "700px", md: "700px", sm: "500px", xs: "320px" },
    padding: "20px"
};

const CommonDeleteModal = () => {
    const [open, setOpen] = useState(false)

    const showModal = () => {
        setOpen(false)
    }

    const handleCancel = () => {
        setOpen(false)
    }

    return (
        <Box>
            <Modal
                open={true}
                onClose={handleCancel}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant='h2'>
                        Delete
                    </Typography>
                    <Box sx={{ margin: "16px 0" }}>
                        <Typography variant='body3' color="primary.main">
                            Are you sure you want to delete this library?
                        </Typography>
                    </Box>
                    <Formik
                        initialValues={{
                            show: true
                        }}
                        onSubmit={values => console.log("values: ", values)}
                    >
                        {() => (
                            <Form>
                                <CustomCheckbox
                                    label="Don't show it again"
                                    name="show"
                                    styleObj={{
                                        color: "secondary.main",
                                        '&.Mui-checked': {
                                            color: "secondary.main",
                                        }
                                    }
                                    }
                                />
                                <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "40px" }}>
                                    <CustomButton
                                        title='Cancel'
                                        type="submit"
                                        backgroundColor='#FFF'
                                        borderColor='#C1C7D0'
                                        color='text.secondary'
                                        styleObj={{
                                            marginRight: "15px"
                                        }}
                                    />
                                    <CustomButton
                                        title='Delete'
                                        type="submit"
                                        backgroundColor='#E55E5E'
                                        borderColor='#E55E5E'
                                        color='common.white'
                                    />
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </Box>
    )
}

export default CommonDeleteModal
