import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { endpoints } from '../../Config/endpoints'
import { apiPostRequest } from '../../Helpers'

const initialState = {
    detectedFilters: [],
    allRecords: {},
    topSearchQuery: ""
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addDetectedFilter: (state, action) => {
            let itemExists = state.detectedFilters.find(item => item === `${action?.payload?.entityType}#${action?.payload?.term}`) // "LOC#Germany" === "PER#Vladimir"
            if (!itemExists)
                state.detectedFilters = [...state.detectedFilters, `${action?.payload?.entityType}#${action?.payload?.term}`]
        },
        removeDetectedFilter: (state, action) => {
            state.detectedFilters = state.detectedFilters.filter(item => item !== action.payload)
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

export const GetMetaData = (obj) => async (dispatch) => {
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
    const { data } = await apiPostRequest(endpoints.getTableData, payload)
    dispatch(updateAllRecords(data))

    // axios({
    //     method: 'post',
    //     url: `${URL.domain}/rest/api/dashboard/getTableData`,
    //     data: {
    //         "countOnly": 1, // important thing. changes the response. 
    //         "page": 1,
    //         "maxResults": 50,
    //         "isOr": 0,
    //         "library": libraryId,
    //         "tableSearchTerm": "",
    //         "searchTerms": query,
    //         "dateFrom": "",
    //         "dateTo": "",
    //         "detectedFilter": detectedFilters,
    //         "entityType": "",
    //         "searchField": ""
    //     },
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     }
    // }).then(response => {
    //     dispatch(updateAllRecords(response?.data))
    // })
}
