import { NavLink } from "react-router-dom";
import vite from "../../assets/images/Image (1).png";
import CourseVideoSectionCard from "./Cards/CourseVideoSectionCard";

const CoursePlaylists = (disable:boolean) => {
  const data = {
    name: "jima"
  }

  console.log(disable)
  return (
    <div className="grid gap-2 ">

      <div className="grid gap-2 ">
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
              duration="5:30"
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
              duration="5:30"
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
              duration="5:30"
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
              duration="5:30"
            />
          </NavLink>

      </div>
    </div>
  );
};

export default CoursePlaylists;
