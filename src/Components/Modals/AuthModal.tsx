import { Divider, Modal } from "@mui/material";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useModal } from "../../Utils/Contexts/ModalContext";
import Dictionary from "../../assets/illustrations/Dictionary.svg";
import OnlineLearning from "../../assets/illustrations/Online_learning.svg";
import Thesis from "../../assets/illustrations/Thesis.svg";
import MSSLogo from "../../assets/logos/mss logo.svg";
import "../Common/Carousel/pagination.css";
import SigninForm from "../Forms/SigninForm";
import SignupForm from "../Forms/SignupForm";

const Carousel = () => {
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
    event: React.MouseEvent<Element, MouseEvent>,
    reason: "backdropClick" | "escapeKeyDown"
  ) => void;
}) => {
  const { isSignin } = useModal();

  return (
    <Modal
      open={open}
      onClose={onClose}
      className="flex justify-center items-center"
    >
      <div className="flex flex-row gap-24 justify-center items-center bg-white p-24 rounded-2xl">
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
    </Modal>
  );
};

export default AuthModal;
