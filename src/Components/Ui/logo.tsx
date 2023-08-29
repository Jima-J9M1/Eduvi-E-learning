import { Link } from "react-router-dom";



const logo = () => {
  return (
    <div><Link to={"/"}><img className='w-24 max-h-20' src="/vite.svg" alt="logo" /></Link></div>
  )
}

export default logo