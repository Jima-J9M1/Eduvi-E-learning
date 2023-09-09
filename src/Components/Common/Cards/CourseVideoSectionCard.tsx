interface Props {
    image: string;
    adName: string;
    cardName: string;
    duration: string;
  }
  
  const CourseVideoSectionCard: React.FC<Props> = ({
    image,
    adName,
    cardName,
    duration,
  }) => {
    return (
      <div className=" w-[400px] h-auto p-3 rounded-md  grid  grid-flow-col ">
        <div className=" w-full col-span-2 pr-4">
          <img className=" w-full max-h-16 rounded-md" src={image} alt={adName} />
        </div>
        <div className=" col-span-4 self-end w-full flex-row gap-0">
          <p className="text-xl ">{cardName}</p>
          <p className="text-md text-orange-600">{duration}</p>
        </div>
      </div>
    );
  };
  
  export default CourseVideoSectionCard;