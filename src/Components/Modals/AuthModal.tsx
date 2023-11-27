import { Divider, Modal } from "@mui/material";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useModal } from "../../Utils/Contexts/ModalContext";
import ClearIcon  from '@mui/icons-material/Clear'
import Dictionary from "../../assets/illustrations/Dictionary.svg";
import OnlineLearning from "../../assets/illustrations/Online_learning.svg";
import Thesis from "../../assets/illustrations/Thesis.svg";
import MSSLogo from "../../assets/logos/mss logo.svg";
import "../Common/Carousel/pagination.css";
import SigninForm from "../Forms/SigninForm";
import SignupForm from "../Forms/SignupForm";
export const Carousel = () => {
  const items = [
    {
      img: Dictionary,
      alt: "Dictionary",
    },
    {
      img: OnlineLearning,
      alt: "Online Learning",
    },
    {
      img: Thesis,
      alt: "Thesis",
    },
  ];
  return (
    <div>
      <Splide
        options={{
          type: "loop",
          gap: "1rem",
          arrows: false,
          classes: {
            pagination: "custom-pagination",
          },
          speed: 400,
          autoplay: {
            enabled: true,
            pauseOnHover: true,
          },
        }}
      >
        {items.map((item) => {
          return (
            <SplideSlide key={item.alt}>
              <img src={item.img} alt={item.alt} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

const AuthModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: (
    event: React.MouseEvent,
    reason: "backdropClick" | "escapeKeyDown"| "userClick"
  ) => void;
}) => {
  const { isSignin } = useModal();

  return (
    <Modal
      open={open}
      onClose={onClose}
      className="md:flex md:justify-center md:items-center overflow-scroll "
    >
      <div className="sm:pt-64  bg-white ">
      <div className="w-fit mx-0 mr-16 float-right" onClick={(event) => onClose(event, 'userClick')}><ClearIcon fontSize="large" className="sm:hidden cursor-pointer hover:bg-yellow-200 hover:text-slate-600 hover:rounded-full" /></div>
      <div className="sm:flex sm:flex-row sm:gap-24 sm:justify-center sm:items-center bg-white rounded-2xl m-2 mt-16">
        <div className="flex flex-col w-fit gap-6">
          <img src={MSSLogo} className="w-1/6" />
          <p className="text-4xl font-bold w-fit">
            Welcome to
            <br /> Eduvi Online
            <br /> Learning Platform
          </p>
          <Carousel />
        </div>
        <Divider orientation="vertical" className="" />
        {isSignin ? <SigninForm /> : <SignupForm />}
      </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
