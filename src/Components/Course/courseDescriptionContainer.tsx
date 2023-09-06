import BreadcrumbTest from "../Common/Breadcrumbs";
import CoursePlaylists from "../Common/coursePlaylists";
import VideoPlayer from "../Common/videoPlayer";

const CourseDescriptionContainer = () => {
  return (
    <div className=" max-h-[640px] min-h-[400px] max-w-full p-6 grid  bg-[#efebf5] gap-4 rounded-3xl ">
      <div className=" grid grid-flow-col gap-4 w-full grid-cols-10">
        <div className=" grid gap-4  col-span-7">
          <div className="  h-[2px] pb-4 w-max  ">
            <BreadcrumbTest />
          </div>
          {/* <VideoPlayer /> */}
          <div className="bg-red-200">
            <p>hello video</p>
          </div>
        </div>
        <div className=" col-span-5">
          <CoursePlaylists />
        </div>
      </div>
    </div>
  );
};

export default CourseDescriptionContainer;
