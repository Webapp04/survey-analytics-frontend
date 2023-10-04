import { TableRow } from "@mui/material";
import TableDescription from "../TableDescription";
import { StyledTableRow } from "../style";

const TablesRow = ({ item, column, isLoading }) => {
  return (
    <StyledTableRow>
      <TableDescription data={item} column={column} isLoading={isLoading} />
    </StyledTableRow>
  );
};

export default TablesRow;
