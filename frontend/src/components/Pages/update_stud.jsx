import { useEffect, useState } from 'react';
import './Style.css';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'

const RegistrationForm = () => {

	const [data,setData]=useState([])
	const [error,setError]=useState('')
	const {stud_id}=useParams();

	
	const [id,setID]=useState("")
	const [name,setName]=useState("")
	const [dob,setDob]=useState("")
	const [gender,setGender]=useState("")
	const [location,setLocation]=useState("")
	const [contact,setContact]=useState("")
	const [pcontact,setPcontact]=useState("")
	const [email,setEmail]=useState("")
	const [branch,setBranch]=useState("")
	const [yoa,setYoa]=useState("")


	const navigate=useNavigate()

const getData=()=>
	{
	
		axios.get(`http://localhost:8000/get/${stud_id}`)
		.then((res)=>
		{
			setData(res.data);
			console.log(res.data)
			setID(res.data[0].stud_id)
			setName(res.data[0].stud_name)
			setDob(res.data[0].stud_dob)
			setGender(res.data[0].stud_gender)
			setLocation(res.data[0].stud_location)
			setContact(res.data[0].stud_contact)
			setPcontact(res.data[0].stud_parentscontact)
			setEmail(res.data[0].stud_email)
			setBranch(res.data[0].stud_branch)
			setYoa(res.data[0].stud_yoa)


		})
		.catch((err)=>{
			console.log(err);
			if (err.message==="Network Error")
			{
				setError(err.message)
			}
			else if (err.response.data.stud_id){
				setError(` Error: ${err.response.data.stud_id}`);
			}
			else if(err.response.data.stud_contact)
			{
				setError(` Error: ${err.response.data.stud_contact}`);
			}
			else if(err.response.data.stud_parentscontact)
			{
				setError(` Error: ${err.response.data.stud_parentscontact}`);
			}
			else if(err.response.data.stud_email)
				{
					setError(` Error: ${err.response.data.stud_email}`);
				}
		
				

			
		})

		
  	}

	const handleUpdate=(e)=>
	{
		e.preventDefault();
		
		axios.put(`http://localhost:8000/updatestud/${stud_id}`, {
            stud_name: name,
            stud_dob: dob,
            stud_gender: gender,
            stud_location: location,
            stud_branch: branch,
            stud_yoa: yoa,
        })
		.then((res)=>
		{
			alert("Recorde updated successfully ✅")
			navigate("/Students")
			

		})
		.catch((error)=>
		{
			console.log(error)
		})


	}

	  useEffect (()=>
		{
			getData();
		},[])


  return (
    <>
    <h1>Update Students</h1><br />
{error && <div className="alert alert-danger" role="alert"><h4>{error}</h4></div>}
<h3>Registration Number: {id}</h3>
<form action="" onSubmit={handleUpdate}>
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
							<input type="text" 
							value={id} placeholder="Enter Registration no"  readOnly/>
							
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="name">Full Name</label>
							<input type="text" className="form-control" id="eMail" placeholder="Enter full name" value={name} onChange={(e)=>setName(e.target.value)}  required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">Date of Birth</label>
							<input type="date" className="form-control" id="phone" placeholder="Enter date of birth" value={dob} onChange={(e)=>setDob(e.target.value)}  required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="website">Gender</label>
							<input type="text" className="form-control" id="website" placeholder="Gender" value={gender} onChange={(e)=>setGender(e.target.value)}  required/>
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
							<input type="text" className="form-control" id="Street" placeholder="Enter location" value={location} onChange={(e)=>setLocation(e.target.value)}  required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="ciTy">Contact</label>
							<input type="tel" pattern='[0-9]{10}'  id="ciTy" placeholder="Enter contact" value={contact} onChange={(e)=>setContact(e.target.value)}  readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="sTate">Parents Contact</label>
							<input type="tel" pattern='[0-9]{10}'  id="sTate" placeholder="Enter parents contact" value={pcontact} onChange={(e)=>setPcontact(e.target.value)}  readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="zIp">Email ID</label>
							<input type="email"  id="zIp" placeholder="Enter email" value={email}  readOnly/>
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
							<input type="text" className="form-control" id="Street" placeholder="Enter branch" value={branch} onChange={(e)=>setBranch(e.target.value)}  required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="ciTy">Year of Adminssion</label>
							<input type="text" className="form-control" id="ciTy" placeholder="Enter Year of adminssion" value={yoa} onChange={(e)=>setYoa(e.target.value)}  required/>
						</div>
					</div>
				</div>
        
				<div className="row gutters"> 
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="text-right">
							<a href="/Students" id="submit" name="submit" className="btn btn-secondary">Cancel</a>
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
