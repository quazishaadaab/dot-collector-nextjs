import React from "react";
import styles from "../../styles/datatable.module.scss"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import { userColumns, userRows } from "./datatablesource.js";

const Datatable = () => {

    // we create buttons like this(view,delete) buttons
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className={styles.datatable}>
      <DataGrid
        rows={userRows}
        // concat allows us to add another field .
        // we could also do concat row
        columns={userColumns.concat(actionColumn)}
        // pick how many rows you want to display
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default Datatable;
