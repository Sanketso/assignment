//import logo from './logo.svg';
//import './App.css';
//import React from "react";
import AddStudent from "./components/AddStudent";
import React,{useState} from "react";
//import Table from "./components/StudentTable";
import StudentTable from "./components/StudentTable";
//import {Bookslist,list} from 'react-bootstrap';

function App() {

  // const[studentName,setStudentName]=useState("");
  // const getHandleStudents =(name)=>{
  //   console.log("The ID of document to be edited:",name)
  //   setStudentName(name)
  
  return (
    <div className="App">
      <AddStudent />
       {/* <Table/>    */}
       <StudentTable/>
       {/* <container>
        <Row>
          <col>
          <Bookslist getStudentName={getHandleStudents} />
          </col>
        </Row>
       </container> */}
    </div>
  );
}

export default App;
