import React from "react";

export const Label = ({ val }) => {
  return (
    <div className="flex font-semibold flex-row gap-1">
      <div>{val}</div>
      <div className="text-red-500"> *</div>
    </div>
  );
};
