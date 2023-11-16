import React from "react";
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import VisitButton from "../Buttons/VisitButton";
import CourseListComponents from "../CourseListComponent";
import { useCourseCategorie } from "../../Api/courselist-api";
type dataprops={
  categoryId:string
  name:string
}

const CourseList: React.FC = () => {
  const courses = [
    { id: 1, courseType: "FrontEnd" },
    { id: 2, courseType: "BackEnd", image: image3 },
    { id: 3, courseType: "FrontEnd", image: image2 },
    { id: 4, courseType: "FrontEnd", image: image2 },
  ];

 const props={
    onSuccess:(data)=>{
    return console.log(data);
   
},
onError:(error)=>{
  return console.log(error);
  
}
}
const{data}=useCourseCategorie(props)


  return (
    <div className="mt-24">
      <div className="flex sm:justify-start lg:justify-end mb-catb-pos mr-cat-pos ml-cat-pos">
        <div className="flex sm:justify-end  justify-around w-full ">
          <select className="p-2 rounded bg-[#7c3aed] text-white sm:mx-4">
            <option selected disabled>Categories</option>
            {data?.map((d:dataprops)=>{
                     <option value={d.categoryId}>{d.name}</option>
            })}
          </select>  
            
          <VisitButton text = "Visit More Courses" />
        </div>
      </div>
      <CourseListComponents courses={courses} />
      </div>
  );
};

export default CourseList;
