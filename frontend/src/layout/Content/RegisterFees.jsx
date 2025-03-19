import "./Index.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import RegisterFees from '../../components/Pages/RegisterFees'

function registerfees() {
  return (
    <div className='main-content'>
      <ContentTop />
      <RegisterFees/>
    </div>
  )
}

export default registerfees;