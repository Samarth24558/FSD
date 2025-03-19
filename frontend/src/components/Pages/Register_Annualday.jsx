import axios from "axios";
import "./Style.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register_Annualaday() {

  const [data,setData]=useState({student:"",date:"",compitation_name:""})

  const navigate=useNavigate();


  const handleSubmit=(e)=>
  {
    e.preventDefault();
    console.log(data)
    axios.post("http://localhost:8000/addannualday",data)
    .then((res)=>
    {
      alert("Record details Added successfully ✅") 
			navigate("/Annualday")
    })
  
  }

  return (
    <>
    <h1>Register Annualady</h1><br />
    <form action=""  onSubmit={handleSubmit}>
	<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="row gutters">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<h6 className="mb-3 text-primary">Personal Details</h6>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="fullName">Registration Number</label>
							<input type="text" className="form-control" value={data.student} onChange={(e)=>setData({...data,student:e.target.value})} id="fullName" placeholder="Enter registration number" required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="name">Date</label>
							<input type="date" className="form-control" value={data.date} onChange={(e)=>setData({...data,date:e.target.value})}  id="eMail" placeholder="Enter full name" />
						</div>
					</div>

					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">Compitation name</label>
							<input type="text" className="form-control" value={data.compitation_name} onChange={(e)=>setData({...data,compitation_name:e.target.value})}  id="phone" placeholder="Compitation name" required/>
						</div>
					</div>
					
				</div>

					
        
				<div className="row gutters"> 
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="text-right">
							<a href="Annualday" id="submit" name="submit" className="btn btn-secondary">Cancel</a>
							<button type="submit" id="submit" name="submit" className="btn btn-primary">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </form> 
  </>
  )
}

export default Register_Annualaday;