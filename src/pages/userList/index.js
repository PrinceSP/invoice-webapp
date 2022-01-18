import React from 'react'
import {TopBar,SideBar,Button} from '../../components'
import './user.scss'
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Nama Pengguna',
    width: 150,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: false,
  },
  {
    field: 'password',
    headerName: 'Sandi',
    width: 190,
    editable: false,
    renderCell: (params) => (
      <Button name="Reset" className="reset"/>
    ),
  },
  {
    field: 'action',
    headerName: 'Aksi',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 220,
    renderCell: (params) => (
      <div>
        <Button name="Delete" className="delete"/>
        <Button name="Details" className="details"/>
      </div>
    ),
  },
];

const rows = [
  { id: 1, name: 'Snow', email: 'Jon@gmail.com'},
  { id: 2, name: 'Lannister', email: 'Cersei@gmail.com'},
  { id: 3, name: 'Lannister', email: 'Jaime@gmail.com'},
  { id: 4, name: 'Stark', email: 'Arya@gmail.com'},
  { id: 5, name: 'Targaryen', email: 'Daenerys@gmail.com'},
  { id: 6, name: 'Melisandre', email: 'ladymelisandre@gmail.com'},
  { id: 7, name: 'Clifford', email: 'Ferrara@gmail.com'},
  { id: 8, name: 'Frances', email: 'Rossini@gmail.com'},
  { id: 9, name: 'Roxie', email: 'Harvey@gmail.com'},
];

const UserLists = (props) => {
  return (
    <div className="main-container">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar active="user"/>
        <div className="others">
          <div style={{ height: 400, width: '100%', marginTop:20 }}>
            <DataGridPro
              components={{
                Toolbar: GridToolbar,
              }}
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLists
