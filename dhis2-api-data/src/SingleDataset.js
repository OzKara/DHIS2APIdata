import React from "react";
import { useState } from "react";
import classes from "./App.module.css";
import {
  CircularLoader,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableCellHead,
  TableHead,
  TableRow,
  TableRowHead,
} from "@dhis2/ui";
const SingleDataset = ({ row }) => {
  const [table, setTable] = useState(false);
  return (
    <>
      <div onClick={() => setTable((prev) => !prev)}>
        {" "}
        <MenuItem key={row.id} label={row.displayName}></MenuItem>
      </div>
      <div className={classes.table}>
      {table && (
        <Table>
          <TableHead>
            <TableRowHead>
              <TableCellHead>Display Name</TableCellHead>
              <TableCellHead>ID</TableCellHead>
              <TableCellHead>created</TableCellHead>
            </TableRowHead>
          </TableHead>
          <TableBody>
            <TableRow key={row.id}>
              <TableCell>{row.displayName}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.created}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
      </div>
    </>
  );
};
export default SingleDataset;