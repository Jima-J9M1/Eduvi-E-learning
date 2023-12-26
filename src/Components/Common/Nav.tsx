import { NavLink } from "react-router-dom";
import MouseOverPopover from "../Ui/popover";
import Selecte from "../Ui/selecte";
import { useEffect, useState } from "react";
import { ModalProvider, useModal } from "../../Utils/Contexts/ModalContext";
import AuthModal from "../Modals/AuthModal";
import image from '../../assets/logo/mss 1.png'
import '../../styles/global.css';
import ToggleButton from "../Forms/toggleButton";

const Nav = () => {
  const [modalOpen, isModalOpen] = useState(false)
  const {isSignin,setIsSignin} = useModal()
  
  console.log("This is after the set sign is true", isSignin)
  
  
  useEffect(()=>{
    if(isSignin){
      isModalOpen(true)
      setIsSignin(false)
    }
  }, [])
  
  return (
    <div className="flex align-middle justify-between px-4 	">
      <div className="ml-3">
        <NavLink to={"/"}>
        <img src={image} width="70%" height="70%" />
        </NavLink>
      </div>

      <div className="items-center w-1/2  hidden lg:flex lg:justify-between lg:gap-3">
      <NavLink to={'/'}
      className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "border-b-4 border-b-blue-600 text-gray-600" : "text-gray-600"
    }>
      Home
    </NavLink>
{/*       <NavLink to={'/CoursePage'} >Course</NavLink> */}
        
      <NavLink to={'/courses'}  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-4 border-b-blue-600 text-gray-600" : "text-gray-600"
  }>
    Course
    
    </NavLink>
      {/* <NavLink to={'CoursePage'} >Course </NavLink> */}
      <div>
      <Selecte />
      </div>
       
      <NavLink to={'/Aboutus'}  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-4 border-b-blue-600 text-gray-600" : "text-gray-600"
  }>
   About us
    
    </NavLink>
    
    <NavLink to={'/Contact'}  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-4 border-b-blue-600 text-gray-600" : "text-gray-600"
  }>
   Contact
    
    </NavLink>
      <ModalProvider>
          <ToggleButton  onClose={isModalOpen} />
          <AuthModal open={modalOpen} onClose={()=>isModalOpen(!modalOpen)}   />
      </ModalProvider>

        {/* <div className="ml-10">
          <Avatar name="My Account" img="#" />
        </div> */}
      </div>

      <div className="ml-auto lg:hidden ">
        <MouseOverPopover />
      </div>
    </div>
  );
};

export default Nav

