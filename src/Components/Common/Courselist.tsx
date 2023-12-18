import React from "react";
import CourseListed from "../Course/CourseListed";

// type dataprops={
//   categoryId:string
//   name:string
// }

const CourseList: React.FC = () => {
  // const courses = [
  //   { id: 1, courseType: "FrontEnd" },
  //   { id: 2, courseType: "BackEnd", image: image3 },
  //   { id: 3, courseType: "FrontEnd", image: image2 },
  //   { id: 4, courseType: "FrontEnd", image: image2 },
  // ];



  return (
    <div className="flex md:mt-0 mt-32 justify-center">
      <CourseListed />
      </div>
  ); 
};

export default CourseList;
