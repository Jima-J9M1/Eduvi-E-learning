import React, { useState, useMemo} from 'react';
import { NavLink } from 'react-router-dom';
import CourseCard from '../Common/CourseCard';
import Pagination from '@mui/material/Pagination';
import ButtonList from './ButtonList';

import image3 from '../../assets/images/image2.jpg';
import image2 from '../../assets/images/image3.jpg';
import a from '../../assets/images/a.svg';
import b from '../../assets/images/b.svg';
import c from '../../assets/images/c.svg';
import d from '../../assets/images/d.svg';
import e from '../../assets/images/e.svg';
import f from '../../assets/images/f.svg';

type Course = {
  id: number;
  courseType: string;
  image?: string;
};

const CousesListed: React.FC = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const courses: Course[] = [
    { id: 1, courseType: "High School" },
    { id: 5, courseType: "Engineering", image: a },
    { id: 6, courseType: "College", image: b },
    { id: 7, courseType: "College", image: c },
    { id: 8, courseType: "High School", image: d },
    { id: 9, courseType: "Computer", image: e },
    { id: 10, courseType: "Science", image: f },
    { id: 11, courseType: "College", image: a },
    { id: 12, courseType: "Kindergarten", image: image2 },
    { id: 4, courseType: "Science", image: a },
    { id: 2, courseType: "Computer", image: a },
    { id: 3, courseType: "Kindergarten", image: image3 },
    { id: 13, courseType: "High School" },
    { id: 14, courseType: "Engineering", image: b },
    { id: 15, courseType: "College", image: c },
    { id: 16, courseType: "Computer" },
    { id: 17, courseType: "Computer", image: d },
    { id: 18, courseType: "Science", image: f },
  ];

  const [selectedCourseType, setSelectedCourseType] = useState<string>('All Courses');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const coursesPerPage = 9;

  const handleButtonClick = (courseType: string) => {
    setSelectedCourseType(courseType);
    setCurrentPage(1);
  };

  const filteredCourses = useMemo(() => {
    if (selectedCourseType === 'All Courses') {
      return courses;
    } else {
      return courses.filter((course) => course.courseType === selectedCourseType);
    }
  }, [courses, selectedCourseType]);

  const totalCourses = filteredCourses.length;
  const totalPages = Math.ceil(totalCourses / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const paginationStyle = useMemo(() => ({
    '& .MuiPaginationItem-root': {
      border: 'none',
    },
    '& .Mui-selected': {
      backgroundColor: '#FCD980',
      color: '#FFFFFF',
    },
  }), []);

  return (
    <div>
      <ButtonList handleButtonClick={handleButtonClick} activeButton={selectedCourseType} />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 mb-10 sm:pl-20 md:pl-0 lg:pl-0">
        {currentCourses.map((course) => (
                  
            <NavLink to={`/Course/${course.id}`}>
            <CourseCard
              id={course.id}
              key={course.id}
              courseType={course.courseType}
              image={course.image} 
            />
          </NavLink>
        ))}
      </div>

      <div className="flex justify-center">
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
  );
}

export default CousesListed;
