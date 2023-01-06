import React, { useEffect } from 'react'
import { TextFieldWrapper } from '../Common/TextFieldWrapper'
import { Box, TextField, Typography } from "@mui/material";
import { ReactComponent as TrashIcon } from '../../Assets/trash-icon.svg'
import { ReactComponent as EditIcon } from '../../Assets/edit-icon.svg'
import CustomButton from '../Common/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';
import { GetMetaData, removeDetectedFilter, updateSearchQuery } from '../../Pages/Filter/filterSlice';

const FilterHeader = () => {
    const { libraryId } = useParams() // get libraryId from the URL
    const { getToken } = useAuthContext() // get authentication token from store
    const detectedFilters = useSelector(state => state.filter.detectedFilters) // get detectedFilters array of the header from redux store
    const topSearchQuery = useSelector(state => state.filter.topSearchQuery) // get global search query of the header from redux store
    const dispatch = useDispatch()

    const handleKeyDown = (e) => { // Function to be called as soon as user presses some character into the global search field in the header of the Filter screen
        if (e.key === "Enter") { // Proceed only if the pressed key is "Enter" as we only call the `dashboard/getTableData` API with payload "countOnly: 1" when user presses enter
            dispatch(updateSearchQuery(e.target.value)) // Save the entered search query into the redux store as it is also required into other components
            dispatch(GetMetaData({ // Call the `dashboard/getTableData` API when user presses enter to get foundResults and totalDocuments to show in the footer of the screen
                libraryId: libraryId,
                query: e.target.value,
                token: getToken(),
                detectedFilters: detectedFilters
            }))
        }
    }

    useEffect(() => { // if detectedFilters array updates (when user enters a table term or deletes one), call the `dashboard/getTableData` API again with updated value of detectedFilters array
        dispatch(GetMetaData({
            libraryId: libraryId,
            query: topSearchQuery,
            token: getToken(),
            detectedFilters: detectedFilters
        }))
    }, [detectedFilters])


    return (
        <Box sx={{ padding: "3px 30px", backgroundColor: "common.white", borderLeft: "1px solid", borderLeftColor: "#DEE2E6", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0px 2px 12px rgba(154, 161, 171, 0.15)" }}>
            <Box sx={{ display: "flex", alignItems: "center", flex: 1, marginRight: "100px" }}>

                {/* The global search input field being rendered in top left of Filter screen  */}
                <TextField 
                    variant='standard'
                    InputProps={{
                        disableUnderline: true,
                        sx: {
                            border: "1px solid #CED4DA",
                            borderRadius: "4px",
                            padding: "5px 15px",
                            fontSize: "14px",
                            color: "text.secondary",
                            width: "auto",
                            fontWeight: 400,
                            marginBottom: "9px",
                            mt: 1
                        }
                    }}
                    name='first'
                    placeholder='Search'
                    type="text"
                    onKeyDown={handleKeyDown}
                />

                <Box sx={{ border: "1px solid", borderColor: "#CED4DA", borderRadius: "4px", minHeight: "32px", flex: 1, marginLeft: "10px", padding: "4px 15px" }} >                    
                    {/* if detectedFilters array is empty then show "Select filters from the table" message in the field else show the detectedFilters in the field */}
                    {detectedFilters?.length > 0 ?
                        <Box sx={{ display: "flex" }}>
                            {detectedFilters?.map(term => (
                                <Typography variant="body3" sx={{ backgroundColor: "rgba(45, 97, 247, 0.08)", padding: "3px 6px", marginRight: "5px", fontSize: "12px", cursor: "pointer", color: "text.primary" }} onClick={() => dispatch(removeDetectedFilter(term))}>
                                    {term?.split('#')[1]}
                                </Typography>
                            ))}
                        </Box> :
                        <Typography variant='body3' sx={{ padding: "2px 0" }}>
                            Select filters from the table
                        </Typography>
                    }
                </Box>
            </Box>
            
            {/* The Trash Icon and Edit Icon being rendered in the top right of the Filter screen */}
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
