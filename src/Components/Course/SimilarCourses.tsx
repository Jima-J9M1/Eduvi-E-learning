import SimilarCourseCard from '../Common/Cards/SimilarCourseCard'
import img1 from '../../assets/logo/mss 1.png'
import { ListCourses } from '../../Api/courselist-api';
import{ useMemo,useState} from 'react';
import { NavLink,} from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import EmptyCategoriy from './EmptyCategoriy';

type categoryProps={
  catagory:string
  id:number
}

const SimilarCourses = ({catagory,id}:categoryProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const coursesPerPage = 4;
  const {data:courseData} = ListCourses();
  const filteredCourses = useMemo(() => {
    return courseData?.courses.filter((course) => course.category === catagory && course.id!==id);
  }, [courseData]);
  const totalCourses = filteredCourses?.length || 0;
  const totalPages = Math.ceil(totalCourses / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses?.slice(indexOfFirstCourse, indexOfLastCourse);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };
  const handleClick=(name:string)=>{
     window.location.href=`/courses/${name}`
  }
  const paginationStyle = useMemo(() => ({
    '& .MuiPaginationItem-root': {
      border: 'none',
    },
    '& .Mui-selected': {
      backgroundColor: '#FCD980',
      color: '#3446eb',
    },
  }), []);

  const L=currentCourses?.length
  if(L===0) return <EmptyCategoriy />
  return (
    <div >
        <p className='mt-3 text-2xl font-bold'> Similar Courses</p>
    <div className='md:grid md:grid-cols-2 gap-8 ml-3'>
          {currentCourses?currentCourses.map((course)=>(
              <NavLink to={`/courses/${course.name}`} state={{data:course}}  onClick={()=>handleClick(course.name)} >
                <SimilarCourseCard img={img1} title={course.name} price={course.price} rating={course.average_rating} thumbnail={course.thumbnail?course.thumbnail:img1} />
               </NavLink>
         )):<h1 className="text-2xl border border-slate-600 ">No Course</h1> }
    </div>
    <div className='flex justify-center'>
    <Pagination
          sx={paginationStyle}
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          hidePrevButton
          hideNextButton
        />
     </div>
    </div>
  )
}

export default SimilarCourses