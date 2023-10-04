import { TableCell, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "../style";

const TableHeader = ({ column }) => {
  return (
    <TableHead>
      <TableRow>
        {column?.length > 0 &&
          column?.map((header) => (
            <StyledTableCell key={header.key}>{header.title}</StyledTableCell>
          ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
