import "./Index.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import Students from '../../components/Pages/Students'
import Register from '../../components/Pages/Regsiter'

const Content = () => {
  return (
    <div className='main-content'>
      <ContentTop />
      <Students/>
    </div>
  )
}

export default Content
