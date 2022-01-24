import React from 'react'
import Table from '../table'
import TableHeader from '../tableHeader'
import "./newnotes.scss"

const NewNotes = (props) => {
  return (
    <div className="newNote-container">
      <h3>Nota Terbaru</h3>
      <Table name="Dinda Gledis Mamahit" approval="Lunas">
        <TableHeader/>
      </Table>
      <Table name="Dinda Gledis Mamahit" approval="Lunas"/>
      <Table name="Dinda Gledis Mamahit" approval="Lunas"/>
      <Table name="Dinda Gledis Mamahit" approval="Lunas"/>
    </div>
  )
}

export default NewNotes
