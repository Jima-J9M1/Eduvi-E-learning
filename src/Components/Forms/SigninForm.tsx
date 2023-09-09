import { yupResolver } from "@hookform/resolvers/yup";
import { Google } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import LabeledCheckbox from "../Common/Checkbox/LabeledCheckbox";
import EmailField from "../Common/Forms/EmailField";
import NameField from "../Common/Forms/NameField";
import PasswordField from "../Common/Forms/PasswordField";
import { useModal } from "../../Utils/Contexts/ModalContext";

const SigninForm = () => {
  const schema = yup
    .object({
      fullname: yup.string().required(),
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
        <NameField register={register} error={errors.fullname?.message} />
        <EmailField register={register} error={errors.email?.message} />
        <PasswordField register={register} error={errors.password?.message} />
        <LabeledCheckbox
          label={
            <label className="text-sm italic font-light text-slate-500">
              I agree to the{" "}
              <span className="text-slate-800">terms and conditions</span>
            </label>
          }
        />
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
