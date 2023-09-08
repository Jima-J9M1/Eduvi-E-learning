import React from "react";
import { NavLink } from 'react-router-dom';
import CourseCard from "./CourseCard";
import Button from '@mui/material/Button';
import NativeSelectDemo from "./categories";
import image3 from '../../assets/images/image3.jpg';
import image2 from '../../assets/images/image2.jpg';

const CourseList: React.FC = () => {
  const courses = [
    { id: 1, courseType: "FrontEnd" },
    { id: 2, courseType: "BackEnd", image: image3 },
    { id: 3, courseType: "FrontEnd", image: image2 },
  ];

  

  return (
    <div className="mt-10">
      <div className="flex sm:justify-start lg:justify-end mb-catb-pos mr-cat-pos ml-cat-pos">
        <div className="flex ">
          <div className = " pt-2 pr-10 font-poppins text-xl font-medium leading-6 tracking-tight text-left text-gray-800">
          <select>
            <option selected disabled>Categories</option>
            <option value="Front end">Front end</option>
            <option value="Back end">Back end</option>
            
          </select>  
            
          </div>
          <VisitButton text = "Visit More Courses" />
        </div>
      </div>
      <div className="grid border-t-2 border-solid border-gray-200 m-catb-pos sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center g-10 bg-list-back pt-20">
        {courses.map((course) => (
                
            <NavLink to={`/${course.id}`}>
            <CourseCard
              id={course.id}
              key={course.id}
              courseType={course.courseType}
              image={course.image} 
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
