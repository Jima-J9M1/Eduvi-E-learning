
import SimilarCourseCard from '../Common/Cards/SimilarCourseCard'
import img1 from '../../assets/images/Image (1).png'
import img2 from '../../assets/images/Image (3).png'
import img3 from '../../assets/images/Image (4).png'
import img4 from '../../assets/images/Image (2).png'

type Props = {}

function SimilarCourses({}: Props) {
  return (
    <div className='mx-10'>
    <p className="text-3xl font-bold py-12 ml-10">
        Similar Courses
      </p>
    <div className='grid grid-cols-2 gap-8 ml-3'>
        <SimilarCourseCard img={img1}/>
        <SimilarCourseCard img={img2}/>
        <SimilarCourseCard rating={3} img={img3}/>
        <SimilarCourseCard rating={2} img={img4}/>
    </div>
    </div>
  )
}

export default SimilarCourses