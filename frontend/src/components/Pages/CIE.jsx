import "./Style.css";
import { useEffect, useState } from "react";
import axios from "axios";




function CIE() {
  const [writtenData,setWrittendata]=useState([]);
  
    
  const getData=()=>
    {
      axios.get("http://localhost:8000/getciewritten")
      .then((res)=>{
        console.log(res.data)
        setWrittendata(res.data)
      })
      .catch((error)=>{
        console.log(error)
      })
    } 
    useEffect(()=>{
      getData();
  
    },[10])


  return (
    <div className="main-content-holder">
      <h1>Continuous Internal Evaluation (CIE)</h1>
      <form className="form-inline my-2 my-lg-0">
      <select id="inputState" className="form-control">
        <option selected>SELECT SEMISTER</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select> 
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">🔍</button>
    </form>
    <table className="table table-bordered table-striped">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Registration No</th>
      <th scope="col">Sem</th>
      <th scope="col">NO. CIE</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {[...new Map(writtenData.map(item => [item.stud, item])).values()].map((index) => (
      <tr key={index.stud}>
        <th scope="row">{index.stud}</th>
        <td>{index.sem}</td>
        <td>5</td>
        <td>
          <a href={`CIEB/${index.stud}`} className="btn btn-info">👁</a>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  )
}

export default CIE