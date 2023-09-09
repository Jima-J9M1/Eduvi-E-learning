interface Props {
    image: string;
    adName: string;
  }
  
  const AdsCard: React.FC<Props> = ({ image, adName }) => {
    return (
      <div className="flex justify-center items-center w-[150px] h-auto overflow-hidden p-2">
        <img src={image} alt={adName} className="w-full h-full object-contain" />
      </div>
    );
  };
  
  export default AdsCard;
