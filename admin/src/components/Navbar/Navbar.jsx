
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo1} alt=""  onClick={()=>navigate('/')} />
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
