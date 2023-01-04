import { Box, Typography } from '@mui/material'
import CustomButton from '../../Components/Common/CustomButton'
import React from 'react'
import { useSelector } from 'react-redux'

const FilterFooter = () => {
    
    const allRecords = useSelector(state => state.filter.allRecords)

    return (
        <Box sx={{ backgroundColor: "background.default", position: "absolute", bottom: "0", left: "0", width: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "10px 40px" }}>
                <Box sx={{ display: "flex", alignItems: "center", marginRight: "40px" }}>
                    <Typography variant='body2' sx={{ color: "text.secondary", marginRight: "4px" }}>
                        Result:
                    </Typography>
                    <Typography variant='subtitle2'>
                        {allRecords?.foundResults}/{allRecords?.totalDocuments}
                    </Typography>
                </Box>
                <CustomButton
                    title='Go to Review'
                    type="submit"
                    backgroundColor='#EEF2F7'
                    borderColor='#EEF2F7'
                    color='#9199B9'
                />
            </Box>
        </Box>
    )
}

export default FilterFooter
