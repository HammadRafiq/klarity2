import React from 'react'
import { TextFieldWrapper } from '../Common/TextFieldWrapper'
import { Box, Typography } from "@mui/material";
import { ReactComponent as TrashIcon } from '../../Assets/trash-icon.svg'
import { ReactComponent as EditIcon } from '../../Assets/edit-icon.svg'
import CustomButton from '../Common/CustomButton';

const filters = ["john", "david", "majid"]

const FilterHeader = () => {
    return (
        <Box sx={{ padding: "3px 30px", backgroundColor: "common.white", borderLeft: "1px solid", borderLeftColor: "#DEE2E6", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0px 2px 12px rgba(154, 161, 171, 0.15)" }}>
            <Box sx={{ display: "flex", alignItems: "center", flex: 1, marginRight: "100px" }}>
                <TextFieldWrapper
                    name="globalSearch"
                    placeholder="Search"
                    marginBottom='9px'
                />
                <Box sx={{ border: "1px solid", borderColor: "#CED4DA", borderRadius: "4px", minHeight: "32px", flex: 1, marginLeft: "10px", padding: "4px 15px" }} >
                    {filters?.length > 0 ?
                        <Box sx={{display: "flex"}}>
                            {filters?.map(filter => (
                                <Typography variant="body3" sx={{backgroundColor: "rgba(45, 97, 247, 0.08)", padding: "3px 6px", marginRight: "5px", fontSize: "12px", cursor: "pointer", color: "text.primary"}}>
                                    {filter}
                                </Typography>
                            ))}
                        </Box> :
                        <Typography variant='body3' sx={{padding: "2px 0"}}>
                            Select filters from the table
                        </Typography>
                    }
                </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ padding: "5px 8px", border: "1px solid", borderColor: "#CED4DA", borderRadius: "4px", marginRight: "10px" }}>
                    <TrashIcon width={13} height={13} />
                </Box>
                <Box sx={{ padding: "5px 8px", border: "1px solid", borderColor: "#CED4DA", borderRadius: "4px", marginRight: "10px" }}>
                    <EditIcon width={13} height={13} />
                </Box>
                <CustomButton
                    title='Add Table'
                    height='30px'
                />
            </Box>
        </Box>
    )
}

export default FilterHeader
