import vite from "../../assets/images/Image (1).png";
import CourseVideoSectionCard from "./Cards/courseVideoSectionCard";

const CoursePlaylists = () => {
  return (
    <div className="grid gap-2 ">

      <div className="grid gap-2 ">
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
