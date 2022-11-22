import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useState} from 'react';
import {Alert,Button,ButtonGroup} from "react-bootstrap";
import StudentDataService from '../Services/Student';

function AddStudent() {
  const [Name,setName]=useState("");
  const [Dateofbirth,setdateofbirth]=useState("");
  const [Gender,setGender]=useState("");
  const [Address,setAddress]=useState("");
  const [Fileuploadability,setFileuploadability]=useState("");
  const [Email,setEmail]=useState("");
  const [Contantno,setContantno]=useState("");
  const [Message,setMessage]= useState({error:false,msg:""});

  const handleSubmit= async(e)=>{
   e.preventDefault();
   setMessage("");
     if(Name ==="" ||Dateofbirth===""){
      setMessage({ error:true,msg:"All fields are mandatory!"})
      return;
     }
     const newStudent={
   Name,
   Dateofbirth,
   Gender,
   Address,
   Fileuploadability,
   Email,
   Contantno,
     }
     console.log(newStudent)

     try{
      await StudentDataService.addnewStudents(newStudent)
      setMessage({ error:false,msg:"New Books Added SuccessFully"});
     }catch(err){
      setMessage({ error:true,msg:err.Message})
     }
     setName("");
     setdateofbirth("");
  };

  return (
    <div>
      {Message?.msg &&(<Alert varient={Message?.error? "danger":"success"} dismissible
      onClose={()=>setMessage("")}>
      {Message?.msg}
      </Alert>
      )}
        <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Name"
          aria-label="name"
          aria-describedby="basic-addon1"
          onChange={ (e)=>setName(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Dateofbirth"
          aria-label="Dateofbirth"
          aria-describedby="basic-addon2"
          onChange={ (e)=>setdateofbirth(e.target.value)}
        />
        {/* <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text> */}
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Gender"
          aria-label="Gender"
          aria-describedby="basic-addon1"
          onChange={ (e)=>setGender(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Address"
          aria-label="Address"
          aria-describedby="basic-addon1"
          onChange={ (e)=>setAddress(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Fileuploadability"
          aria-label="fileuploadability"
          aria-describedby="basic-addon1"
          onChange={ (e)=>setFileuploadability(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
          onChange={ (e)=>setEmail(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Contantno"
          aria-label="Contantno"
          aria-describedby="basic-addon1"
          onChange={ (e)=>setContantno(e.target.value)}
        />
      </InputGroup>
      {/* <Button variant='primary' type='Submit'>Add</Button> */}
      </Form>
    </div>
    
  )
}

export default AddStudent