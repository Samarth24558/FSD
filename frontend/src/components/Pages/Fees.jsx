import "./Style.css";
import React,{useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import excel from './Images/sheet.png';



const Fees = () => {

  const [data,setData]=useState([]);
  const [stud,setStud]=useState([])
  const [value,setValue]=useState("");

  const navigate=useNavigate()

  const date=new Date().getDate()
  const month=new Date().getMonth()
  const year=new Date().getFullYear()
  
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];


  const getData= async()=>
  {
    const res=await axios.get("http://localhost:8000/fees")
    setData(res.data)
  }

  const getStud= async()=>
    {
      const res=await axios.get("http://localhost:8000/")
      setStud(res.data)
    }

    const handleDelete=(stud)=>
      {
        const confirm=window.confirm("You want delete record of "+stud)
        if (confirm)
        {
          axios.delete(`http://localhost:8000/deletefees/${stud}`)
          alert("Fees details deleted successfully ✅")
          window.location.reload();
        }
        
      }

      const handleSearch=(e)=>
        {
          e.preventDefault();
          const res = data.filter(student => student.stud === value);
          setData(res);
        }

  useEffect(()=>
  {
    getData();
  },[10])


  useEffect(()=>
    {
      getStud();
    },[10])



  return (
    <div className="main-content-holder">
      <h1>Students Fees Details</h1>
     
      <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
      <input className="form-control mr-sm-2" type="search" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">🔍</button>
      <div className="cont">
            <a href="/RegisterFees" class="btn btn-success" >Add recorde</a>
            <button type="button    " class="btn btn-success"><img src={excel} alt="" style={{height:28}} /></button>
        </div>
    </form>
    {data.length>0 ?(
     <table className="table table-bordered table-striped ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Invoice No.</th>
      <th scope="col">Registration No.</th>
      <th scope="col">Total Fees (₹)</th>
      <th scope="col">Fees Paid (₹)</th>
      <th scope="col">Balance Fees (₹)</th>
      <th scope="col">Paid Date</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
      {data.map((index)=>(
    <tr key={index.stud} className={index.total_fees-index.fees_paid  !==0 ?  "bg-danger" : ""}>   
      <th scope="row">{index.invoice_no}</th>
      <th scope="row">{index.stud}</th>
      <td>{index.total_fees}</td>
      <td>{index.fees_paid}</td>
      <td>{index.total_fees-index.fees_paid}</td>
      <td>{index.paid_date}</td>
      <td><a href={`feesinvoice/${index.invoice_no}`}  className="btn btn-info">👁 </a> <a href={`updatefees/${index.invoice_no}`}  className="btn btn-success">🔄 </a> <button type="button" onClick={()=>handleDelete(index.stud)} className="btn btn-danger">🗑️ </button></td>
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
  )
}

export default Fees