import { useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useSelector } from "react-redux";
/////////////////////////////gettable data function//////////////////////////////////////////
export const useTableData = ({ apiFunc, key }) => {
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sort, setSort] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(50);

  const detectedFilters = useSelector(state => state.filter.detectedFilters)

  // filter is used as a global filter.current page is used as a page state and limit is used as limit
  const payload = {
    offset: (currentPage - 1) * limit,
    limit: limit,
    searchTerm: filter,
    sortby: sortBy,
    sort: sort,
    currentPage: currentPage
  };

  // Calling the API to get table data and the respective statuses from backend
  const { data, isError, isSuccess, isLoading, refetch } = useQuery({
    queryKey: [`${key}`, currentPage, limit, filter, sortBy, sort, detectedFilters],
    queryFn: () => apiFunc(payload),
    keepPreviousData: true,
    staleTime: Infinity
  });

  // Return the stateful data to be used in the individual components of the multiple tables
  return {
    data,
    isError,
    isSuccess,
    isLoading,
    refetch,
    sort,
    sortBy,
    limit,
    filter,
    currentPage,
    setFilter,
    setCurrentPage,
    setLimit,
    setSortBy,
    setSort,
  };
};

/////////////////////////////gettable data function//////////////////////////////////////////
export const ChangeTableData = (props) => { // Not yet needed. not implemented yet. 
  return useMutation(props);
};