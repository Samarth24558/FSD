import React from "react";
import img from './Images/logo.png'
import clg from './Images/collage.jpeg'
function Login()
{
    return(
        <>
        <div className="subcount" style={{
            backgroundImage: `url(${clg})`, 
              backgroundSize: "cover", 
              backgroundPosition: "center",
              height: "100vh",
              width: "100vw",
              opacity:1,
              
            }}
        >
            <section className="p-3 p-md-4 p-xl-5">
        <div className="container"/>
        <link rel="stylesheet" href="https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://unpkg.com/bs-brain@2.0.4/components/logins/login-5/assets/css/login-5.css"/>
          <div className="card border-light-subtle shadow-sm">
            <div className="row g-0">
              <div className="col-12 col-md-6 text-bg-primary">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="col-10 col-xl-8 py-3">
                    <img src={img}/>    
                    <h2 className="h1 mb-4">We make digital products that drive you to stand out.</h2>
                    <p className="lead m-0">We write words, take photos, make videos, and interact with artificial intelligence.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h3>Log in</h3>
                      </div>
                    </div>
                  </div>
                  <form action="#!">
                    <div className="row gy-3 gy-md-4 overflow-hidden">
                      <div className="col-12">
                        <label for="email" className="form-label">Email <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required/>
                      </div>
                      <div className="col-12">
                        <label for="password" className="form-label">Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" name="password" id="password" value="" required/>
                      </div>
                    
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn bsb-btn-xl btn-primary" type="submit">Log in now</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12">
                      <hr className="mt-5 mb-4 border-secondary-subtle"/>
                      <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                        <a href="#!" className="link-secondary text-decoration-none">Create new account</a>
                        <a href="#!" className="link-secondary text-decoration-none">Forgot password</a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  
        </div>  
      </>
    )
}

export default Login;