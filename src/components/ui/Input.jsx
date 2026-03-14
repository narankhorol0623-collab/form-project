import React from "react";
import { ErrorMessage } from "./ErrorMeassage";
import { Label } from "./Label";

export const Input = ({
  name,
  value,
  onChange,
  placeholder,
  LabelName,
  type = "text",
  hidden = false,
  error,
}) => {
  console.log(error);
  return (
    <div className="flex flex-col gap-1 text-[14px] w-full">
      {LabelName && (
        <label htmlFor={name} className="font-medium">
          {LabelName}
        </label>
      )}

      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        hidden={hidden}
        type={type}
        placeholder={placeholder}
        className={`w-full h-[44px] rounded-lg border p-3 ${error ? "border-red-500" : "border-[#CBD5E1]"}`}
      />

      {error && <ErrorMessage message={error} />}
    </div>
  );
};
