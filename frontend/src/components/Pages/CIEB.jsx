import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CIEB() {
  const { invoice_no } = useParams();
  const [invoice, setInvoice] = useState([]);
  const [invoice2, setInvoice2] = useState([]);

  const getCIEW = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/getciewritten/${invoice_no}`);
      setInvoice(res.data);
    } catch (error) {
      console.error("Error fetching Written Test data:", error);
    }
  };

  const getCIES = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/getcieskill/${invoice_no}`);
      setInvoice2(res.data);
    } catch (error) {
      console.error("Error fetching Skill Test data:", error);
    }
  };

  const handleDelete = (invoice_no) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:8000/deleteciewritten/${invoice_no}/`)
        .then(() => {
          alert("Record deleted successfully ✅");
          // Update state by filtering out the deleted record
          setInvoice((prevData) => prevData.filter((item) => item.invoice_no !== invoice_no));
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error deleting record:", error);
          alert("Failed to delete record ❌");
        });
    }
  };


  
  const handleDelete2 = (invoice_no) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:8000/deletecieskill/${invoice_no}/`)
        .then(() => {
          alert("Record deleted successfully ✅");
          // Update state by filtering out the deleted record
          setInvoice((prevData) => prevData.filter((item) => item.invoice_no !== invoice_no));
          window.location.reload();

        })
        .catch((error) => {
          console.error("Error deleting record:", error);
          alert("Failed to delete record ❌");
        });
    }
  };

  useEffect(() => {
    getCIEW();
    getCIES();
  }, []);

  return (
    <>
      <h1>Continuous Internal Evaluation (CIE)</h1>
      <br />

      <h2>Written Test</h2>
      {invoice.length > 0 ? (
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Invoice No</th>
              <th>Registration No</th>
              <th>Sem</th>
              <th>CIE NO</th>
              <th>{invoice[0].subject_name_1}</th>
              <th>{invoice[0].subject_name_2}</th>
              <th>{invoice[0].subject_name_3}</th>
              <th>{invoice[0].subject_name_4}</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoice.map((item) => (
              <tr key={item.stud}>
                <td>{item.invoice_no}</td>
                <td>{item.stud}</td>
                <td>{item.sem}</td>
                <td>{item.cie_no}</td>
                <td>{item.marks_1}</td>
                <td>{item.marks_2}</td>
                <td>{item.marks_3}</td>
                <td>{item.marks_4}</td>
                <td>
                  <button onClick={() => handleDelete(item.invoice_no)} className="btn btn-danger">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4>No Written Test Data Found.</h4>

      )}

      <br /><br />

      <h2>Skill Test</h2>
      {invoice2.length > 0 ? (
        <table className="table table-striped table-dark">
          <thead>
            <tr>
            <th>Invoice No</th>
              <th>Registration No</th>
              <th>Sem</th>
              <th>CIE NO</th>
              <th>{invoice2[0].subject_name_1}</th>
              <th>{invoice2[0].subject_name_2}</th>
              <th>{invoice2[0].subject_name_3}</th>
              <th>{invoice2[0].subject_name_4}</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoice2.map((item) => (
              <tr key={item.stud}>
                <td>{item.invoice_no}</td>
                <td>{item.stud}</td>
                <td>{item.sem}</td>
                <td>{item.cie_no}</td>
                <td>{item.marks_1}</td>
                <td>{item.marks_2}</td>
                <td>{item.marks_3}</td>
                <td>{item.marks_4}</td>
                <td>              
                  <button onClick={() => handleDelete2(item.invoice_no)} className="btn btn-danger">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4>No Skill Test Data Found.</h4>
      )}
    </>
  );
}

export default CIEB;
