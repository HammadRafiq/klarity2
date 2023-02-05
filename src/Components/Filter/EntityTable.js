import React, { useMemo, useState } from "react";
import Card from "@mui/material/Card";
import CustomTable from "../Filter/CustomTable";
import { apiPostRequest } from "../../Helpers";
import { endpoints } from "../../Config/endpoints";
import { useTableData } from "../../Hooks/useTableData";
import { Box } from "@mui/material";
import { addDetectedFilter } from "../../Pages/Filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";


const EntityTable = ({ libraryId, item, className }) => {
    const dispatch = useDispatch()
    const detectedFilters = useSelector(state => state.filter.detectedFilters) // Get the detectedFilters array from the store so that it can be used in the payload while calling "dashboard/getTableData" API

    const columns = React.useMemo( // columns array that will be passed to Tan stack table
        () => [
            {
                accessorFn: (row) => row.term,
                id: "term",
                cell: (info) => (
                    <Box sx={{ cursor: "pointer" }} onClick={() => dispatch(addDetectedFilter({ // If user clicks on the term of the table, add that term to the detectedFilters array
                        term: info.getValue(),
                        entityType: item?.shortCut
                    }))}
                    >
                        {info.getValue()}
                    </Box>
                ),
                header: () => <div>Name</div>,
            },
            {
                accessorFn: (row) => row.docCount,
                id: "docCount",
                cell: (info) => info.getValue(),
                header: () => <div>Document</div>,
            },
            {
                accessorFn: (row) => row.graph,
                id: "graph",
                cell: (info) => info.getValue(),
                header: () => <div>KG</div>,
            },
        ],
        []
    );

    const res = ({ limit, currentPage, ...rest }) => {
        let data = { // This is the payload of the "dashboard/getTableData" API
            maxResults: limit,
            page: currentPage,
            isOr: 0,
            library: libraryId,
            tableSearchTerm: "",
            entityType: item?.shortCut,
            detectedFilter: detectedFilters
        }
        return apiPostRequest( // "dashboard/getTableData" is being called here
            endpoints.getTableData,
            data
        )
    }

    const querydata = useMemo(() => {
        return {
            key: `filterTable-${item?.shortCut}`, // Unique id to distinguish tables from each other on Filter screen
            apiFunc: res, // res is the function defined above that contains API call logic. It is passed to useTableHook
        }
    }, [])

    const {
        data,
        isError,
        isSuccess,
        isLoading,
        // refetch,
        limit,
        filter,
        currentPage,
        setFilter,
        setCurrentPage,
        setLimit,
        setSortBy,
        setSort,
    } = useTableData(querydata) // Calling the useTableData hook here that deals with the pagination of the table i.e what should happen when prev/next icon (indicating next/previous page of the table) is clicked


    return (
        <CustomTable
            res={data?.data}
            data={data?.data?.data}
            columns={columns}
            isLoading={isLoading}
            isError={isError}
            isSuccess={isSuccess}
            count={Math.ceil(data?.data?.recordsTotal / limit)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setSortBy={setSortBy}
            setSort={setSort}
            limit={limit}
        />
    );
};

export default EntityTable
