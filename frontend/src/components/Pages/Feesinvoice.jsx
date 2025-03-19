import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Feesinvoice()
{
    const [invoice,setInvoice]=useState([]);
    const [student,setStudent]=useState([]);

    const {invoice_no}=useParams()

    const getFees=async()=>
    {
        const res=await axios.get(`http://localhost:8000/fees/${invoice_no}`)
        setInvoice(res.data)

    }


    useEffect(()=>
    {
        getFees();

    },[10])

    return(
        <>
       <div className="container">
<div className="row">
        <div className="col-lg-12">
            <div className="card">
                <div className="card-body">
                    <div className="invoice-title">
                        <h4 className="float-end font-size-15">Invoice <span className="badge bg-success font-size-12 ms-2">Paid</span></h4>        
                    </div>

                   

                    <div className="row">
                        <div className="col-sm-6">
                            {invoice.map((index)=>(
                                <div >
                                <h4 className="font-size-15 mb-2">Student Details</h4>
                                <p className="mb-1">ID: {index.stud}</p>
                            </div>
                            ))}
                            
                        </div>
                        <div className="col-sm-6">
                        {invoice.map((index)=>(
                            <div  key={index}>
                            <div>
                                <h5 className="font-size-15 mb-1">Invoice No:</h5>
                                <p>{index.invoice_no}</p>
                            </div>
                            <div className="mt-4">
                                <h5 className="font-size-15 mb-1">Paid Date:</h5>
                                <p>{index.paid_date}</p>
                            </div>                        
                        </div>
                        ))}
                            
                        </div>
                        
                    </div>
                    
                    
                    <div className="py-2">
                        <h5 className="font-size-15">Summary</h5>

                        <div className="table-responsive">
                            <table className="table align-middle table-nowrap table-centered mb-0">                                            
                                {invoice.map((index)=>(
                                <tbody>                                
                                                                    
                                    
                                    <tr >
                                        <th scope="row" colspan="4" className="text-end">Cultural activity fees</th>
                                        <td className="text-end">$732.50</td>
                                    </tr>
                                    
                                    <tr>
                                        <th scope="row" colspan="4" className="border-0 text-end">
                                            Sports fees :</th>
                                        <td className="border-0 text-end">- $25.50</td>
                                    </tr>
                                    
                                    <tr>
                                        <th scope="row" colspan="4" className="border-0 text-end">
                                            Exam fees :</th>
                                        <td className="border-0 text-end">$20.00</td>
                                    </tr>
                                    
                                    <tr>
                                        <th scope="row" colspan="4" className="border-0 text-end">
                                            Library fees :</th>
                                        <td className="border-0 text-end">$12.00</td>
                                    </tr>
                                    
                                    <tr>
                                        <th scope="row" colspan="4" className="border-0 text-end">Total fees:</th>
                                        <td className="border-0 text-end"><h4 className="m-0 fw-semibold">{index.total_fees}</h4></td>
                                    </tr>

                                    <tr>
                                        <th scope="row" colspan="4" className="border-0 text-end">Fees paid:</th>
                                        <td className="border-0 text-end"><h4 className="m-0 fw-semibold">{index.fees_paid}</h4></td>
                                    </tr>

                                    <tr>
                                        <th scope="row" colspan="4" className="border-0 text-end">Balance fees:</th>
                                        <td className="border-0 text-end"><h4 className="m-0 fw-semibold">{index.total_fees-index.fees_paid}</h4></td>
                                    </tr>
                                    
                                </tbody>
                                ))}
                            </table>
                        </div>
                        <div className="d-print-none mt-4">
                            <div className="float-end">
                                <a href="javascript:window.print()" className="btn btn-success me-1">🖨️</a>
                                <a href="#" className="btn btn-primary w-md">Send</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>

        
    )
}

export default Feesinvoice;