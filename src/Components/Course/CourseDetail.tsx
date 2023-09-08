import React from 'react';

const CourseDetail: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-8">
        <h1 className="text-4xl font-bold mb-4">Course Details</h1>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis euismod ligula, id imperdiet nisi
          consequat quis. Aliquam erat volutpat. Nulla facilisi. Nunc sit amet semper justo. Fusce ultrices tempus
          ultrices. Morbi dapibus orci id lectus tincidunt facilisis. Etiam ac tristique risus, et sodales lectus.
        </p>
        <p className="text-lg mb-4">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla vel
          hendrerit mauris. Nulla venenatis diam a tortor porttitor, sit amet dapibus ante efficitur. Sed id
          consectetur sem, eu finibus odio. Sed tempor at nunc sed fermentum. Nulla facilisi.
        </p>
      </div>
      
    </div>
  );
};

export default CourseDetail;


// // import { Course } from './types';




// interface Course {
  
//   title: string;
//   description: string;
//   topics: Topic[];

// }
// interface DescriptionProps {
//   description: string; 
// }
// interface Topic {
//   id: string;
//   name: string;
//   description: string;
// }

// interface Instructor {
//   name: string;
//   bio: string;
// }




// interface CourseDetailsProps {
//   course:Course;
// }


// const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {

//     return (
//     <div className="p-8">
//        <div className="font-bold text-3xl">CourseDetail</div>
//        <Description description={course.description} />
//       <TopicsList topics={course.topics} />
//     </div>
//   )
// }

// const Description = ({ description}: DescriptionProps) => (
//   <p className="text-gray-600">{description}</p>
// )

// const TopicsList = ({topics}: {topics: Topic[]}) => (
//   <div>
//     {topics.map(topic => (
//       <Topic key={topic.id} topic={topic} />
//     ))}
//   </div>
// )

// const Topic = ({topic}: {topic: Topic}) => (
//   <div className="mb-4">
//     <h3 className="text-lg font-bold">{topic.name}</h3>
//     <p>{topic.description}</p>
//   </div>
// )
// export default CourseDetails;