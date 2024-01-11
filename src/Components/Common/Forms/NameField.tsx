import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { FC } from "react";
import { PasswordFieldProps } from "../../../types";
import { GitHub, LinkedIn, LocationCity, MapsHomeWorkSharp, Person, Phone, School, SchoolTwoTone } from "@mui/icons-material";


/*
  firstName:string,
  lastName:string,
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




*/
export const FirstName: FC<PasswordFieldProps> = ({ register, error }) => {
  return (
    <div>
      <label htmlFor="fullname">First Name<span className="text-red-500"> * </span></label>
      <div className="flex border-2 border-solid border-slate-200 rounded-lg px-4 py-2 gap-6">
        <PersonOutlinedIcon className="text-slate-300" />
        <input
          type="text"
          placeholder="Ester Howard"
          className="outline-none"
          required
          {...register("first_name")}
        />
      </div>
      <div className="text-red-500">{error}</div>
    </div>
  );
};


export const LastName: FC<PasswordFieldProps> = ({ register, error }) => {
  return (
    <div>
      <label htmlFor="fullname">Last Name<span className="text-red-500"> * </span></label>
      <div className="flex border-2 border-solid border-slate-200 rounded-lg px-4 py-2 gap-6">
        <PersonOutlinedIcon className="text-slate-300" />
        <input
          type="text"
          placeholder="Ester Howard"
          className="outline-none"
          required
          {...register("last_name")}
        />
      </div>
      <div className="text-red-500">{error}</div>
    </div>
  );
};


export const CountryField: FC<PasswordFieldProps> = ({ register, error }) => {
  return (
    <div>
      <label htmlFor="fullname">Country<span className="text-red-500"> * </span></label>
      <div className="flex border-2 border-solid border-slate-200 rounded-lg px-4 py-2 gap-6">
        <MapsHomeWorkSharp  className="text-slate-300" />
        <input
          type="text"
          placeholder="Ethiopia"
          className="outline-none"
          required
          {...register("country")}
        />
      </div>
      <div className="text-red-500">{error}</div>
    </div>
  );
};

export const PhoneNumberField: FC<PasswordFieldProps> = ({ register, error }) => {
  return (
    <div>
      <label htmlFor="fullname">Phone Number<span className="text-red-500"> * </span></label>
      <div className="flex border-2 border-solid border-slate-200 rounded-lg px-4 py-2 gap-6">
        <Phone className="text-slate-300" />
        <input
          type="text"
          placeholder="0904342343"
          className="outline-none"
          required
          {...register("phone_number")}
        />
      </div>
      <div className="text-red-500">{error}</div>
    </div>
  );
};



export const CityField: FC<PasswordFieldProps> = ({ register, error }) => {
  return (
    <div>
      <label htmlFor="fullname">City<span className="text-red-500"> * </span></label>
      <div className="flex border-2 border-solid border-slate-200 rounded-lg px-4 py-2 gap-6">
        <LocationCity className="text-slate-300"/>
        <input
          type="text"
          placeholder="Addis Ababa"
          className="outline-none"
          required
          {...register("city")}
        />
      </div>
      <div className="text-red-500">{error}</div>
    </div>
  );
};

export const UniversityField: FC<PasswordFieldProps> = ({ register, error }) => {
  return (
    <div>
      <label htmlFor="fullname">University<span className="text-red-500"> * </span></label>
      <div className="flex border-2 border-solid border-slate-200 rounded-lg px-4 py-2 gap-6">
        <School className="text-slate-300" />
        <input
          type="text"
          placeholder="AASTU"
          className="outline-none"
          required
          {...register("university")}
        />
      </div>
      <div className="text-red-500">{error}</div>
    </div>
  );
};


export const DepartmentField: FC<PasswordFieldProps> = ({ register, error }) => {
  return (
    <div>
      <label htmlFor="fullname">Department<span className="text-red-500"> * </span></label>
      <div className="flex border-2 border-solid border-slate-200 rounded-lg px-4 py-2 gap-6">
        <SchoolTwoTone className="text-slate-300"  />
        <input
          type="text"
          placeholder="Software Engineering"
          className="outline-none"
          required
          {...register("department")}
        />
      </div>
      <div className="text-red-500">{error}</div>
    </div>
  );
};

export const GitLinkField: FC<PasswordFieldProps> = ({ register, error }) => {
  return (
    <div>
      <label htmlFor="fullname">GitHub<small className="text-gray-400">(optional)</small></label>
      <div className="flex border-2 border-solid border-slate-200 rounded-lg px-4 py-2 gap-6">
        <GitHub className="text-slate-300" />
        <input
          type="text"
          placeholder="https://www.github.com/username"
          className="outline-none"
          {...register("git_link")}
        />
      </div>
      <div className="text-red-500">{error}</div>
    </div>
  );
};



export const LinkdlnLinkField: FC<PasswordFieldProps> = ({ register, error }) => {
  return (
    <div>
      <label htmlFor="fullname">LinkedIn<small className="text-gray-400">(optional)</small></label>
      <div className="flex border-2 border-solid border-slate-200 rounded-lg px-4 py-2 gap-6">
        <LinkedIn className="text-slate-300" />
        <input
          type="text"
          placeholder="https://www.linkedin.com/in/username"
          className="outline-none"
          {...register("linkdln_link")}
        />
      </div>
      <div className="text-red-500">{error}</div>
    </div>
  );
};



export const ProfileImgField: FC<PasswordFieldProps> = ({ register, error }) => {
  return (
    <div>
      <label htmlFor="fullname">Profile Image<small className="text-gray-400">(optional)</small></label>
      <div className="flex border-2 border-solid border-slate-200 rounded-lg px-4 py-2 gap-6">
        <Person className="text-slate-300"/>
        <input
          type="text"
          placeholder="Ester Howard"
          className="outline-none"
          {...register("profile_img")}
        />
      </div>
      <div className="text-red-500">{error}</div>
    </div>
  );
};






