import React from 'react';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import imagee from '../../assets/images/imagee.jpg';
import {CourseCardProps} from '../types';


const CourseCard: React.FC<CourseCardProps> = ({
  image = imagee,
  rating = 4.9,
  description = `Materi pembelajarn mengenai pembuatan website tingkat pemula`,
  videos = 20,
  duration = 4.5,
  name = `Dasar Pemrograman WEB`,
  students = 1900,
  id = 1,
}) => {
  const handleClick = (Id: number) => {
    console.log(Id);
  };


  return (
    <div 
    onClick={() => handleClick(id)} className="card bg-card-bg w-card-width h-card-height relative rounded-lg overflow-hidden">
      <img src={image} alt="The course pic" className="w-card-width h-image-height" />
        <div className="rating w-rating-width h-rating-height bg-rating-color flex justify-center items-center text-white absolute  bottom-rating-bottom right-2 rounded-2xl overflow-hidden">
        <StarRateRoundedIcon className="text-yellow-500" />{rating}
        </div>
        <div className="details flex flex-col pt-2 pl-4 pr-4 gap-5">
        <h4 className="font-medium font-poppins text-xl leading-9 tracking-tighter text-left text-[#282938]  w-354 h-34 top-783 left-85">{name}</h4>
        <p className="font-regular text-base font-poppins font-normal leading-6  text-desc-color text-opacity-80 text-justify">{description}</p>
        <div className="info  flex justify-between font-regular text-base font-poppins font-normal leading-6 text-desc-color text-opacity-80">
        <div><AccessTimeIcon className = "text-icon-color-opacity-80" />{duration} Jam</div>
        <div>{videos} Videos</div>
        <div><PeopleAltOutlinedIcon className = "text-icon-color-opacity-80" />{students} Siswa</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
