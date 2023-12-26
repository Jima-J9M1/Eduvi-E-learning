import { SimilarCoursesProps } from "../../../types";
import RatingCard from "./RatingCard";
import image from '../../../assets/logo/mss 1.png'


function SimilarCourseCard({
  title,
  price,
  rating,
  thumbnail,
}: SimilarCoursesProps) {
  return (
    <div className="flex flex-row p-4 rounded-lg bg-white gap-4 mx-10  " >
      <div>
        <img src={thumbnail} alt="course profile" width="200px" height="200px"
         onError={(e:React.SyntheticEvent<HTMLImageElement, Event>)=>{
          const target = e.target as HTMLImageElement
          target.onerror = null; 
          target.src = image
          }}
        />
      </div>
      <div>
        <h1 className="mb-5 text-2xl font-extralight italic">{title}</h1>
        <p className=" text-xl font-extralight italic text-red-500">{`$${price}`}</p>
        <RatingCard rating={rating} />
      </div>
    </div>
  );
}

export default SimilarCourseCard;
