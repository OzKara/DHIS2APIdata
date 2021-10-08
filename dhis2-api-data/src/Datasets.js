import React from 'react';
import { useState } from "react";
import { useDataQuery } from '@dhis2/app-runtime';
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
} from '@dhis2/ui';

const dataQuery = {
    dataSets: {
        resource: 'dataSets',
        params: {
            fields: [
                'id', 
                'displayName', 
                'created',
                //dataSetElements[dataElement[id, displayName, created]
            ],
            paging: false,
        },
    },
}


export function Datasets() {
    const [table, setTable] = useState(false);
    const { loading, error, data } = useDataQuery(dataQuery);
  
    if (error) {
      return <span>ERROR: {error.message}</span>;
    }
  
    if (loading) {
      return <CircularLoader large />;
    }
  
    if (data) {
      console.log(data);
      console.log(data.dataSets.dataSets);
      return (
        <>
          <Menu>
            {data.dataSets.dataSets.map((row) => {
              return (
                <>
                  <div onClick={() => setTable((prev) => !prev)}>
                    {" "}
                    <MenuItem key={row.id} label={row.displayName}></MenuItem>
                  </div>
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
                </>
              );
            })}
          </Menu>
        </>
        
      );
    }
  }