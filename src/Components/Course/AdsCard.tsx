
interface Props {
  image: string;
  adName: string;
}

const AdsCard: React.FC<Props> = ({ image, adName }) => {
  return (
    <div className="flex justify-center items-start max-w-[390px] h-min overflow-hidden bg-white">
      <img src={image} alt={adName} className="w-full h-auto object-contain" />
    </div>
  );
};

export default AdsCard;
// 'width: 
// height: 444px
// top: 810px
// left: 970px
// border-radius: 10px
// 'C:\Users\Daneil\Desktop\Eduvi-E-Learning\Eduvi-E-learning\src\assets\images\kfc_add.webp