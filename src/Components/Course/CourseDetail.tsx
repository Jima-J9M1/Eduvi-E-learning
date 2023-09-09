interface Course {
  
  title: string;
  description: string;
  topics: Topic[];

}
interface DescriptionProps {
  description: string; 
}
interface Topic {
  id: string;
  name: string;
  description: string;
}

interface Instructor {
  name: string;
  bio: string;
}

interface CourseDetailsProps {
  course:Course;
}


const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {

    return (
    <div className="p-8">
       <div className="font-bold text-3xl">CourseDetail</div>
       <Description description={course.description} />
      <TopicsList topics={course.topics} />
    </div>
  )
}

const Description = ({ description}: DescriptionProps) => (
  <p className="text-gray-600">{description}</p>
)

const TopicsList = ({topics}: {topics: Topic[]}) => (
  <div>
    {topics.map(topic => (
      <Topic key={topic.id} topic={topic} />
    ))}
  </div>
)

const Topic = ({topic}: {topic: Topic}) => (
  <div className="mb-4">
    <h3 className="text-lg font-bold">{topic.name}</h3>
    <p>{topic.description}</p>
  </div>
)
export default CourseDetails;
