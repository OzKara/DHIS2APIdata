import React from "react";
import { useState } from "react";
import classes from "./App.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableCellHead,
  TableHead,
  TableRow,
  TableRowHead,
} from "@dhis2/ui";
function SingleDataset(props) {
  return (
    <>
      <div className={classes.table}>
        <Table>
          <TableHead>
            <TableRowHead>
              <TableCellHead>Display Name</TableCellHead>
              <TableCellHead>ID</TableCellHead>
              <TableCellHead>created</TableCellHead>
            </TableRowHead>
          </TableHead>
          <TableBody>
            <TableRow key={props.active.id}>
              <TableCell>{props.active.displayName}</TableCell>
              <TableCell>{props.active.id}</TableCell>
              <TableCell>{props.active.created}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default SingleDataset;