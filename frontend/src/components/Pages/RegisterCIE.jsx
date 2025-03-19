import './Style.css';
import img from './Images/logo.png'
const RegisterCIE = () => {

  return (
    <>
    <h1>Register CIE</h1><br />
    <form action="CIE">
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
							<input type="text" className="form-control" id="fullName" placeholder="Enter registration number" required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="name">Full Name</label>
							<input type="text" className="form-control" id="eMail" placeholder="Enter full name" required/>
						</div>
					</div>

					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">SUBJECT 1</label>
							<input type="number" className="form-control" id="phone" placeholder="SUBJECT 1" required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="website">SUBJECT 2</label>
							<input type="text" className="form-control" id="website" placeholder="SUBJECT 2" required/>
						</div>
					</div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="dob">SUBJECT 3</label>
							<input type="number" className="form-control" id="phone" placeholder="SUBJECT 3" required/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="website">SUBJECT 4</label>
							<input type="text" className="form-control" id="website" placeholder="SUBJECT 4" required/>
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
