import logo from '../../../assets/logo/mss 1.png'

  
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
      <div className=" flex  w-full  items-center  rounded-2xl border  border-gray-300 ">
          <div className="rounded-full   overflow-hidden w-[90px] h-[70px]">
          <img  src={image} 
          
          onError={(e:React.SyntheticEvent<HTMLImageElement, Event>)=>{
            const target = e.target as HTMLImageElement
            target.onerror = null; 
            target.src = logo
            }}
          alt={adName} width={90} height={90} className="w-90px] h-[80px]  object-scale-down object-[-50%,30%]" />
          </div>
          <p className="text-xl text-gray-700">{cardName? cardName : "Micro sun solution course material"}</p>
      </div>
    );
  };
  
  export default CourseVideoSectionCard;