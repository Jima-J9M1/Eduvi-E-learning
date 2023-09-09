import Link from "../Ui/link";
import Logo from "../Ui/logo";
import MouseOverPopover from "../Ui/popover";
import Avatar from "../Ui/avater";
import Selecte from "../Ui/selecte";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex align-middle py-5 bg-[#f5f5f5] 	">
      <div className="ml-3">
        <Logo />
      </div>

      <div className="items-center ml-auto  hidden lg:flex  ">
        <Link text="Home" url="/" />
        <NavLink to={"/CoursePage"}>Course</NavLink>
        {/* <NavLink to={'CoursePage'} >Course </NavLink> */}
        <div>
          <Selecte />
        </div>

        <Link text="About us" url="/Aboutus" />
        <Link text="Contact" url="./Contact" />

        <div className="ml-40">
          <Avatar name="My Account" img="#" />
        </div>
      </div>

      <div className="ml-auto lg:hidden ">
        <MouseOverPopover />
      </div>
    </div>
  );
};

export default Nav;
