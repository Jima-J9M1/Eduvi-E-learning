import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FC, useEffect, useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton } from "@mui/material";

const PasswordField: FC<PasswordFieldProps> = ({ register, error }) => {
  const [Icon, setIcon] = useState<FC>(VisibilityOffOutlinedIcon);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (visible) {
      setIcon(VisibilityOutlinedIcon);
    } else {
      setIcon(VisibilityOffOutlinedIcon);
    }
  }, [visible]);

  return (
    <div>
      <label htmlFor="password">Password</label>
      <div className="flex border-2 border-solid border-slate-200 rounded-lg px-4 gap-6">
        <LockOutlinedIcon className="text-slate-300 self-center" />
        {!visible ? (
          <input
            type="password"
            className="outline-none"
            required
            placeholder="********"
            {...register("password")}
          />
        ) : (
          <input
            type="text"
            className="outline-none"
            required
            placeholder="********"
            {...register("password")}
          />
        )}

        <IconButton onClick={() => setVisible((prev) => !prev)}>
          <Icon />
        </IconButton>
      </div>
      <div className="text-red-500">{error}</div>
    </div>
  );
};

export default PasswordField;
