import { NavLink } from 'react-router-dom'
import mss1 from '../../assets/mss 1.png'
import profile from '../../assets/Outline.png'
const Nav = () => {
  return (
    <div className='flex flex-row justify-between'>
      <div>
        <img src={mss1} width={70} alt='company logo'/>
      </div>
      <div className='flex flex-row justify-between w-1/2'>
        <div>
          <ul>
            <NavLink to='/' className='inline-block px-3'>Home</NavLink>
            <NavLink to='coursedetail' className='inline-block px-3'>Courses</NavLink>
            <li className='inline-block px-3'>About Us</li>
            <NavLink to='allcourse' className='inline-block px-3'>Contact</NavLink>
          </ul>
        </div>
        <div className='flex flex-row items-start justify-center'>
          <p>My Account</p>
          <img src={profile} alt='view profile'/>
        </div>
      </div>
    </div>
  )
}

export default Nav