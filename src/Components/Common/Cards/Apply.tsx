
import ApplyButton from "../../Buttons/ApplyButton";


const Apply = () => {
  return (
    <>
       <div className=" sm:m-32 m-8 p-8 flex flex-col sm:flex-row rounded-2xl bg-green-100 shadow-2xl text-black40 ">
        <div className="sm:basis-3/4 basis-1/2  grow-0" >
          <h2 className="font-sans text-4xl font-bold text-blue-900 leading-relaxed">
          Currently internships are available in front-end, back-end, mobile and graphics design. If you are interested, hit the green button now!
          </h2>
        </div>
        <div className="font-sans inline-block  sm:ml-32 sm:mt-32 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700">
          <ApplyButton text="Apply"/>
        </div>
      </div>
    </>
    
  )
}

export default Apply
