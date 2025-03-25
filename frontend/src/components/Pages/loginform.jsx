import React, { useState } from "react";
import img from './Images/logo.png';
import clg from './Images/collage.jpeg';
import axios from "axios";

function Login() {
  const [data, setData] = useState({username:"",password:""});

  const getCsrfToken = async () => {
    try {
      const response = await axios.get('http://localhost:8000/csrf-token/', {
        withCredentials: true, 
      });
      console.log("CSRF Token:", response.data.csrfToken);
      return response.data.csrfToken;
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
      return null;
    }
  };
  const loginUser=async(e)=>
  {
    e.preventDefault();
    console.log(data.username, data.password);
    const csrfToken = await getCsrfToken();
  
    try {
      const res = await axios.post("http://localhost:8000/loginUser", data, {
        headers: {
          'X-CSRFToken': csrfToken,
          "Content-Type": "application/json",
        },
      });
      console.log("logged in", res.data);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
    
  }

  return (
    <>
      <div className="subcount" style={{
        backgroundImage: `url(${clg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        opacity: 1,
      }}>
        <section className="p-3 p-md-4 p-xl-5">
          <div className="container" />
          <link rel="stylesheet" href="https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://unpkg.com/bs-brain@2.0.4/components/logins/login-5/assets/css/login-5.css" />
          <div className="card border-light-subtle shadow-sm">
            <div className="row g-0">
              <div className="col-12 col-md-6 text-bg-primary">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="col-10 col-xl-8 py-3">
                    <img src={img} alt="Logo" />
                    <h2 className="h1 mb-4">We make digital products that drive you to stand out.</h2>
                    <p className="lead m-0">We write words, take photos, make videos, and interact with artificial intelligence.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <h3>Log in</h3>
                  <form onSubmit={loginUser}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" value={data.username} onChange={(e)=>setData({...data,username:e.target.value})} name="email" id="email" placeholder="name@example.com" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        value={data.password}
                        onChange={(e) => setData({...data,password:e.target.value})}
                        required
                      />
                    </div>
                    <button className="btn bsb-btn-xl btn-primary" type="submit">Log in now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
