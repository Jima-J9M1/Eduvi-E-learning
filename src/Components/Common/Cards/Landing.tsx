
import InternButton from "../../Buttons/InternButton";

// import blueScreen from "./assets/images/rect.png";
import whiteScreen from "../../../assets/images/screen.png"


const Landing = () => {
  return (
    <div>
      <div className="">
      {/* //after navbar */}
      <div className="flex flex-col sm:flex-row px-4 sm:px-10 sm:mt-32 container mx-auto mt-32">
        {/* //never */}
        <div className="pl-6 basis-1/2 container mx-auto flex-col ">
          <div className="inline-block flex-grow top-168 left-54 rounded-10 bg-white rounded-xl">
            <h3 className="font-sans text-red-600 px-6 py-4 italic font-light leading-7 tracking-normal text-2xl">
              Never Stop Learning
            </h3>
          </div>
          <div className="">
            <h1 className="flex-auto leading-[75px] font-sans text-7xl font-bold text-left text-blue-900">
              Grow up your skills
               by online courses with MSS
            </h1>
          </div>
          <div className="inline-block mt-5 mb-5 sm:mt-60 sm:ml-24 rounded-lg shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700">
            <InternButton text="Apply to internship" />
          </div>
        </div>
        {/* animated */}
        <div className="sm:p-5 sm:mt-16   basis-1/2 container mx-auto  rounded-lg shadow-2xl bg-blue-900">
          {/* <img className="w-full h-full object-cover" src={blueScreen} alt="" /> */}
          <img className=" w-full h-full object-cover hover:animate-trans-right " src={whiteScreen}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Landing
