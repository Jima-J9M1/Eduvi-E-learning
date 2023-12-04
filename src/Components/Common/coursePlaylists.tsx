import { NavLink } from "react-router-dom";
import vite from "../../assets/images/Image (1).png";
import CourseVideoSectionCard from "./Cards/CourseVideoSectionCard";


interface CoursePlaylistProps {
  disable:boolean;
}


const CoursePlaylists: React.FC<CoursePlaylistProps> = (disable) => {
  const data = {
    name: "jima"
  }

  console.log(disable)
  return (
    <div className="grid gap-5 pl-8  h-[400px] overflow-y-scroll overflow-x-hidden">
      
      <div className="grid gap-2 ">
      <NavLink
            to="/courses/3" >
            <CourseVideoSectionCard
              image={vite}
              adName="all"
              cardName="Maths - for Standard 3 St.."
            />
          </NavLink>
      <NavLink
            to="/courses/4" state={{ data: data }}
            className={disable ? "pointer-events-none opacity-[0.4]": ({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-blue-200 rounded-lg" : ""
            }
            aria-disabled>
            <CourseVideoSectionCard
              image={vite}
              adName="all"
              cardName="Maths - for Standard 3 St.."
            />
          </NavLink>

        <NavLink
            to="/courses/5" state={{ data: data }}
            className={disable ? "pointer-events-none opacity-[0.4]": ({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-blue-200 rounded-lg" : ""
            }
            aria-disabled>
            <CourseVideoSectionCard
              image={vite}
              adName="all"
              cardName="Maths - for Standard 3 St.."
              
            />
          </NavLink>


        <NavLink
            to="/courses/6" state={{ data: data }}
            className={disable ? "pointer-events-none opacity-[0.4]": ({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-blue-200 rounded-lg" : ""
            }
            aria-disabled>
            <CourseVideoSectionCard
              image={vite}
              adName="all"
              cardName="Maths - for Standard 3 St.."
              
            />
          </NavLink>


          <NavLink
            to="/courses/7" state={{ data: data }}
            className={disable ? "pointer-events-none opacity-[0.4]": ({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-blue-200 rounded-lg" : ""
            }
            aria-disabled>
            <CourseVideoSectionCard
              image={vite}
              adName="all"
              cardName="Maths - for Standard 3 St.."
              
            />
          </NavLink>

      </div>
    </div>
  );
};

export default CoursePlaylists;
