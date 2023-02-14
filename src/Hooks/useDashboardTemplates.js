import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { endpoints } from 'Config/endpoints'
import { apiGetRequest } from 'Helpers'
import { useQuery } from '@tanstack/react-query'

const useDashboardTemplates = (props) => {
    const { libraryId } = useParams()

    // START: REACT QUERY //
    const getDashboardTemplates1 = () => apiGetRequest(`${endpoints.dashboardTemplates}/${libraryId}/`)

    const { data, isLoading, error } = useQuery({
        queryKey: ["dashboardTemplates", libraryId],
        queryFn: () => getDashboardTemplates1(),
        staleTime: Infinity,
        keepPreviousData: false
    })

    return {
        dashboardTemplates: data?.data ?? [],
        isLoading,
    }
}

export default useDashboardTemplates
