import axios from "axios";
import "./Style.css";
import { useEffect, useState } from "react";
import excel from './Images/sheet.png';


function Annualday() {

  const [data,setData]=useState([]);
  const [students,setStudents]=useState([])
  const [sem,setSem]=useState("")
  

  
  const getData=()=>
  {
    axios.get("http://localhost:8000/getannualday")
    .then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  } 

  const handleDelete=(invoice_no)=>
    {
      const confirm=window.confirm("You want delete record of "+invoice_no)
      if (confirm)
      {
        axios.delete(`http://localhost:8000/deleteannualday/${invoice_no}`)
        .then((res)=>{
          window.location.reload();
          alert("Deleted successfully ✅ ");
        })
        .catch((err)=>{
          console.log(err)
        })
      }
      
    }

  const getStudents=()=>
    {
      axios.get("http://localhost:8000/")
      .then((res)=>{
        console.log(res.data)
        setStudents(res.data)
      })
      .catch((error)=>{
        console.log(error)
      })
    }

    const handleSem=()=>
    {
      const res=students.map(student=>student.stud_yoa)
      console.log(res)

    }


  useEffect(()=>{
    getData();

  },[10])

  useEffect(()=>
  {
    handleSem();
  },[students])
  
  return (
    <>
  <h1>Annual Day</h1>
  <div className="main-content-holder">
      <form className="form-inline my-2 my-lg-0">
      <select id="inputState" className="form-control">
        <option selected> SELECT SEMISTER</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select> 
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">🔍</button>
          <div className="cont">                 
              <a href="Registerannaulday" class="btn btn-success">Add record</a>
              <button type="button" class="btn btn-success"><img src={excel} alt="" style={{height:28}} /></button>
              
            </div>
      
    </form>
    {data.length>0 ?(
     <table class="table table-bordered table-striped ">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Invoice No</th>
      <th scope="col">Registration No</th>
      <th scope="col">Date</th>
      <th scope="col">Compitation Name</th>
      <th scope="col">Sem</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
  {data.map((index)=>(
    <tr key={index.student}>
      <th scope="row">{index.invoice_no}</th> 
      <th scope="row">{index.student}</th> 
      <td>{index.date}</td>
      <td>{index.compitation_name}</td>
      <td></td>
      <td><a href={`updateannualday/${index.invoice_no}`}  class="btn btn-success">🔄 </a> 
      <button type="button" onClick={()=>handleDelete(index.invoice_no)} class="btn btn-danger">🗑️ </button></td>

    </tr>
  ))}
  </tbody>
</table>
    ):
    <div className="alert alert-danger" role="alert">
    <h1>There is no data found</h1>

  </div>

}
    </div>
    </>
  )
}

export default Annualday