import { yupResolver } from "@hookform/resolvers/yup";
import { Google } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useModal } from "../../Utils/Contexts/ModalContext";
import LabeledCheckbox from "../Common/Checkbox/LabeledCheckbox";
import EmailField from "../Common/Forms/EmailField";
import PasswordField from "../Common/Forms/PasswordField";

const SignupForm = () => {
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
  const onSubmit = (data: any) => console.log(data);

  const { setIsSignin } = useModal();

  return (
    <div className="flex flex-col gap-6">
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
        <EmailField register={register} error={errors.email?.message} />
        <PasswordField register={register} error={errors.password?.message} />
        <div className="flex flex-row justify-between">
          <LabeledCheckbox
            label={
              <label className="text-sm italic font-light text-slate-500">
                Keep me signed in
              </label>
            }
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
          Sign in
        </span>{" "}
      </p>
    </div>
  );
};

export default SignupForm;
