import React, { useMemo, useState } from "react";
import Card from "@mui/material/Card";
import CustomTable from "../Filter/CustomTable";
import { apiGetRequest, apiPostRequest } from "../../Helpers";
import { endpoints } from "../../Config/endpoints";
import { useTableData } from "../../Hooks/useTableData";

const EntityTable = () => {

    const columns = React.useMemo(
        () => [
            //Geeting Dynamic Data From Mock Data
            {
                accessorFn: (row) => row.term,
                id: "term",
                cell: (info) => info.getValue(),
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
            library: "4c054a0b-714f-49dc-b7ed-204305f4b542",
            tableSearchTerm: "",
            entityType: "COM"
        }
        return apiPostRequest(
            endpoints.getTableData,
            data
        )
    }

    const querydata = useMemo(() => {
        return {
            key: "mytable",
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
