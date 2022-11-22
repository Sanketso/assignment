//import { doc } from 'firebase/firestore';
import React, { useEffect,useState } from 'react';
//import {Button} from "react-bootstrap";
import StudentDataService from '../Services/Student';
//import Table from 'react-bootstrap';
import {Button, Table} from 'react-bootstrap';
//import { async } from '@firebase/util';
//import {useEffect,useState} from "react";


const StudentTable=()=> {
    const[Students,setStudents]=useState([]);

  useEffect(()=>{
      getStudents();
  },[]);

  const getStudents= async()=>{
    const data =await StudentDataService.getAllStudents();
    console.log(data.docs)
    setStudents(data.docs.map((doc)=>({...doc.data(),Name:doc.Name})))
  };

  const deleteHandler= async(Name)=>{
    await StudentDataService.deleteStudents(Name)
    getStudents();
  }
  return (
    <div>
      <div className='mb-2'>
      <Button variant='primary' onClick={getStudents}>list</Button>
      </div>

      {/* <pre>{JSON.stringify(Students,undefined,2)}</pre> */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
              <th> Date of birth</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Fileuploadability</th>
               <th>Email </th>
               <th>Contactno</th>
          </tr>
        </thead>
        <tbody>
          { Students.map((doc,index)=>{
            return(
              <tr key={doc.Name}>
              <td>{doc.Name}</td>
              <td>{doc.Dateofbirth}</td>
              <td>{doc.Gender}</td>
              <td>{doc.Address}</td>
              <td>{doc.Fileuploadability}</td>
              <td>{doc.Email}</td>
              <td>{doc.Contactno}</td>
              <td><Button variant='secondary' className='edit' 
              // onClick={(e)=>getStudentsname(doc.name)}
              >
                Edit</Button></td>
              <td><Button variant='danger' className='delete' onClick={(e)=>deleteHandler(doc.name)}>
                Delete</Button></td>
              </tr>
            )
          })}
          
        </tbody>
      </Table>
    </div>
  )
}

export default StudentTable;