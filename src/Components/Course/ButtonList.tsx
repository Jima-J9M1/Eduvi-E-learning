import CoursesButton from '../Buttons/CoursesButton';

type ButtonListProps = {
  handleButtonClick: (text: string) => void;
  activeButton: string;
};

const ButtonList: React.FC<ButtonListProps> = ({ handleButtonClick, activeButton }) => {
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

  return (
    <div className="grid sm:grid-cols-4 lg:grid-cols-8 gap-5 bg-blue pt-10 mt-10">
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
  );
}

export default ButtonList;
