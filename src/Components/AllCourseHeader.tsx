import image from '../assets/images/Image.svg';
import pattern from '../assets/images/Pattern.svg';


const AllCourseHeader = () => (
    <div className = "sm:grid sm:grid-cols-2 sm:justify-center sm:gap-4 flex-col justify-center">
    <div className="flex  font-open-sans text-4xl italic font-light leading-10 tracking-normal text-left pt-20 pr-10 pb-10">
    <p className = "text-quote-title-color" >Courses <br />For All Standards</p>
    </div>
    <div className = "m-5 ml-20">
    <div className=" relative flex">
      <img src={pattern} className="absolute inset-0 z-0" alt="Pattern" />
      <img src={image} className="relative z-10" alt="Image" />
    </div>
    </div>
</div>
)

export default AllCourseHeader;