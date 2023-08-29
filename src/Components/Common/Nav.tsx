import Link from "../Ui/link"
import Logo from "../Ui/logo"
import MouseOverPopover from "../Ui/popover"
import  Avatar  from "../Ui/avater";
import Selecte from "../Ui/selecte"





const Nav = () => {
  return (
    <div className="flex align-middle mx-10 py-5 bg-white ">
      <div className="ml-3"><Logo  /></div>

      <div className="items-center ml-auto  hidden lg:flex  ">
      <Link text="Home"  url="/"/>
      <Link text="Courses" url="/Courses" />
      <div>
      <Selecte />
      </div>
      
      <Link text="About us" url="/Aboutus" />
      <Link text="Contact" url="./Contact" />

      <div className="ml-40">
      <Avatar  name="My Account" img={null} />
      </div>
     
      </div>

      <div className="ml-auto lg:hidden ">
      <MouseOverPopover />
      </div>
     
    </div>
  )
}

export default Nav