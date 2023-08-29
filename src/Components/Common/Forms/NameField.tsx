import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { FC } from "react";

const NameField: FC<PasswordFieldProps> = ({ register, error }) => {
  return (
    <div>
      <label htmlFor="fullname">Full name</label>
      <div className="flex border-2 border-solid border-slate-200 rounded-lg px-4 py-2 gap-6">
        <PersonOutlinedIcon className="text-slate-300" />
        <input
          type="text"
          placeholder="Ester Howard"
          className="outline-none"
          required
          {...register("fullname")}
        />
      </div>
      <div className="text-red-500">{error}</div>
    </div>
  );
};

export default NameField;
