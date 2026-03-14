import React from "react";
import { Header } from "@/components/layer/Header";
import { Input } from "../ui/Input";
import { ErrorMessage } from "../ui/ErrorMeassage";

export const ContactInfo = ({ handleChange, formValues, formErrors }) => {
  return (
    <div className="w-[416px] flex flex-col gap-4">
      <Header />

      <div className="flex flex-col gap-3">
        <Input
          LabelName="Email *"
          type="email"
          name="email"
          error={formErrors.email}
          placeholder="Your email"
          value={formValues.email}
          onChange={handleChange}
          className={`w-full h-11 rounded-md p-3 border ${
            formErrors.email ? "border-red-500" : "border-[#cbd5e1]"
          }`}
        />
        <Input
          LabelName="Phone number *"
          type="text"
          name="phone"
          error={formErrors.phone}
          placeholder="Your phone number"
          value={formValues.phone}
          onChange={handleChange}
          className={`w-full h-11 rounded-md p-3 border ${
            formErrors.phone ? "border-red-500" : "border-[#cbd5e1]"
          }`}
        />

        <Input
          LabelName="Password *"
          type="password"
          name="password"
          error={formErrors.password}
          placeholder="Your password"
          value={formValues.password}
          onChange={handleChange}
          className={`w-full h-11 rounded-md p-3 border ${
            formErrors.password ? "border-red-500" : "border-[#cbd5e1]"
          }`}
        />

        <Input
          LabelName="Confirm Password *"
          type="password"
          error={formErrors.confirmPassword}
          name="confirmPassword"
          placeholder="Confirm password"
          value={formValues.confirmPassword}
          onChange={handleChange}
          className={`w-full h-11 rounded-md p-3 border ${
            formErrors.confirmPassword ? "border-red-500" : "border-[#cbd5e1]"
          }`}
        />
      </div>
    </div>
  );
};
