import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {Button} from '../../../components'
import "./dataGrid.scss"

const DatasGrid = ({name=[],classes=[],items}) => {
  const columns = [
    { field: 'id', headerName: 'No', width: 90 },
    {
      field: 'fullname',
      headerName: 'Nama Pengguna',
      align:'center',
      headerAlign:'center',
      width: 250,
    },
    {
      field: 'email',
      headerName: 'Email',
      align:'center',
      headerAlign:'center',
      width: 250,
    },
    {
      field: 'password',
      headerName: 'Sandi',
      align:'center',
      headerAlign:'center',
      width: 130,
      sortable: false,
      renderCell: (params) => (
        <Button name={name[0]} className={classes[0]}/>
      ),
    },
    {
      field: 'action',
      headerName: 'Aksi',
      align:'center',
      headerAlign:'center',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 220,
      renderCell: (params) => (
        <div>
          <Button name={name[1]} className={classes[1]}/>
          <Button name={name[2]} className={classes[2]}/>
        </div>
      ),
    },
  ];

  // const rows = [
  //   { id: 1, name: 'Snow', email: 'Jon@gmail.com'},
  //   { id: 2, name: 'Lannister', email: 'Cersei@gmail.com'},
  //   { id: 3, name: 'Lannister', email: 'Jaime@gmail.com'},
  //   { id: 4, name: 'Stark', email: 'Arya@gmail.com'},
  //   { id: 5, name: 'Targaryen', email: 'Daenerys@gmail.com'},
  //   { id: 6, name: 'Melisandre', email: 'ladymelisandre@gmail.com'},
  //   { id: 7, name: 'Clifford', email: 'Ferrara@gmail.com'},
  //   { id: 8, name: 'Frances', email: 'Rossini@gmail.com'},
  //   { id: 9, name: 'Roxie', email: 'Harvey@gmail.com'},
  // ];
  return (
    <div style={{ height: 450, width: '100%' }}>
      <DataGrid
        components={{
          Toolbar: GridToolbar
        }}
        rows={items}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  )
}

export default DatasGrid
