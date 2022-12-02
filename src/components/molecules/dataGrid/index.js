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
