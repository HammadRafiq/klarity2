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
    const {
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

    const handleSortBy = (column) => {
        setSortBy(column);
        setSort((previous) => (previous === 1 ? -1 : 1));
    };

    const table = useReactTable({
        data: data ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    if (isLoading) return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: 195, padding: "0 30px" }}>
            <Box sx={{ flex: 1 }} >
                <Skeleton height={30} animation="wave" />
                <Skeleton height={30} animation="wave" />
                <Skeleton height={30} animation="wave" />
                <Skeleton height={30} animation="wave" />
            </Box>
        </Box>
    )

    return (
        <Grid container>
            <Grid xs={12} item>
                <Box>
                    <Box sx={{ overflowX: "auto" }}>
                        <TableContainer
                            sx={{
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
                            {(isError || table.getRowModel().rows.length === 0) && (
                                // <Grid
                                //     container
                                //     alignItems={"center"}
                                //     justifyContent={"center"}
                                //     padding={5}
                                // >
                                //     <Grid item>
                                //         <Box width={200}>
                                //             <NoContentFound /><br/>
                                //             No content found
                                //         </Box>
                                //     </Grid>
                                // </Grid>
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "40px"}}>
                                    <Box sx={{textAlign: "center"}}>
                                        <Box>
                                            <NoContentFound />
                                        </Box>
                                        <Typography variant="body1" sx={{marginTop: "8px"}}>
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
                                            {limit * (currentPage - 1) + 1}-{currentPage === count ?
                                                (limit * (currentPage - 1) + res?.recordsFiltered) : (limit * currentPage)}/{res?.recordsTotal}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ marginLeft: "auto" }}>
                                        {/* <Pagination
                                            sx={{
                                                ".Mui-selected": {
                                                    backgroundColor: "#19456A !important",
                                                    color: "background.default",
                                                },
                                            }}
                                            showFirstButton
                                            showLastButton
                                            size="small"
                                            variant="outlined"
                                            shape="rounded"
                                            count={count}
                                            page={currentPage}
                                            onChange={(e, page) => {
                                                console.log("page: ", page)
                                                setCurrentPage(page);
                                            }}
                                        /> */}
                                        <div className="flex items-center gap-2">
                                            <CustomButton
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
                                            <CustomButton
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
                                            <CustomButton
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
                                            <CustomButton
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
