
import { Link } from "react-router-dom";


interface linkprops{
    text:string
    url:string
}

export default function link({text,url}:linkprops) {
    
  return (
    <div>
        <Link className=" text-black text-base px-4 py-3  hover:underline " to={url}>{text}</Link>
    </div>
  )
}
