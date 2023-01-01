import React, { useMemo, useState } from "react";
import Card from "@mui/material/Card";
import CustomTable from "../Filter/CustomTable";
import { apiGetRequest, apiPostRequest } from "../../Helpers";
import { endpoints } from "../../Config/endpoints";
import { useTableData } from "../../Hooks/useTableData";
import { Box } from "@mui/material";
import { addDetectedFilter } from "../../Pages/Filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const EntityTable = ({ libraryId, item, className }) => {

    const dispatch = useDispatch()
    const detectedFilters = useSelector(state => state.filter.detectedFilters)

    const columns = React.useMemo(
        () => [
            {
                accessorFn: (row) => row.term,
                id: "term",
                cell: (info) => (
                    <Box sx={{ cursor: "pointer" }} onClick={() => dispatch(addDetectedFilter({
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
        let data = {
            maxResults: limit,
            page: currentPage,
            isOr: 0,
            library: libraryId,
            tableSearchTerm: "",
            entityType: item?.shortCut,
            detectedFilter: detectedFilters
        }
        return apiPostRequest(
            endpoints.getTableData,
            data
        )
    }

    const querydata = useMemo(() => {
        return {
            key: `filterTable-${item?.shortCut}`,
            apiFunc: res,
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
    } = useTableData(querydata)


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
