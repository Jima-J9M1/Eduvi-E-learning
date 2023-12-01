import React from "react";
import VisitButton from "../Buttons/VisitButton";
import { ListCategories } from "../../Api/courselist-api";
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


const{data:categoryData}=ListCategories()

  return (
    <div className="mt-24">
      <div className="flex sm:justify-start lg:justify-end mb-catb-pos mr-cat-pos ml-cat-pos">
        <div className="flex sm:justify-end  justify-around w-full ">
          <select className="p-2 rounded bg-[#7c3aed] text-white sm:mx-4">
            <option selected disabled>Categories</option>
            {categoryData && categoryData.data && categoryData.data.categories.map((d)=>{
                     return <option value={d.categoryId} key={d.categoryId}>{d.name} what</option>
            })}
          </select>  
          <VisitButton text = "Visit More Courses" />
        </div>
      </div>
      <CourseListed />
      </div>
  );
};

export default CourseList;
