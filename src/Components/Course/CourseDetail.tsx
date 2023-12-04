import React from 'react';

type courseDetail = {
  description:string,
  target_audience:string,
  name:string
}
const CourseDetail: React.FC<courseDetail>= ({
  description,
  target_audience,
  name,
}:courseDetail) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3 p-8">
      <h2 className="font-bold text-2xl">Course Details</h2>
        <p className="text-md mb-4">
          {description}
        </p>
      <h2 className="font-bold text-2xl">Who this course is for</h2>
        <p className="text-md mb-4">
        {target_audience}
        </p>
       
      <h2 className="font-bold text-2xl">What you will learn in this course:</h2>
        <div  className="text-md mb-4">
          {name}
        </div>
       
      </div>
      
    </div>
   

  );
};

export default CourseDetail;

