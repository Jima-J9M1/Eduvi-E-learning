import { Checkbox } from "@mui/material";
import { ReactNode } from "react";

const LabeledCheckbox = ({ label, require}: { label: ReactNode, require:boolean }) => {
  return (
    <div>
      {require ? <Checkbox className="w-fit !text-primary" required/> : <Checkbox className="w-fit !text-primary" /> }
      {label}
    </div>
  );
};

export default LabeledCheckbox;
