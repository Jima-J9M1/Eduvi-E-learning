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
  const truncatedCardName =
    cardName.length > 15 ? cardName.substring(0, 15) + "..." : cardName;
  return (
    <div className=" w-[400px] h-auto rounded-md  grid  grid-flow-col grid-cols-5 gap-16 bg-white shadow-md text-opacity-50 p-2 ">
      <div className=" ">
        <img className=" max-w-[80px] max-h-16 rounded-md" src={image} alt={adName} />
      </div>
      <div className=" col-span-4  w-full flex-row gap-0">
        <p className="text-xl ">{truncatedCardName}</p>
        <p className="text-md text-orange-600">{duration}</p>
      </div>
    </div>
  );
};

export default CourseVideoSectionCard;
