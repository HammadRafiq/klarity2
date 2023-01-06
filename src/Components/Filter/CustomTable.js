import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { Grid, Skeleton, styled, Typography } from "@mui/material";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Box } from "@mui/system";
import SpinLoader from "../../Assets/spin-gif.gif";
import { ReactComponent as ChevronLeft } from '../../Assets/chevron-left.svg'
import { ReactComponent as ChevronRight } from '../../Assets/chevron-right.svg'
import { ReactComponent as ChevronDoubleLeft } from '../../Assets/chevron-double-left.svg'
import { ReactComponent as ChevronDoubleRight } from '../../Assets/chevron-double-right.svg'
import { ReactComponent as NoContentFound } from "../../Assets/no-content-found.svg";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import CustomButton from "../Common/CustomButton";


const CustomTable = (props) => {
    const { // Destructuring the props being passed to CustomTable component
        columns,
        data,
        isLoading,
        isError,
        isSuccess,
        count,
        currentPage,
        setCurrentPage,
        setSortBy,
        setSort,
        limit,
        res
    } = props;

    const table = useReactTable({ // default configurations provided by TanStack table
        data: data ?? [], // if data comes from backend, use that to populate table else simply pass empty array to the table. 
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    if (isLoading) return ( // if API is called and server hasn't yet responded, show the skeleton/spinner on frontend for better user experience
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: 195, padding: "0 30px" }}>
            <Box sx={{ flex: 1 }} >
                <Skeleton height={30} animation="wave" />
                <Skeleton height={30} animation="wave" />
                <Skeleton height={30} animation="wave" />
                <Skeleton height={30} animation="wave" />
            </Box>
        </Box>
    )

    return ( // If API is called and API has successfully provided with the response (success or error) then below code runs
        <Grid container>
            <Grid xs={12} item>
                <Box>
                    <Box sx={{ overflowX: "auto" }}>
                        <TableContainer
                            sx={{ // CSS used to apply scrollbar on the table
                                "&::-webkit-scrollbar": {
                                    width: 5,
                                    height: 6,
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    backgroundColor: "#DEE2E6",
                                    borderRadius: 2,
                                },
                                maxHeight: 160,
                            }}
                        >
                            <Table stickyHeader aria-label="sticky table">
                                {/* TABLE HEADER STARTS HERE  */}
                                <TableHead>
                                    {table.getHeaderGroups().map((headerGroup) => (
                                        <TableRow key={headerGroup.id}>
                                            {headerGroup.headers.map((header) => (
                                                <TableCell key={header.id} sx={{ padding: "3px 15px", borderBottom: "2px solid #DEE2E6" }} >
                                                    <Typography variant="body1" sx={{ color: "text.secondary", textTransform: "uppercase" }}>
                                                        {header.isPlaceholder
                                                            ? null
                                                            : flexRender(
                                                                header.column.columnDef.header,
                                                                header.getContext()
                                                            )}
                                                    </Typography>
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableHead>
                                {/* TABLE HEADER ENDS HERE  */}

                                {/* Only show table body if API returns data successfully*/}
                                {isSuccess && table.getRowModel().rows.length > 0 && (
                                    <TableBody>
                                        {table.getRowModel().rows?.map((row) => (
                                            <TableRow key={row?.id}>
                                                {row.getVisibleCells().map((cell) => (
                                                    <TableCell key={cell?.id} sx={{ borderBottom: "none", padding: "3px 15px" }}>
                                                        <Typography variant="body1">
                                                            {flexRender(
                                                                cell.column.columnDef.cell,
                                                                cell.getContext()
                                                            )}
                                                        </Typography>
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                )}
                            </Table>

                            {/* In case API throws an error or no API returns no data in the response, show no content found UI */}
                            {(isError || table.getRowModel().rows.length === 0) && (
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "40px" }}>
                                    <Box sx={{ textAlign: "center" }}>
                                        <Box>
                                            <NoContentFound />
                                        </Box>
                                        <Typography variant="body1" sx={{ marginTop: "8px" }}>
                                            No data available in table
                                        </Typography>
                                    </Box>
                                </Box>
                            )}
                        </TableContainer>
                    </Box>
                    <Grid container boxShadow="0px 0px 35px rgba(154, 161, 171, 0.15)">
                        <Grid xs={12} item>
                            {isSuccess && Boolean(table?.getRowModel()?.rows?.length) && (
                                <Box sx={{ display: "flex", my: "10px", px: "15px" }}>
                                    <Box>
                                        <Typography
                                            variant="body2"
                                        >
                                            {/* The following logic deals with showing the currently navigated entries and the total entries of the table i.e 101/150 entries */}
                                            {limit * (currentPage - 1) + 1}-{currentPage === count ?
                                                (limit * (currentPage - 1) + res?.recordsFiltered) : (limit * currentPage)}/{res?.recordsTotal}
                                        </Typography>
                                    </Box>

                                    {/* TABLE PAGINATION LOGIC STARTS HERE */}
                                    <Box sx={{ marginLeft: "auto" }}>
                                        <div className="flex items-center gap-2">
                                            <CustomButton // Used to display Double Chevron Left icon. If clicked navigate the table to first page
                                                padding="0"
                                                minWidth="auto"
                                                height="auto"
                                                backgroundColor="background.default"
                                                border="none"
                                                disabledStyle={{
                                                    svg: {
                                                        opacity: 0.5
                                                    }
                                                }}
                                                title={<ChevronDoubleLeft />}
                                                onClick={() => setCurrentPage(1)}
                                                disabled={currentPage === 1}
                                            />
                                            <CustomButton // Used to display Chevron Left icon. If clicked navigate the table to previous page
                                                padding="0 5px"
                                                minWidth="auto"
                                                height="auto"
                                                backgroundColor="background.default"
                                                border="none"
                                                title={<ChevronLeft />}
                                                onClick={() => setCurrentPage(prev => prev - 1)}
                                                disabled={currentPage === 1}
                                                disabledStyle={{
                                                    svg: {
                                                        opacity: 0.5
                                                    }
                                                }}
                                            />
                                            <CustomButton // Used to Chevron Right icon. If clicked navigate the table to next page
                                                padding="0 5px"
                                                minWidth="auto"
                                                height="auto"
                                                backgroundColor="background.default"
                                                border="none"
                                                disabledStyle={{
                                                    svg: {
                                                        opacity: 0.5
                                                    }
                                                }}
                                                title={<ChevronRight />}
                                                onClick={() => setCurrentPage(prev => prev + 1)}
                                                disabled={currentPage === count}
                                            />
                                            <CustomButton // Used to display Double Chevron Right icon. If clicked navigate the table to the last page of the table
                                                padding="0"
                                                minWidth="auto"
                                                height="auto"
                                                backgroundColor="background.default"
                                                border="none"
                                                disabledStyle={{
                                                    svg: {
                                                        opacity: 0.5
                                                    }
                                                }}
                                                title={<ChevronDoubleRight />}
                                                onClick={() => setCurrentPage(count)}
                                                disabled={currentPage === count}
                                            />
                                        </div>
                                    </Box>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
};

export default CustomTable
