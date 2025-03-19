import React, { useEffect, useState } from "react";
import "./Style.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function Updatefees()
{
    const[data,setData]=useState([])
    const [err,setErr]=useState("")

    
    const [id,setId]=useState("")
    const [totalFees,setTotalfees]=useState("")
    const [feesPaid,setFeespaid]=useState("")
    const [paidDate,setPaiddate]=useState("")



    const {invoice_no}=useParams();



	const navigate=useNavigate()


    const getFees=()=>
    {
        axios.get(`http://localhost:8000/fees/${invoice_no}`)
        .then((res)=>
        {
            setData(res.data)
            setId(res.data[0].stud)
            setTotalfees(res.data[0].total_fees)
            setFeespaid(res.data[0].fees_paid)
            setPaiddate(res.data[0].paid_date)


        })
    }

    const handleUpdateFees=(e)=>
    {
        e.preventDefault();
        axios.put(`http://localhost:8000/updatefees/${invoice_no}`,{
            total_fees:totalFees,
            fees_paid:feesPaid,
            paid_date:paidDate,
        })
        .then((res)=>
        {
            alert("Recorde updated successfully ✅");
            navigate("/Fees");
            
        })
    }

    useEffect(()=>
    {
        getFees();
    },[])

    return(
        <>
        <h1>Update Student Fees</h1><br />
        {err && <div className="alert alert-danger" role="alert"><h4>{err}</h4></div>}
        <form action="" onSubmit={handleUpdateFees}>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
                <div className="card-body">
                    <div className="row gutters">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label htmlFor="fullName">Registration Number</label>
                                <input type="text"  value={id}  id="fullName" placeholder="Enter registration number" readOnly/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label htmlFor="name">Total Fees </label>
                                <input type="number" className="form-control" value={totalFees} onChange={(e)=>setTotalfees(e.target.value)}  id="eMail" placeholder="Total Fees" required/>
                            </div>
                        </div>
    
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label htmlFor="dob">Fees Paid</label>
                                <input type="number" className="form-control" value={feesPaid} onChange={(e)=>setFeespaid(e.target.value)}  id="phone" placeholder="Fees Paid" required/>
                            </div>
                        </div>
                 

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label htmlFor="dob">Paid date</label>
                                <input type="date" className="form-control" value={paidDate} onChange={(e)=>setPaiddate(e.target.value)}  id="phone" placeholder="Paid date" required/>
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
    )
}

export default Updatefees