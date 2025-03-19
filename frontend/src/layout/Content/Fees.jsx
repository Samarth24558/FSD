import "./Index.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import Fees from '../../components/Pages/Fees'

function fees() {
  return (
    <div className='main-content'>
      <ContentTop />
      <Fees/>
    </div>
  )
}

export default fees;