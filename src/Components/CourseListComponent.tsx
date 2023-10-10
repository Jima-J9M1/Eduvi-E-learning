import { NavLink } from "react-router-dom";
import CourseCard from "./Common/CourseCard";
import { CourseCardProps } from "../types";


type courseProps ={
    courses: CourseCardProps[];
}

const CourseListComponents:React.FC<courseProps> = ({courses})=>
(
    <div className="grid border-t-2 border-solid border-gray-200 m-catb-pos sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center g-10 bg-list-back pt-20">
        {courses.map((course:CourseCardProps) => (
                
            <NavLink to={`/Course/${course.id}`}>
            <CourseCard
              id={course.id}
              key={course.id}
              courseType={course.courseType}
              image={course.image} 
            />
          </NavLink>
        ))}
      </div>
)

export default CourseListComponents;
