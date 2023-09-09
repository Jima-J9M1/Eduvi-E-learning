import TestimonialSampleImages from "../../../assets/images/TestimonialSampleImg.svg";
import { TestimonialProps } from "../../../types";

const Testimonial = ({
  img = TestimonialSampleImages,
  testimonial = `Materi yang disampaikan mudah dimengerti,
                   kualitas instruktur sangat baik serta  responnya yang cepat.
                   So, kursus disini sangat sangat saya rekomendasikan!!`,
  name = "John Doe",
  occupation = "Vice President",
}: TestimonialProps) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-24 bg-testimonial-card items-center xl:p-12 p-3 rounded-3xl drop-shadow-lg  mx-auto mb-4 sm:w-3/4">
      <img src={img} alt={name} className="w-1/3 sm:w-2/5 md:w-3/6 lg:w-2/6 xl:w-1/4" />
      <div className="flex flex-col gap-4  xl:w-2/3">
        <p className="xl:text-2xl font-medium text-justify">
          {`"` + testimonial + ` "`}
        </p>
        <div className="flex flex-col w-fit mt-3">
          <p className="w-fit text-md font-medium">{name}</p>
          <p className="w-fit text-md">{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
