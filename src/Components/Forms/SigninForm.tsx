import { yupResolver } from "@hookform/resolvers/yup";
import { Google } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import LabeledCheckbox from "../Common/Checkbox/LabeledCheckbox";
import EmailField from "../Common/Forms/EmailField";
import  { CityField, CountryField, DepartmentField, FirstName, GitLinkField, LastName, LinkdlnLinkField, PhoneNumberField, ProfileImgField, UniversityField } from "../Common/Forms/NameField";
import PasswordField from "../Common/Forms/PasswordField";
import {  useModal } from "../../Utils/Contexts/ModalContext";
import { useCreateCourseMutation } from "../../Api/user-api";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useLocation} from "react-router-dom";
import {Toaster,toast} from "react-hot-toast"
// import { useState } from "react";


/*
curl --location 'http://localhost:4000/student/register' \
--data-raw '{
  "first_name": "amanuel",
  "last_name": "wonde",
  "phone_number": "123456780",
  "email": "amanuellld@gmail.com",
  "password": "secretpassword",
  "country": "ethiopia",
  "city": "addis ababa",
  "university": "aastu",
  "department": "Software Engineering",
  "git_link": "https://github.com/johndoe",
  "linkdln_link": "https://www.linkedin.com/in/amanuel",
  "profile_img": "https://example.com/profile-image.jpg"
}'

*/
type userData = {
  first_name:string,
  last_name:string,
  email:string,
  password:string,
  phone_number:string,
  country:string,
  city:string,
  university:string,
  department:string,
  git_link:string,
  linkdln_link:string,
  profile_img:string
}
type props={
  onClose:React.Dispatch<React.SetStateAction<boolean>>
}
const SigninForm = ({onClose}:props) => {
   const navigate=useNavigate()
  const createCourseMutation = useCreateCourseMutation()
  const {setAuth } = useAuth()
  // const [modalOpen, isModalOpen] = useState(false)

  
  const schema = yup
    .object({
      first_name:yup.string().required(),
      last_name:yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
      phone_number: yup.string().length(10).required(),
      country: yup.string().required(),
      city: yup.string().required(),
      university: yup.string().required(),
      department: yup.string().required(),
      git_link: yup.string().url().required(),
      linkdln_link: yup.string().url().required(),
      profile_img: yup.string().url().required()
    })
    .required();


  type FormData = yup.InferType<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });


  const onSubmit = async (data: userData) => {
      const response = await createCourseMutation.mutateAsync(data);

      if(response.token){
      setAuth(response?.token)
      onClose((prev)=>!prev)
       return navigate("/") 
      }else{
        toast.error("some thing is wrong please try a gain");
        console.log("Error", response.error)
      }

      
      
  };

  const { setIsSignin } = useModal();

  return (
    <div className="md:flex md:flex-col md:gap-6">
      {/* Use Button from Nebil*/}
      <Button
        variant="outlined"
        className="border-2 border-solid  !border-slate-200 rounded-lg !text-slate-800 !normal-case"
      >
        <div className="bg-secondary w-fit p-2 rounded-lg mr-2">
          <Google className="text-white" />
        </div>{" "}
        Sign up with Google account
      </Button>
      <Divider>OR sign in with your email</Divider>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:flex sm:gap-8">
        <FirstName register={register} error={errors.first_name?.message} />
        <LastName register={register} error={errors.last_name?.message} />
        </div>
        <div className="sm:flex sm:gap-8">
        <EmailField register={register} error={errors.email?.message} />
        <PasswordField register={register} error={errors.password?.message} />
        </div>

        <div className="sm:flex sm:gap-8">
          <PhoneNumberField register={register} error={errors.phone_number?.message} />
          <UniversityField register={register} error={errors.university?.message} />
        </div>

        <div className="sm:flex sm:gap-8">
          <CityField register={register} error={errors.city?.message} />
          <DepartmentField register={register} error={errors.department?.message} />
        </div>


        <div className="sm:flex sm:gap-8">
          <GitLinkField register={register} error={errors.git_link?.message} />
          <LinkdlnLinkField register={register} error={errors.linkdln_link?.message} />
        </div>


        <div className="sm:flex sm:gap-8">
          <CountryField register={register} error={errors.country?.message} />
          <ProfileImgField register={register} error={errors.profile_img?.message} />
        </div>



        <LabeledCheckbox
          label={
            <label className="text-sm italic font-light text-slate-500">
              I agree to the{" "}
              <span className="text-slate-800">terms and conditions</span>
            </label>
          }
          require = {false}
        />
        <Button
          type="submit"
          variant="contained"
          disableElevation
          className="!bg-primary"
        >
          Submit
        </Button>
        <Toaster
       position="top-center"
       reverseOrder={false}
      />
      </form>
      <p className="text-sm italic font-light text-slate-500 self-center">
        Already have account?{" "}
        <span
          className="text-primary cursor-pointer"
          onClick={() => setIsSignin(false)}
        >
          Sign in
        </span>{" "}
      </p>
    </div>
  );
};

export default SigninForm;
