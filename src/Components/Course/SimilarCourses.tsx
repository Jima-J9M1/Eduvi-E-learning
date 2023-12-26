import SimilarCourseCard from '../Common/Cards/SimilarCourseCard'
import img1 from '../../assets/images/Image (1).png'
import { ListCourses } from '../../Api/courselist-api';
import{ useMemo} from 'react';
import { NavLink,} from 'react-router-dom';

type categoryProps={
  catagory:string
  id:number
}

const SimilarCourses = ({catagory,id}:categoryProps) => {
  const {data:courseData} = ListCourses();
  const filteredCourses = useMemo(() => {
       const Courses= courseData?.courses.filter((course) => course.category===catagory && course.id!==id);
      if(Courses?.length<5){
        return Courses
      }else{
        const Length=Courses?.length
        const number=Math.floor(Math.random() *(Length-4));
             return Courses?.slice(number,number+4);
      }
  }, [courseData]);
   const currentCourses = filteredCourses
  const handleClick=(name:string)=>{
     window.location.href=`/courses/${name}`
  }
  return (
    <div >
        <p className='mt-3 text-2xl font-bold'> Similar Courses</p>
    <div className='md:grid md:grid-cols-2 gap-8 ml-3'>
          {currentCourses?currentCourses.map((course)=>(
              <NavLink to={`/courses/${course.name}`} state={{data:course}}  onClick={()=>handleClick(course.name)} >
               <SimilarCourseCard img={img1} title={course.name} price={course.price} rating={course.average_rating} thumbnail={course.thumbnail} />
               </NavLink>
         )):<h1 className="text-2xl border border-slate-600 ">No Course</h1> }
    </div>
    </div>
  )
}

export default SimilarCourses