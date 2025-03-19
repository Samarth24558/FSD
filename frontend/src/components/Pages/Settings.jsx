import { useState } from 'react';
import './Settings.css';

const set = () => {

	const [image,setImage]=useState(null)

	const handleImage=(e)=>
	{
		const file=e.target.files[0];

		if (file)
		{
			const reader=new FileReader();
			reader.onload=(e)=>	setImage(e.target.result)
			reader.readAsDataURL(file);
		}

	}

  return (
    <>
	<h1>Settings</h1>
    <div className="container">
<div className="row gutters">
	<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="account-settings">
					<div className="user-profile">
						<div className="user-avatar">
							{image && <img src={image} alt="Maxwell Admin"/>}
						</div>
						<h5 className="user-name">Name</h5>
						<h6 className="user-email">emailid</h6>
					</div>
					<div className="about">
						<input type="file"onChange={handleImage} alt='Image'/>SELECT IMAGE
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="row gutters">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<h6 className="mb-3 text-primary">Personal Details</h6>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="fullName">Full Name</label>
							<input type="text" className="form-control" id="fullName" placeholder="Enter full name"/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="eMail">Email</label>
							<input type="email" className="form-control" id="eMail" placeholder="Enter email ID"/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="phone">Phone</label>
							<input type="text" className="form-control" id="phone" placeholder="Enter phone number"/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="phone">Password</label>
							<input type="text" className="form-control" id="phone" placeholder="Enter phone number"/>
						</div>
					</div>
					
				</div>
				<div className="row gutters">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<h6 className="mb-3 text-primary">Address</h6>
					</div>	
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="ciTy">Privileges</label>
							<select id="inputState" className="form-control">
							<option selected>Privileges </option>
							<option>Read</option>
							<option>Update</option>
							<option>Delete</option>
							<option>Create</option>
      						</select> 
						</div>	
					</div>

				</div>
				<div className="row gutters"> 
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="text-right">
							<button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
							<button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>

    </>
  );
};

export default set;
