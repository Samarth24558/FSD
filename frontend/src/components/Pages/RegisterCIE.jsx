import './Style.css';
import img from './Images/logo.png'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from "axios";

const RegisterCIE = () => {

	const [writtenData,setWrittendata]=useState({stud:"",sem:"",subject_name_1:"",subject_name_2:"",subject_name_3:"",subject_name_4:"",marks_1:"",marks_2:"",marks_3:"",marks_4:"",cie_no:""})
	const [skillData,setSkilldata]=useState({stud:"",sem:"",subject_name_1:"",subject_name_2:"",subject_name_3:"",subject_name_4:"",marks_1:"",marks_2:"",marks_3:"",marks_4:"",cie_no:""})

	const [err,setErr]=useState("")
	const navigate=useNavigate();
	  
	

	const handleSubmitwritten=(e)=>
		{
			e.preventDefault();
		  
			// Convert only marks fields with empty strings to null
			const cleanData = (data) => {
			  const cleanedData = { ...data };
			  ['marks_1', 'marks_2', 'marks_3', 'marks_4'].forEach((field) => {
				if (cleanedData[field] === "") {
				  cleanedData[field] = null;
				}
			  });
			  return cleanedData;
			};
		  
			const finalData = cleanData(writtenData);
			console.log("Submitting Data:", finalData);
		  
			axios.post("http://localhost:8000/addciewritten", finalData)
			  .then((res) => {
				alert("Record Added successfully ✅");
				navigate("/CIE");
			  })
			  .catch((err) => {
				console.log(err);
				if (err.response?.data?.stud) {
				  setErr("Student with register no does not exist.");
				} else {
				  setErr("An error occurred while adding the record.");
				}
			  });
		  };

		const handleSubmitskill = (e) => {
			e.preventDefault();
		  
			// Convert only marks fields with empty strings to null
			const cleanData = (data) => {
			  const cleanedData = { ...data };
			  ['marks_1', 'marks_2', 'marks_3', 'marks_4'].forEach((field) => {
				if (cleanedData[field] === "") {
				  cleanedData[field] = null;
				}
			  });
			  return cleanedData;
			};
		  
			const finalData = cleanData(skillData);
			console.log("Submitting Data:", finalData);
		  
			axios.post("http://localhost:8000/addcieskill", finalData)
			  .then((res) => {
				alert("Record Added successfully ✅");
				navigate("/CIE");
			  })
			  .catch((err) => {
				console.log(err);
				if (err.response?.data?.stud) {
				  setErr("Student with register no does not exist.");
				} else {
				  setErr("An error occurred while adding the record.");
				}
			  });
		  };
		  


	

  return (
    <>
    <h1>Register CIE</h1><br />
	<h2>Written-Test Section</h2>
	{err && <div className="alert alert-danger" role="alert"><h4>{err}</h4></div>}

    <form action="CIE" onSubmit={handleSubmitwritten}>
		
	<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="row gutters">

					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="fullName">Registration Number</label>
							<input value={writtenData.stud } onChange={(e)=>setWrittendata({...writtenData,stud:e.target.value})} type="text" className="form-control" id="fullName" placeholder="Enter registration number" required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">

							<label for="website">Sem</label>
							<input value={writtenData.sem} onChange={(e)=>setWrittendata({...writtenData,sem:e.target.value})}  type="number" className="form-control" style={{width:"250px"}} id="website" placeholder="Sem" required/>

						</div>
					</div>

					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">Subject Name</label>
							<input value={writtenData.subject_name_1} onChange={(e)=>setWrittendata({...writtenData,subject_name_1:e.target.value})} type="text" className="form-control" id="phone" placeholder="SUBJECT 1" />
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="website">Marks</label>
							<input value={writtenData.marks_1} onChange={(e)=>setWrittendata({...writtenData,marks_1:e.target.value})} type="number" className="form-control" style={{width:"250px"}} id="website" placeholder="Marks" />
						</div>
					</div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">Subject Name</label>
							<input value={writtenData.subject_name_2} onChange={(e)=>setWrittendata({...writtenData,subject_name_2:e.target.value})} type="text" className="form-control" id="phone" placeholder="SUBJECT 2" />
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="website">Marks</label>
							<input value={writtenData.marks_2} onChange={(e)=>setWrittendata({...writtenData,marks_2:e.target.value})} type="number" className="form-control"style={{width:"250px"}} id="website" placeholder="Marks" />
						</div>
					</div>

					
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">Subject Name</label>
							<input value={writtenData.subject_name_3} onChange={(e)=>setWrittendata({...writtenData,subject_name_3:e.target.value})} type="text" className="form-control" id="phone"  placeholder="SUBJECT 3" />
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="website">Marks</label>
							<input value={writtenData.marks_3} onChange={(e)=>setWrittendata({...writtenData,marks_3:e.target.value})} type="number" className="form-control" style={{width:"250px"}} id="website" placeholder="Marks" />
						</div>
						
					</div>

					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">Subject Name</label>
							<input value={writtenData.subject_name_4} onChange={(e)=>setWrittendata({...writtenData,subject_name_4:e.target.value})} type="text" className="form-control" id="phone"  placeholder="SUBJECT 4" />
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="website">Marks</label>
							<input value={writtenData.marks_4} onChange={(e)=>setWrittendata({...writtenData,marks_4:e.target.value})} type="number" className="form-control" style={{width:"250px"}} id="website" placeholder="Marks" />
						</div>
						
					</div>

					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="website">CIE No</label>
							<input value={writtenData.cie_no} onChange={(e)=>setWrittendata({...writtenData,cie_no:e.target.value})} type="number" className="form-control" style={{width:"250px"}} id="website" placeholder="Marks" required/>
						</div>
						
					</div>
			

				



				</div>
	
        
				<div className="row gutters"> 
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="text-right">
							<button type="reset" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
							<button type="submit" id="submit" name="submit" className="btn btn-primary">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </form> 



  <h2>Skill-Test Section</h2><br />
	{err && <div className="alert alert-danger" role="alert"><h4>{err}</h4></div>}

    <form action="CIE" onSubmit={handleSubmitskill}>
	<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="row gutters">

				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="fullName">Registration Number</label>
							<input value={skillData.stud} onChange={(e)=>setSkilldata({...skillData,stud:e.target.value})} type="text" className="form-control" id="fullName" placeholder="Enter registration number" required/>
						</div>
					</div>



					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">

							<label for="website">Sem</label>
							<input value={skillData.sem}  onChange={(e)=>setSkilldata({...skillData,sem:e.target.value})} type="number" className="form-control" style={{width:"250px"}} id="website" placeholder="Sem" required/>

					</div>
						
					</div>

					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">Subject Name</label>
							<input value={skillData.subject_name_1} onChange={(e)=>setSkilldata({...skillData,subject_name_1:e.target.value})}  type="text" className="form-control" id="phone" placeholder="SUBJECT 1" />
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="website">Marks</label>
							<input value={skillData.marks_1} onChange={(e)=>setSkilldata({...skillData,marks_1:e.target.value})}  type="number" className="form-control" style={{width:"250px"}} id="website" placeholder="Marks" />
						</div>
					</div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">Subject Name</label>
							<input value={skillData.subject_name_2} onChange={(e)=>setSkilldata({...skillData,subject_name_2:e.target.value})}  type="text" className="form-control" id="phone" placeholder="SUBJECT 2" />
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="website">Marks</label>
							<input value={skillData.marks_2} onChange={(e)=>setSkilldata({...skillData,marks_2:e.target.value})}  type="number" className="form-control"style={{width:"250px"}} id="website" placeholder="Marks" />
						</div>
					</div>

					
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">Subject Name</label>
							<input value={skillData.subject_name_3} onChange={(e)=>setSkilldata({...skillData,subject_name_3:e.target.value})} type="text" className="form-control" id="phone"  placeholder="SUBJECT 3" />
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="website">Marks</label>
							<input value={skillData.marks_3}  onChange={(e)=>setSkilldata({...skillData,marks_3:e.target.value})} type="number" className="form-control" style={{width:"250px"}} id="website" placeholder="Marks" />
						</div>
						
					</div>


					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">Subject Name</label>
							<input value={skillData.subject_name_4} onChange={(e)=>setSkilldata({...skillData,subject_name_4:e.target.value})}  type="text" className="form-control" id="phone"  placeholder="SUBJECT 4" />
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="website">Marks</label>
							<input value={skillData.marks_4} onChange={(e)=>setSkilldata({...skillData,marks_4:e.target.value})}  type="number" className="form-control" style={{width:"250px"}} id="website" placeholder="Marks" />
						</div>
						
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="website">CIE No</label>
							<input value={skillData.cie_no} onChange={(e)=>setSkilldata({...skillData,cie_no:e.target.value})} type="number" className="form-control" style={{width:"250px"}} id="website" placeholder="CIE No" required/>
						</div>
						
					</div>
			


				</div>

				

        
				<div className="row gutters"> 
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="text-right">
							<button type="reset" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
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

export default RegisterCIE;
