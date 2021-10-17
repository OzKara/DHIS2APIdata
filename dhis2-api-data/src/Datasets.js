import React, { useState } from "react";

import { useDataQuery } from "@dhis2/app-runtime";
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
import SingleDataset from "./SingleDataset";
import classes from "./App.module.css";

const dataQuery = {
  dataSets: {
    resource: "dataSets",
    params: {
      fields: [
        "id",
        "displayName",
        "created",
        //dataSetElements[dataElement[id, displayName, created]
      ],
      paging: false,
    },
  },
};

export function Datasets() {
  const { loading, error, data } = useDataQuery(dataQuery);
  const [active, setActive] = useState(null);

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
        <div className={classes.datasetsContainer}>
          <div className={classes.menu}>
            <Menu>
              {data.dataSets.dataSets.map((row) => {
                return <MenuItem key={row.id} label={row.displayName} onClick={() => setActive(row)}></MenuItem>
              })}
            </Menu>
          </div>
          {active !== null && <SingleDataset active={active}/>}
        </div>
      </>
    );
  }
}