import "./Style.css";


function CIE() {
  return (
    <div className="main-content-holder">
      <h1>Continuous Internal Evaluation (CIE)</h1>
      <form className="form-inline my-2 my-lg-0">
      <select id="inputState" className="form-control">
        <option selected> SELECT SEMISTER</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select> 
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">🔍</button>
    </form>
     <table class="table table-bordered table-striped ">
  <thead class="thead-dark">
    <tr>
    <th scope="col">Invoice No</th>    
      <th scope="col">Registration No</th>
      <th scope="col">Full Name</th>
      <th scope="col">CIE NO.</th>
      <th scope="col">Branch</th>
      <th scope="col">Sem</th>
      <th scope="col">Subject Code</th>
      <th scope="col">Subject Name</th>
      <th scope="col">Marks Obtained</th>
      <th scope="col">Total Marks</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">460CS22011</th>
      <th scope="row">460CS22011</th>

      <td>Samarth</td>
      <td>1</td>
      <td>CS</td>
      <td>5</td>
      <td>80</td>
      <td>100</td>
      <td>70</td>
      <td>80</td>
      <td><button type="button"  class="btn btn-success">🔄 </button> 
      <button type="button" class="btn btn-danger">🗑️ </button></td>

    </tr>
     <tr>
      <th scope="row">NUll</th>
      <td>NUll</td>
      <td>NUll</td>
      <td>NUll</td>
      <td>NUll</td>
      <td>NUll</td>
      <td>NUll</td>
      <td>NUll</td>
      <td>NUll</td>
      <td>NUll</td>
      <td>NUll</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default CIE