import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { FC } from "react";

const EmailField: FC<PasswordFieldProps> = ({ register, error }) => {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <div className="flex border-2 border-solid border-slate-200 rounded-lg px-4 py-2 gap-6">
        <EmailOutlinedIcon className="text-slate-300" />
        <input
          type="email"
          placeholder="ester@gmail.com"
          className="outline-none"
          required
          {...register("email")}
        />
      </div>
      <div className="text-red-500">{error}</div>
    </div>
  );
};

export default EmailField;
