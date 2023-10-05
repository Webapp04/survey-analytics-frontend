import { Box, Table, TableBody, TableContainer } from "@mui/material";
import TableHeader from "./TableHeader";
import TablesRow from "./TablesRow";
import styled from "styled-components";

const TableBoxContainer = styled(Box)({
  width: "100%",
  margin: "10px 0",
  "& table": {
    borderRadius: "5px",
    overflow: "hidden",
  },
});

const CustomTable = ({ data, column, isLoading }) => {
  return (
    <TableBoxContainer>
      <TableContainer
        sx={{ boxShadow: "0px 4px 40px #2b59ff14", borderRadius: "5px" }}
      >
        <Table aria-label="customized table">
          <TableHeader column={column} />
          <TableBody>
            {data?.length > 0
              ? data?.map((item, index) => (
                  <TablesRow
                    key={index}
                    item={item}
                    column={column}
                    isLoading={isLoading}
                  />
                ))
              : "No Data"}
          </TableBody>
        </Table>
      </TableContainer>
    </TableBoxContainer>
  );
};

export default CustomTable;
