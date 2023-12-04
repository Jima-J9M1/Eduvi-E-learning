  interface Props {
    image: string;
    adName: string;
    cardName: string;
  }
  
  const CourseVideoSectionCard: React.FC<Props> = ({
    image,
    adName,
    cardName,
  }) => {
    return (
      <div className=" flex w-full">
        <div className=" w-full col-span-2 pr-4">
          <img className=" w-full max-h-16 rounded-md" src={image} alt={adName} />
        </div>
        <div className=" col-span-4 self-end w-full flex-row gap-0">
          <p className="text-xl">{cardName}</p>
        </div>
      </div>
    );
  };
  
  export default CourseVideoSectionCard;