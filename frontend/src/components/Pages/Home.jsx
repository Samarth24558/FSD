import "./Style.css";

import img from './Images/logo.png'
import clg from './Images/collage.jpeg'

import axios from "axios";
import { useEffect, useState } from "react";
import set from "./Settings";
const ContentMain = () => {
  
const [length,setLength]=useState([]);
const [students,setStudents]=useState([]);
const [ec,setEC]=useState("")
const [cs,setCS]=useState("")
const [ce,setCE]=useState("")




const getStudents=async()=>
{
  const res=await axios.get("http://localhost:8000/")
  setLength(res.data.length)
  setStudents(res.data)
}
useEffect(()=>
{
  getStudents();
},[10])

useEffect(()=>
{
  const ecStudents = students.filter(student => student.stud_branch === "EC");
  setEC(ecStudents.length);
},[students])

useEffect(()=>
  {
    const csStudents = students.filter(student => student.stud_branch === "CS");
    setCS(csStudents.length);
  },[students])

useEffect(()=>
{
  const ceStudents = students.filter(student => student.stud_branch === "CE");
  setCE(ceStudents.length);
},[students])

  return (
    <div className="subcount" style={{
      backgroundImage: `url(${clg})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw",
      opacity:1,

    }}
>
      
      <h1><img src={img} alt="logo" /> Nalanda Foundations Pollytechnic </h1>
      <div className="container">
      <div className="card" style={{maxWidth:"18rem"}}>
      <div className="card-body">
        <h2>Total Students</h2>
        <h4>{length}</h4>
      </div>
    </div>
    <div className="card" style={{maxWidth:"18rem"}}>
      <div className="card-body">        
        <h2>CS Students</h2>
        <h4>{cs}</h4>
      </div>
    </div>
    <div className="card" style={{maxWidth:"18rem"}}>
      <div className="card-body">
      <h2>EC Students</h2>
        <h4>{ec}</h4>
      </div>
    </div>
    <div className="card" style={{maxWidth:"18rem"}}>
      <div className="card-body">
        <h2>CE Students</h2>
        <h4>{ce}</h4>
      </div>
    </div>
    </div>
    </div>
  )
}

export default ContentMain