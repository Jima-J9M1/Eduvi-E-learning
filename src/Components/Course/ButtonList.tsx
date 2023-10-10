import { useEffect, useState } from 'react';
import CoursesButton from '../Buttons/CoursesButton';

type ButtonListProps = {
  handleButtonClick: (text: string) => void;
  activeButton: string;
  selectedCourseType:string;
};

const ButtonList: React.FC<ButtonListProps> = ({ handleButtonClick, activeButton,selectedCourseType }) => {
  const names = [
    "All Courses",
    "Kindergarten",
    "High School",
    "College",
    "Computer",
    "Science",
    "Engineering",
    "More Courses"
  ];

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
          {names.map((name) => (
            <option key={name} value={name} className='m-24'>
              {name}
            </option>
          ))}
        </select>
      ):
      (
        <div className="grid sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5 bg-blue pt-10 mt-10">
        {names.map((name) => (
          name === 'More Courses' ? (
            <CoursesButton
              key={name}
              text={name}
              color="#9C4DF4"
              active={activeButton === name}
              handleClick={() => handleButtonClick(name)}
            />
          ) : (
            <CoursesButton
              key={name}
              text={name}
              active={activeButton === name}
              handleClick={() => handleButtonClick(name)}
            />
          )
        ))}
      </div>
      )}
    </div>
  );
}

export default ButtonList;
