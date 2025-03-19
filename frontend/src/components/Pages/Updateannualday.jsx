import axios from "axios";
import "./Style.css";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Update_Annualaday() {

  const [data,setData]=useState()
  const {invoice_no}=useParams()

  const [student,setStudent]=useState("")
  const [date,setDate]=useState("")
  const [compitation_name,setCompitation]=useState("")



  const getAnnualday=()=>
  {
	console.log(invoice_no)
	axios.get(`http://localhost:8000/getannualday/${invoice_no}`)
	.then((res)=>
	{
		setStudent(res.data[0].student)
		setDate(res.data[0].date)
		setCompitation(res.data[0].compitation_name)

	})
  }



  const handleUpdateannualday=(e)=>
    {
        e.preventDefault();
        axios.put(`http://localhost:8000/updateannualday/${invoice_no}`,{
            student:student,
            compitation_name:compitation_name,
            date:date,
        })
        .then((res)=>
        {
            alert("Recorde updated successfully ✅");
            navigate("/Annualday");
            
        })
    }

  useEffect(()=>{
	getAnnualday();
  },[10])

  const navigate=useNavigate();


  return (
    <>
    <h1>Update Annualady</h1><br />
    <form action="" onSubmit={handleUpdateannualday}>
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
							<input type="text" className="form-control" value={student} onChange={(e)=>setStudent(e.target.value)} id="fullName" placeholder="Enter registration number" required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="name">Date</label>
							<input type="date" className="form-control" value={date} onChange={(e)=>setDate(e.target.value)}  id="eMail" placeholder="Enter full name" />
						</div>
					</div>

					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">Compitation name</label>
							<input type="text" className="form-control" value={compitation_name} onChange={(e)=>setCompitation(e.target.value)}  id="phone" placeholder="Compitation name" required/>
						</div>
					</div>
					
				</div>

					
        
				<div className="row gutters"> 
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="text-right">
							<a href="/Annualday" id="submit" name="submit" className="btn btn-secondary">Cancel</a>
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

export default Update_Annualaday;