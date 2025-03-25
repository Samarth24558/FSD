import { useEffect, useState } from "react";
import "./Style.css";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import excel from './Images/sheet.png';
import sort from './Images/sort-az.png';
import clg from './Images/collage.jpeg'

import img from './Images/logo.png'


const ContentMain = () => {

  const [data,setData]=useState([]);
  const [message,setMessage]=	useState("")
  const [value,setValue]=useState("");
  const [sortType,setSort]=useState("");
  const year=new Date().getFullYear()

  const fetchData= async()=>
  {
    const res=await Axios.get("http://localhost:8000/")
    setData(res.data)

  }

  const navigate=useNavigate();

  const handleDelete=(stud_id)=>
    {
      const confirm=window.confirm("You want delete record of "+stud_id)
      if (confirm)
      {
        Axios.delete(`http://localhost:8000/deletestud/${stud_id}`)
        .then((res)=>{
          window.location.reload();
          setMessage("Deleted successfully ✅ ");
        })
        .catch((err)=>{
          console.log(err)
        })
      }
      
    }

  const setAlpha=async()=>
  {
    const res=await Axios.get("http://localhost:8000/setstud")
    setData(res.data);
  }

  const Export=async()=>
    {
      const currentYear = new Date().getFullYear();

    const extendData = data.map(student => ({
        ...student,
        age: currentYear - new Date(student.stud_dob).getFullYear(),
        yearStatus: (currentYear - student.stud_yoa) > 3 
                      ? "Completed" 
                      : (currentYear - student.stud_yoa)
    }));

      const res=await Axios.post("http://localhost:8000/converttoxl",extendData)
      .then((res)=>
      {
      
        setMessage(res.data.message)
        
      })
      
    }

  const handleSearch=(e)=>
  {
    e.preventDefault();
    console.log(sortType)
    if (sortType==="Full Name")
    {
      const res = data.filter(student => student.stud_name === value);
      console.log(res)
      setData(res);
    }

    else if (sortType==="Registration No.")
      {
        const res = data.filter(student => student.stud_id === value);
        console.log(res)
        setData(res);
      }    

  }

 

 
  useEffect(()=>
  {
    fetchData();

  },[10])

  setTimeout(()=>
    {
      setMessage("");
    },4000)

  

  




  return (
    <>

    <div className="main-content-holder" >
      <h1><img src={img} alt="logo" style={{height:"60px"}} /> Students Basic Details </h1> 
	{message && <div className="alert alert-success" role="alert"><h4>{message}</h4></div>}

      <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
        <div className="cont2">
      <select id="inputState" className="form-control" onChange={(e)=>setSort(e.target.value)}>
        <option selected> Sort By</option>
        <option >Registration No.</option>
        <option>Full Name</option>
      </select> 
      <input className="form-control mr-sm-2" type="search" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Search" aria-label="Search" required/>

      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">🔍</button>
      </div>

<div className="cont">
      <button type="button" class="btn btn-success" onClick={setAlpha}><img src={sort} style={{height:28}}  alt="" /></button>
      <button type="button" class="btn btn-success" onClick={Export}><img src={excel} style={{height:28}} alt="" /> </button>
  </div>
    </form>

    
    {data.length>0 ?(
     <table className="table table-bordered table-striped ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Registration No.</th>
      <th scope="col">Full Name</th>
      <th scope="col">DOB</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Location</th>
      <th scope="col">Contact</th>
      <th scope="col">Parents Contact</th>
      <th scope="col">Email ID</th>
      <th scope="col">Branch</th>
      <th scope="col">Year of admission</th>
      <th scope="col">Year</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
    {data.map((index)=>(
      <tr key={index.stud_id}>
      <th scope="row">{index.stud_id}</th>
      <td>{index.stud_name}</td>
      <td>{index.stud_dob}</td>
      <td>{year-new Date(index.stud_dob).getFullYear()}</td>
      <td>{index.stud_gender}</td>
      <td>{index.stud_location}</td>
      <td>{index.stud_contact}</td>
      <td>{index.stud_parentscontact}</td>
      <td>{index.stud_email}</td>
      <td>{index.stud_branch}</td>
      <td>{index.stud_yoa}</td>
      <td>{(year-index.stud_yoa)>3 ? "Completed" : (year-index.stud_yoa)}</td>  
      <td><a href={`Update_Stud/${index.stud_id}`}  className="btn btn-success">🔄 </a> 
      <button type="button" onClick={()=>handleDelete(index.stud_id)} className="btn btn-danger">🗑️</button></td>
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

export default ContentMain