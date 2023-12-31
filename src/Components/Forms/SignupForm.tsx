import { yupResolver } from "@hookform/resolvers/yup";
import { Google } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useModal } from "../../Utils/Contexts/ModalContext";
import LabeledCheckbox from "../Common/Checkbox/LabeledCheckbox";
import EmailField from "../Common/Forms/EmailField";
import PasswordField from "../Common/Forms/PasswordField";
import { useLoginCourseMutation, userLogin } from "../../Api/user-api";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignupForm = () => {

  const loginCourseMutation = useLoginCourseMutation()
  const {setAuth} = useAuth()

  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
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
  const onSubmit = async (data: userLogin) =>{

     const response = await loginCourseMutation.mutateAsync(data)
     



    //  const open = ()=>{
    //  isModalOpen(!modalOpen)
    //  }

     if(response.token){

      setAuth(response?.token)

    }else{
      
      console.log("Error", response.error)

    }

  }

  const { setIsSignin } = useModal();

  return (
    <div className="md:flex md:flex-col md:gap-6">
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
        <EmailField register={register} error={errors.email?.message} />
        <PasswordField register={register} error={errors.password?.message} />
        <div className="flex flex-row justify-between">
          <LabeledCheckbox
            
            label={
              <label className="text-sm italic font-light text-slate-500">
                Keep me signed in
              </label>
            }

            require = {true}
          />
          <Link to="" className="self-center">
            <p className="text-sm italic font-light text-slate-600">
              {" "}
              Forgot Passwrd?
            </p>
          </Link>
        </div>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          className="!bg-primary"
        >
          Submit
        </Button>
      </form>
      <p className="text-sm italic font-light text-slate-500 self-center">
        Don't have an account?{" "}
        <span
          className="text-primary cursor-pointer"
          onClick={() => setIsSignin(true)}
        >
          Sign up
        </span>{" "}
      </p>
    </div>
  );
};

export default SignupForm;
