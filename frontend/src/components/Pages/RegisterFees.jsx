import { useEffect, useState } from 'react';
import './Style.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const RegisterFees = () => {
	
	const[data,setData]=useState({stud:"",total_fees:"",fees_paid:"",paid_date:""})
	const [err,setErr]=useState("")

	const navigate=useNavigate()

	const handleSubmit=(e)=>
	{
		e.preventDefault();
		console.log("Form Data:",data)
		axios.post("http://localhost:8000/addfees",data)
		.then((res)=>{
			console.log(res.data);
			alert("Fees details Added successfully ✅")
			navigate("/Fees")
		})
		.catch((err)=>{
			console.log("Error occurred")
			console.log(err)	
			if(err.response.data.stud)
			{
				setErr("Student with register no. does not exist ")
			}
			else if (err.message)
			{
				setErr("Student with register no. already exist ")

			}		
		})
		
		

		setTimeout(()=>
			{
				setErr("");
			},4000)

		}

	
  return (
    <>
    <h1>Register Student Fees</h1><br />
	{err && <div className="alert alert-danger" role="alert"><h4>{err}</h4></div>}
    <form action="" onSubmit={handleSubmit}>
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
							<input type="text" className="form-control" value={data.stud} onChange={(e)=>setData({...data,stud:e.target.value})} id="fullName" placeholder="Enter registration number" required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="name">Total Fees </label>
							<input type="number" className="form-control" value={data.total_fees} onChange={(e)=>setData({...data,total_fees:e.target.value})}  id="eMail" placeholder="Total Fees" required/>
						</div>
					</div>

					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">Fees Paid</label>
							<input type="number" className="form-control" value={data.fees_paid} onChange={(e)=>setData({...data,fees_paid:e.target.value})}  id="phone" placeholder="Fees Paid" required/>
						</div>
					</div>

					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">Paid date</label>
							<input type="date" className="form-control" value={data.paid_date} onChange={(e)=>setData({...data,paid_date:e.target.value})}  id="phone" placeholder="Fees Paid" required/>
						</div>
					</div>
				</div>
        
				<div className="row gutters"> 
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="text-right">
							<a href="/Fees" id="submit" name="submit" className="btn btn-secondary">Cancel</a>
							<button type="submit" id="submit" name="submit" className="btn btn-primary">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </form> 

    </>
  );
};

export default RegisterFees;
