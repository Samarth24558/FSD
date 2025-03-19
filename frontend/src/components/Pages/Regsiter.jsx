import { useState } from 'react';
import './Style.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const RegistrationForm = () => {

	const [data,setData]=useState({stud_id:"",stud_name:"",stud_dob:"",stud_gender:"",stud_location:"",stud_contact:"",stud_parentscontact:"",stud_email:"",stud_branch:"",stud_yoa:""})
	const [error,setError]=useState('')

	const navigate=useNavigate()

const addData=(e)=>
	{
		e.preventDefault();
		axios.post("http://localhost:8000/addstud",data)
		.then((res)=>
		{
			console.log(res.data);
			alert("Record added successfully ✅ ");
			navigate("/Students");

		})
		.catch((err)=>{
			console.log(err);
			
			if (err.message==="Network Error")
			{
				setError(err.message)
			}
			else if (err.response.data.stud_id){
				setError("Error: Student with register no already exists");
			}
			else if(err.response.data.stud_contact)
			{
				setError("Error: Student with contact already exists");
			}
			else if(err.response.data.stud_parentscontact)
			{
				setError("Error: Student with parents contact already exists");
			}
			else if(err.response.data.stud_email)
				{
					setError("Error: Student with email already exists");
				}
		
				

			
		})

		setTimeout(()=>
		{
			setError("");
		},10000)
  	}

  return (
    <>
    <h1>Register Students</h1><br />
{error && <div className="alert alert-danger" role="alert"><h4>{error}</h4></div>}
<form action="" onSubmit={addData}>
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
							<input type="text" className="form-control"
							value={data.stud_id} onChange={(e)=>setData({...data,stud_id:e.target.value})} id="fullName" placeholder="Enter registration number" required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="name">Full Name</label>
							<input type="text" className="form-control" id="eMail" placeholder="Enter full name" value={data.stud_name} onChange={(e)=>setData({...data,stud_name:e.target.value})} required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">Date of Birth</label>
							<input type="date" className="form-control" id="phone" placeholder="Enter date of birth" value={data.stud_dob} onChange={(e)=>setData({...data,stud_dob:e.target.value})} required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="website">Gender</label>
							<input type="text" className="form-control" id="website" placeholder="Gender" value={data.stud_gender} onChange={(e)=>setData({...data,stud_gender:e.target.value})} required/>
						</div>
					</div>
				</div>
				<div className="row gutters">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<h6 className="mb-3 text-primary">Address</h6>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="Street">Location</label>
							<input type="text" className="form-control" id="Street" placeholder="Enter location" value={data.stud_location} onChange={(e)=>setData({...data,stud_location:e.target.value})} required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="ciTy">Contact</label>
							<input type="tel" pattern='[0-9]{10}' className="form-control" id="ciTy" placeholder="Enter contact" value={data.stud_contact} onChange={(e)=>setData({...data,stud_contact:e.target.value})} required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="sTate">Parents Contact</label>
							<input type="tel" pattern='[0-9]{10}' className="form-control" id="sTate" placeholder="Enter parents contact" value={data.stud_parentscontact} onChange={(e)=>setData({...data,stud_parentscontact:e.target.value})} required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="zIp">Email ID</label>
							<input type="email" className="form-control" id="zIp" placeholder="Enter email" value={data.stud_email} onChange={(e)=>setData({...data,stud_email:e.target.value})} required/>
						</div>
					</div>
				</div>
        <div className="row gutters">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<h6 className="mb-3 text-primary">Academic Details</h6>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="Street">Branch</label>
							<input type="text" className="form-control" id="Street" placeholder="Enter branch" value={data.stud_branch} onChange={(e)=>setData({...data,stud_branch:e.target.value})} required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="ciTy">Year of Adminssion</label>
							<input type="text" className="form-control" id="ciTy" placeholder="Enter Year of adminssion" value={data.stud_yoa} onChange={(e)=>setData({...data,stud_yoa:e.target.value})} required/>
						</div>
					</div>
				</div>
        
				<div className="row gutters"> 
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="text-right">
							<a href="Students" id="submit" name="submit" className="btn btn-secondary">Cancel</a>
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

export default RegistrationForm;
