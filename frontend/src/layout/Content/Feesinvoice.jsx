import "./Index.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import Feesinvoice from '../../components/Pages/Feesinvoice'

function feesinvoice() {
  return (
    <div className='main-content'>
      <ContentTop />
      <Feesinvoice/>
    </div>
  )
}

export default feesinvoice;