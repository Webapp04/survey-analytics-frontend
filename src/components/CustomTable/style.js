import { TableCell, TableRow, tableCellClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TopBar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#dae1f3",
  padding: "20px",
  borderRadius: "5px 5px 0px 0px",
  "& div": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
