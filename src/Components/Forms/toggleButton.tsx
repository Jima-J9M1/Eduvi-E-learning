/* eslint-disable react-hooks/rules-of-hooks */
import { logout } from "../../Api/authenticate";
import { useModal } from "../../Utils/Contexts/ModalContext";
import useAuth from "../../hooks/useAuth";

type props={
  onClose:React.Dispatch<React.SetStateAction<boolean>>
}

export default function toggleButton({onClose}:props) {
  const {auth} = useAuth()

const { setIsSignin } = useModal();
  const Open=()=>{
    onClose((prev)=>!prev)
    setIsSignin(false)
  }
  const Opens=()=>{
    onClose((prev)=>!prev)
    setIsSignin(true)
  }
  return (
    <div>
      {
        auth ?  <button onClick={logout} className="button-29 py-3" role="button">Logout</button>  :
         <>
        <button onClick={()=>Open()} className="button-29 py-3" role="button">Login</button>
        <button  onClick={()=>Opens()} className="button-29 py-3 mx-2" role="button">Sign Up</button>
        </>
      }

    </div>
  )
}
