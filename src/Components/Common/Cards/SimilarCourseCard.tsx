import RatingCard from "./RatingCard"




function SimilarCourseCard({
    img,
    title='The There Musketeers',
    price=40.00,
    rating=5
    }: SimilarCoursesProps) {
  return (
    <div className="flex flex-row p-4 rounded-lg bg-white gap-4">
        <div>
            <img src={img} alt="course profile" />
        </div>
        <div>
            <h1 className="mb-5 text-2xl font-extralight italic">{title}</h1>
            <p className=" text-xl font-extralight italic text-red-500">{`$${price}`}</p>
            <RatingCard rating={rating}/>
        </div>
    </div>
  )
}

export default SimilarCourseCard