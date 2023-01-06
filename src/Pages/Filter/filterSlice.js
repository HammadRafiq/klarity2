import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { endpoints } from '../../Config/endpoints'
import { apiPostRequest } from '../../Helpers'

// This file deals with implementing Redux for the state management of Filter screen

const initialState = {
    detectedFilters: [],
    allRecords: {
        foundResults: 0,
        totalDocuments: 0
    },
    topSearchQuery: ""
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: { // When user clicks on some term of the table, it gets added to the keyword filters field. What if user clicks on the same term again? it wont make sense to add that same term again in the keyword filters again. The logic below in addDetectedFilter function makes sure that the clicked term of the table should only be added to keyword filters field if it doesn't already exist in that field.
        addDetectedFilter: (state, action) => { // When a user clicks on some term in the table, this function runs
            let itemExists = state.detectedFilters.find(item => item === `${action?.payload?.entityType}#${action?.payload?.term}`) // If the term of the table on which user has clicked exists already in the detectedFilters array or not
            if (!itemExists) // Only add the clicked term of the table to the detectedFilters array if that term doesn't already exist in the detectedFilters array.
                state.detectedFilters = [...state.detectedFilters, `${action?.payload?.entityType}#${action?.payload?.term}`]
        },
        removeDetectedFilter: (state, action) => { // When user clicks on some term that has been added in the keywords filter field, this function runs
            state.detectedFilters = state.detectedFilters.filter(item => item !== action.payload) // Remove the term from detectedFilters array when that term is clicked in the keyword filters input
        },
        updateAllRecords: (state, action) => {
            state.allRecords = action?.payload
        },
        updateSearchQuery: (state, action) => {
            state.topSearchQuery = action.payload
        }
    }
})

export const { addDetectedFilter, removeDetectedFilter, updateAllRecords, updateSearchQuery } = filterSlice.actions
export default filterSlice.reducer

export const GetMetaData = (obj) => async (dispatch) => { // Redux thunk to handle async API call
    const { libraryId, query, detectedFilters } = obj
    let payload = {
        "countOnly": 1, // important thing. changes the response. 
        "page": 1,
        "maxResults": 50,
        "isOr": 0,
        "library": libraryId,
        "tableSearchTerm": "",
        "searchTerms": query,
        "dateFrom": "",
        "dateTo": "",
        "detectedFilter": detectedFilters,
        "entityType": "",
        "searchField": ""
    }
    const { data } = await apiPostRequest(endpoints.getTableData, payload) // When "countOnly": 1 is provided in the payload of "dashboard/getTableData", it gives foundResults and totalDocuments in the response.
    dispatch(updateAllRecords(data))
}
