import React from "react";
import CourseCard from "./CourseCard";
import Button from '@mui/material/Button';
import NativeSelectDemo from "./categories";
import image3 from '../../../assets/images/image3.jpg';
import image2 from '../../../assets/images/image2.jpg';

const CourseList: React.FC = () => {
  const courses = [
    { id: 1, courseType: "FrontEnd" },
    { id: 2, courseType: "BackEnd", image: image3 },
    { id: 3, courseType: "FrontEnd", image: image2 },
  ];

  

  return (
    <div className="mt-10">
      <div className="flex sm:justify-start lg:justify-end mb-catb-pos mr-cat-pos ml-cat-pos">
        <div className="grid grid-cols-2 gap-4 mt-catb-pos">
          <NativeSelectDemo />
          <Button variant="contained" disableElevation>
            View Courses
          </Button>
        </div>
      </div>
      <div className="grid border-t-2 border-solid border-gray-200 m-catb-pos sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center g-10 bg-list-back pt-20">
        {courses.map((course) => (
          <CourseCard
          id={course.id}
            key={course.id}
            courseType={course.courseType}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
