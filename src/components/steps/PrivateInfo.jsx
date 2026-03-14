import React from "react";
import { Input } from "../ui/Input";
import { Header } from "@/components/layer/Header";
import { ErrorMessage } from "../ui/ErrorMeassage";

export const PrivateInfo = ({ handleChange, formValues, formErrors }) => {
  return (
    <div className="w-[416px] h-[385px] flex flex-col gap-7">
      <Header />
      <div className="w-[416px] h-[228px] flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Input
            LabelName="First Name *"
            name="firstName"
            value={formValues.firstName}
            error={formErrors.firstName}
            onChange={handleChange}
            placeholder="Your first name"
            className={`w-full h-11 rounded-md p-3 border ${
              formErrors.firstName ? "border-red-500" : "border-[#cbd5e1]"
            }`}
          />
          <Input
            LabelName="Last Name *"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            error={formErrors.lastName}
            placeholder="Your last name"
            className={`w-full h-11 rounded-md p-3 border ${
              formErrors.lastName ? "border-red-500" : "border-[#cbd5e1]"
            }`}
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <Input
            LabelName="Username *"
            name="username"
            value={formValues.username}
            error={formErrors.username}
            onChange={handleChange}
            placeholder="Your username"
            className={`w-full h-11 rounded-md p-3 border border-blue-600 ${
              formErrors.username ? "border-red-500" : "border-red-500"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
