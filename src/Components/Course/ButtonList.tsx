import { useEffect, useState } from 'react';
import CoursesButton from '../Buttons/CoursesButton';
import { ListCategories } from '../../Api/courselist-api';

type ButtonListProps = {
  handleButtonClick: (text: string) => void;
  activeButton: string;
  selectedCourseType:string;
};

const ButtonList: React.FC<ButtonListProps> = ({ handleButtonClick, activeButton,selectedCourseType }) => {

  const category = ListCategories().data?.data.categories;


  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div>
      {isSmallScreen ? 
      (
        <select
          value={selectedCourseType}
          onChange={(e) => handleButtonClick(e.target.value)}
          className='p-3 mx-20 rounded-2xl text-center bg-[#FF6652]'
        >
         { <option key='all_course' value="All Course" className='m-24'>
              All Course
          </option>}

          {category && category.map((name) => (
            <option key={name.categoryId} value={name.name} className='m-24'>
              {name.name}
            </option>
          ))}
        </select>
      ):
      (
        <div className="grid sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5 bg-blue pt-10 mt-10">
          {
            <CoursesButton
              key="all_course"
              text="All Course"
              color="#9C4DF4"
              active={activeButton === "All Courses"}
              handleClick={() => handleButtonClick('All Courses')}
            />
            }
        {category && category.map((name) => (
            <CoursesButton
              key={name.categoryId}
              text={name.name}
              active={activeButton === name.name}
              handleClick={() => handleButtonClick(name.name)}
            />
          )
        )}
      </div>
      )}
    </div>
  );
}

export default ButtonList;
