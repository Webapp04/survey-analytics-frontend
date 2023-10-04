import { Skeleton } from "@mui/material";
import { StyledTableCell } from "../style";

const TableDescription = ({ data, column, isLoading }) => {
  return (
    <>
      {column?.length > 0 ? (
        column.map((item) => (
          <StyledTableCell key={item.key}>
            {isLoading ? (
              <Skeleton variant="rounded" sx={{ fontSize: "2rem" }} />
            ) : item?.render ? (
              item?.render(data)
            ) : (
              data[item?.key]
            )}
          </StyledTableCell>
        ))
      ) : (
        <StyledTableCell>No Data</StyledTableCell>
      )}
    </>
  );
};

export default TableDescription;
