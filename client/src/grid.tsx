import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import React, { FC } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';
type Props = {
  n?: string
}
const DataGrid:FC<Props> = (n) => {
  const colDefs = [
    { headerName: "Make", field: "make", sortable: true, filter: true, cellStyle: {color: 'red'}, editable: true, },
    { headerName: "Model", field: "model", sortable: true, filter: true, cellStyle: {color: 'red'} },
    { headerName: "Price", field: "price", sortable: true, filter: true, cellStyle: {color: 'red'}}
  ]
  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ]
    return (
      <div>
      <div className="ag-theme-balham" style={ {height: '200px', width: '600px'} }>
      <AgGridReact
          columnDefs={colDefs}
          rowData={rowData}>
      </AgGridReact>
    </div>
     <Icon name="times" color="red" />
     <Icon name="pencil" />
     </div>
    )
  }
  export default DataGrid