import Link from "../Ui/link"
import Logo from "../Ui/logo"
import MouseOverPopover from "../Ui/popover"
import  Avatar  from "../Ui/avater";
import Selecte from "../Ui/selecte"




const Nav = () => {
  return (
    <div className="flex align-middle mx-10 py-5 bg-white ">
      <div className="ml-3"><Logo  /></div>
      <div className="ml-auto hidden md:flex my-auto  ">
      <Link text="Home"  url="/"/>
      <Link text="Courses" url="/Courses" />
      <div>
      <Selecte />
      </div>
      
      <Link text="About us" url="/Aboutus" />
      <Link text="Contact" url="./Contact" />
      <div className="ml-40">
      <Avatar />
      </div>
     
      </div>
      <div className="ml-auto md:hidden ">
      <MouseOverPopover />
      
       
      </div>
     
    </div>
  )
}

export default Nav