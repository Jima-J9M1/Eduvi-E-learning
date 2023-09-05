import CourseVideoSectionCard from "./Cards/courseVideoSectionCard";
import vite from "../../assets/images/Image (1).png";

const CoursePlaylists = () => {
  return (
    <div className="grid gap-2">
      <p className=" font-sans text-base italic font-light leading-8 tracking-normal text-left text-indigo-900">
        Course Playlists
      </p>
      <div className="grid gap-2">
        <CourseVideoSectionCard
          image={vite}
          adName="all"
          cardName="Maths - for Standard 3 St.."
          duration="5:30"
        />
        <CourseVideoSectionCard
          image={vite}
          adName="all"
          cardName="Maths - for Standard 3 St.."
          duration="5:30"
        />
        <CourseVideoSectionCard
          image={vite}
          adName="all"
          cardName="Maths - for Standard 3 St.."
          duration="5:30"
        />
        <CourseVideoSectionCard
          image={vite}
          adName="all"
          cardName="Maths - for Standard 3 St.."
          duration="5:30"
        />
        <CourseVideoSectionCard
          image={vite}
          adName="all"
          cardName="Maths - for Standard 3 St.."
          duration="5:30"
        />
      </div>
    </div>
  );
};

export default CoursePlaylists;
