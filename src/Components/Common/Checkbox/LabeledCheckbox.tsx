import { Checkbox } from "@mui/material";
import { ReactNode } from "react";

const LabeledCheckbox = ({ label }: { label: ReactNode }) => {
  return (
    <div>
      <Checkbox className="w-fit !text-primary" required />
      {label}
    </div>
  );
};

export default LabeledCheckbox;
